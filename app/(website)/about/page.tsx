import { FC } from 'react';
import { Card, CardContent, CardDescription, Badge } from '@/components/ui';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'About | PearAi',
  canonical: '/about',
});

export default function About() {
  return (
    <section className={'mt-36'}>
      <div className={'m-4 mt-0 flex flex-col items-center text-center lg:m-0 lg:justify-center'}>
        <h1 className="text-4xl font-bold">
          PearAI is{' '}
          <span className="relative">
            <span className="text-primary-700 relative z-10">built in public</span>
            <span className="h-sub bg-green-sub absolute bottom-0 left-0 w-full"></span>
          </span>
          , and we&apos;re just getting started.
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          PearAI&apos;s mission is to reduce the time it takes for you to go from idea to creation.
          The first time you may have seen us, you saw our MVP. Today, here’s our V1, and how we’re
          building for the future of coding with AI.
          <br /> <br />
          We are a curated inventory of the best AI tools on the market (ie. Perplexity, aider,
          mem0, etc.), to make it easy for you to make what you want. Imagine if VSCode was
          reimagined with AI in mind since the beginning, or an extensible AI code editor with the
          best UX possible. View our future plans below!
        </p>
      </div>
      <div className="my-10 flex flex-col items-center justify-center">
        <p className="mb-3 mt-4 text-xs text-gray-700">Current features include</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            PearAI Inventory: Best AI tools integrated into one UX
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            PearAI Chat: Talk to your code
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            PearAI Creator: Automatic code generation
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            PearAI Search: Up-to-date AI search
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            Inline AI prompting and diff changes
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 text-primary-800 dark:text-primary-700 font-medium">
            AI debugging, including errors from terminal
          </Badge>
        </div>
      </div>

      <div className="m-auto mb-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Community</span>
            <span className="h-sub bg-green-sub absolute bottom-0 left-0 w-full"></span>
          </span>
        </h2>
        <div className="max-w-2xl text-gray-500">
          <p className="mt-6 text-center">
            PearAI is fueled by its most important thing, the community. Join our Discord with +2000
            developers and friends all trying to create the best AI code editor in the world
            together.
          </p>
        </div>
      </div>
      <br />

      <div className="mt-0 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Founders</span>
            <span className="h-sub bg-green-sub absolute bottom-0 left-0 w-full"></span>
          </span>
        </h2>

        <div className="max-w-2xl text-gray-500">
          <p className="mt-6 text-center">
            PearAI is founded by Pan and Nang, both software engineers who worked on internal and
            developer tooling teams at companies like Meta, Coinbase, Two Sigma, among others.
            Together, they have over 500k subscribers on Youtube.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">The Future</span>
            <span className="h-sub bg-green-sub absolute bottom-0 left-0 w-full"></span>
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          Currently, we have hit a checkpoint in our product, where layers of the tech stack (i.e.
          Search, RAG, Chat, etc.) can communicate with each other under a single, beautiful user
          experience our users love. This is our V1, and we’re just getting started. Building for
          the future, we envision PearAI as a framework for all AI tools to live and integrate. Not
          only will the number of layers of the AI tech stack grow, but the number of companies
          solving each layer of this AI tech stack. As a result, the quality of each product for
          every part of coding with AI will improve. The best user experience can be achieved if
          these AI tools have a framework to communicate with each other, and users have access to
          these AI tools in a single, unified IDE. This will be PearAI.
        </p>
      </div>
    </section>
  );
}

type VideoItem = {
  src: string;
  title: string;
  description: string;
};

const videoData: VideoItem[] = [
  {
    src: 'https://www.youtube.com/embed/Rzk3GmXUySs?si=2Y25oMlhbQWZpu1K',
    title: "Frying Pan's Latest YouTube video",
    description:
      "Pan shows the journey after just starting to build out PearAI. The product is described and a demo is shown. You also get to see a sneak peak into the founders' week, and see the difficulties, the highs and lows we experience, all in NYC.",
  },
  {
    src: 'https://www.youtube.com/embed/hHm4mtIp6K0',
    title: "Nang's Latest YouTube video",
    description:
      'Nang introduces PearAI, an AI-powered code editor aimed at transforming software development. He shares his journey from a high-paying job to pursuing startups and YouTube, encouraging viewers to chase their dreams with determination.',
  },
];

const VideoCard: FC<VideoItem> = ({ src, title, description }) => (
  <Card>
    <CardContent className="flex min-h-96 w-full max-w-[30rem] flex-col-reverse p-4 sm:flex-col">
      <div className="group relative mt-4 pb-64 sm:mb-4 sm:mt-0">
        <iframe
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded group-hover:pointer-events-auto"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-gray-500">{description}</CardDescription>
    </CardContent>
  </Card>
);
