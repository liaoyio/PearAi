import Image from 'next/image';
import { timeIntervalFormat } from '@/utils/lib';
import { createMetadata } from '@/utils/metadata';
import { changelog_list } from './_changelog';

export const metadata = createMetadata({
  title: 'Change Logs | Engila',
  description: 'The change logs for PearAI.',
  canonical: '/changelog',
});

export default async function ChangeLogPage() {
  return (
    <div className="mx-auto mb-32 mt-36 min-h-screen max-w-[1070px] px-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-primary-700 text-5xl font-bold">Change Logs</h1>
        <h2 className="text-gray-800">
          Only major version updates are shown here. For most recent updates, see the #releases
          channel in our Discord or our GitHub commits.
        </h2>
      </header>
      <main>
        {/* <!-- Timeline --> */}
        {changelog_list.map((update, idx) => (
          <TimelineItem key={idx} {...update} />
        ))}
      </main>
    </div>
  );
}

type TimelineItemProps = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  version,
  screenshot,
}) => {
  return (
    <article className="mb-8 mt-28 flex gap-x-3">
      {/* <!-- Left Content --> */}
      <div className="hidden w-40 flex-shrink-0 text-end lg:block">
        <time dateTime={date} className="block text-lg">
          {date}
        </time>
        <time dateTime={date} className="block text-base text-gray-700 dark:text-gray-400">
          {timeIntervalFormat(date)}
        </time>
      </div>
      {/* <!-- Icon --> */}
      <div className="relative z-10 mt-2 hidden h-6 w-7 items-center justify-center lg:flex">
        <div className="h-2 w-2 rounded-full bg-gray-300 dark:text-gray-400"></div>
      </div>
      {/* <!-- Right Content --> */}
      <div className="grow">
        <div className="justify-between gap-10 md:flex">
          <div>
            <h3 className="flex items-baseline gap-x-1.5 text-lg font-bold md:text-2xl lg:mb-5">
              {version} &nbsp;&nbsp;{title}
            </h3>
            <div className="my-3 flex items-center gap-x-2 lg:hidden">
              <time dateTime={date} className="text-xs font-semibold text-gray-600">
                {date}
              </time>
              <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-neutral-500"></div>
              <time dateTime={date} className="block text-base">
                <div className="text-xs font-semibold text-gray-600">
                  {timeIntervalFormat(date)}
                </div>
              </time>
            </div>
            <div className="mb-4 text-gray-800">{description}</div>
          </div>
          {screenshot && (
            <div className="pr-4 md:ml-auto md:w-full md:max-w-xs">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
