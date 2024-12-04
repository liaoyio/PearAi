"use client";

import { Button } from "@/components/ui";
import { ArrowDownToLine } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DownloadButton({ user }: { user: any | null }) {
  const router = useRouter();
  // TODO download
  const handleDownload = async () => { };

  return (
    <Button
      variant={user ? 'outline' : 'default'}
      size={`${user ? "icon" : "default"}`}
      className={user ? "size-8 rounded-full" : "h-8 rounded-lg px-3"}
      onClick={handleDownload}
    >
      {user ? <ArrowDownToLine size={15} /> : "Download"}
    </Button>
  );
}
