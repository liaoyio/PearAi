export function timeIntervalFormat(date: string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInMs = now.getTime() - past.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

type SupportedPlatform = "Windows" | "Linux" | "MacOS";
type DownloadAlias = "intel-x64" | "darwin-arm64" | "windows" | "linux";

interface OSType {
  platform: SupportedPlatform;
  architecture: "x64" | "arm";
  download: DownloadAlias;
}

export async function getOS(): Promise<OSType> {
  try {
    const userAgent = await ((navigator as any).userAgentData
      ? (navigator as any).userAgentData.getHighEntropyValues(["architecture"])
      : navigator.userAgent);
    if (typeof userAgent === "string") {
      let propertiesString = "";
      for (let i = 0; i < userAgent.length; i++) {
        if (i < userAgent.indexOf("(")) continue;
        if (userAgent[i] === "(") continue;
        if (userAgent[i] === ")") break;
        propertiesString += userAgent[i];
      }
      const properties = propertiesString.split("; ");
      const platformString =
        properties
          .find(
            (str) =>
              str.toLowerCase().includes("mac") ||
              str.toLowerCase().includes("linux") ||
              str.toLowerCase().includes("win"),
          )
          ?.toLowerCase() ?? "";
      const architectureString =
        properties
          .find(
            (str) =>
              str.toLowerCase().includes("arm") ||
              str.toLowerCase().includes("x86") ||
              str.toLowerCase().includes("x64") ||
              str.toLowerCase().includes("intel") ||
              str.toLowerCase().includes("silicon"),
          )
          ?.toLowerCase() ?? "";
      let platform: "Windows" | "MacOS" | "Linux";
      if (platformString.includes("win")) {
        platform = "Windows";
      } else if (platformString.includes("mac")) {
        platform = "MacOS";
      } else {
        platform = "Linux";
      }
      let architecture: "x64" | "arm";
      if (
        architectureString.includes("x64") ||
        architectureString.includes("x86")
      ) {
        architecture = "x64";
      } else {
        architecture = "arm";
      }

      // MacOS userAgent String
      // e.g.'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      if (platform === "MacOS") {
        const split = architectureString.split(" ");
        const version = split
          .find((str) => str.includes("10"))
          ?.split("_")[1] as string;
        const versionNumber = parseInt(version);
        if (typeof versionNumber === "number" && !isNaN(versionNumber)) {
          if (versionNumber > 13) {
            architecture = "arm";
          } else {
            architecture = "x64";
          }
        }
      }
      const download: "darwin-arm64" | "intel-x64" | "windows" | "linux" =
        (platform === "MacOS" && architecture === "x64" && "intel-x64") ||
        (platform === "MacOS" && architecture === "arm" && "darwin-arm64") ||
        (platform === "Windows" && "windows") ||
        (platform === "Linux" && "linux") ||
        "linux";
      return {
        platform: platform,
        architecture: architecture,
        download: download,
      };
    }
    if (
      typeof userAgent === "object" &&
      userAgent.platform &&
      userAgent.architecture
    ) {
      let platform: SupportedPlatform;
      let download: DownloadAlias;
      let architecture: "x64" | "arm";
      if (userAgent.platform !== "macOS") {
        platform = userAgent.platform;
        download = userAgent.platform.toLowerCase();
      } else {
        platform = "MacOS";
        if (userAgent.architecture === "arm") {
          download = "darwin-arm64";
        } else {
          download = "intel-x64";
        }
      }

      if (userAgent.architecture === "arm") {
        architecture = "arm";
      } else {
        architecture = "x64";
      }

      return {
        platform: platform,
        architecture: architecture,
        download: download,
      };
    }
    return { platform: "Linux", architecture: "x64", download: "linux" };
  } catch (err) {
    return { platform: "Linux", architecture: "x64", download: "linux" };
  }
}
