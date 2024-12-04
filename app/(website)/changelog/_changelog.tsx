import { ReactNode } from 'react';
import Link from 'next/link';

type ChangelogEntry = {
  date: string;
  title: string;
  description: ReactNode;
  version: string;
};

export const changelog_list: ChangelogEntry[] = [
  // =================================================================
  {
    date: '9 October 2024',
    title: 'Open Source Fixes',
    version: 'v1.3.0',
    description: (
      <>
        <h2 className="mt-6 text-lg font-medium">Fixes</h2>
        <ul className="mt-2 list-disc space-y-3 ps-6 text-lg">
          <li>
            <Link
              href="https://x.com/trypearai/status/1843336384322601366"
              className="text-primary-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Added open source fixes
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  // =================================================================
  {
    date: '18 September 2024',
    title: 'File Creation + WSL Support',
    version: 'v1.1.0 + v1.2.0',
    description: (
      <>
        <h2 className="mt-6 text-lg font-medium">Features 🎉</h2>

        <ul className="mt-2 list-disc space-y-3 ps-6">
          <li className="">
            <Link href="/blog/gpt-o1" className="text-primary-600 hover:underline">
              Introduced GPT-o1 support &nbsp;
            </Link>
            for annual subscription members
          </li>
          <li className="">File Creation ✏️</li>
          <li className="">
            WSL - Read blog post on &nbsp;
            <span className="mb-4">
              <Link href="/blog/wsl-setup" className="text-primary-600 hover:underline">
                how to setup WSL (Windows Subsystem for Linux)
              </Link>
            </span>
          </li>
          <li className="">
            <span className="mr-1 rounded-lg bg-green-100 px-1 py-0.5 text-black">/v0</span>
            create a <span className="font-mono">v0</span> component link directly from pearai
          </li>
          <li className="">Auto Updating for Mac 📦</li>
          <li className="">PearAI Theme</li>
        </ul>

        <h2 className="mt-6 text-lg font-medium">Improvements</h2>
        <ul className="mt-2 list-disc space-y-3 ps-6">
          <li className="">
            <span className="mr-1 rounded-lg bg-green-100 px-2 py-0.5 text-black">/sensei</span>{' '}
            slash command which will help you learn by guiding rather than providing direct answers
          </li>
          <li className="">
            <span className="mr-1 rounded-lg bg-green-100 px-2 py-0.5 text-black">/leetcode</span>{' '}
            slash command, it will help you learn by guiding like a interviewer
          </li>
          <li className="">Preserve extension state on import from vscode</li>
          <li className="">Default PearAI Themes</li>
        </ul>
      </>
    ),
  },
  // =================================================================
  {
    date: '30 August 2024',
    title: 'PearAI v1.0.0 - The Cupertino v1 Launch',
    version: '🎉 v1.0.0',
    description: (
      <>
        <p className="text-primary-700 mb-4 text-lg font-medium">
          Welcome to the future of AI-assisted development
        </p>

        <ul className="mt-10 list-disc space-y-3 ps-6">
          <li>🎓 Onboarding revamp</li>
          <li>🛠 Fixed &quot;Continue generating&quot; feature</li>
          <li>🔄 Model Choice on PearAI Server</li>
          <li>⌨️ Improved shortcuts</li>
          <li>🆘 Improved help window</li>
          <li>🔓 Enabled free trials</li>
          <li>🌐 Server improvements, added prompt caching</li>
          <li>🚀 Launched to public!</li>
        </ul>
      </>
    ),
  },
  // =================================================================
  {
    date: '19 August 2024',
    title: '🚧 Model switch feature & Bug Fixes',
    version: 'v0.0.3',
    description: (
      <ul className="list-disc space-y-3 ps-6">
        <li>
          <Link
            href="https://github.com/trypear/pearai-submodule/pull/137"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Huge refactor
          </Link>
          & Performance improvements
        </li>
        <li>Added Mistral AI support</li>
        <li>Easy model switching</li>
        <li>Settings page revamp</li>
        <li>Added FAQ Page</li>
        <li>CMD+I context + options improved</li>
        <li>
          <span className="mr-1 rounded-lg bg-green-100 px-2 py-1 text-black">@codebase</span>{' '}
          searching enhanced
        </li>
        <li>PearAI token refresh bug fixed</li>
        <li>Onboarding flow revamp</li>
      </ul>
    ),
  },
  // =================================================================
  {
    date: '2 August 2024',
    title: '🌟 Claude Sonnet Model, UI/UX improvements',
    version: 'v0.0.2',
    description: (
      <div className="flex flex-col gap-y-4">
        <ul className="list-disc space-y-3 ps-6">
          <li>New AI Model - Claude 3.5 Sonnet</li>
          <li>Shortcuts Bar</li>
          <li>UI/UX improvements</li>
          <li>Bug fixes, including some extensions not working</li>
        </ul>
      </div>
    ),
  },
  // =================================================================
  {
    date: '15 July 2024',
    title: '🚀 Initial Launch',
    version: 'v0.0.1',
    description: (
      <div className="flex flex-col gap-y-4">
        <ul className="list-disc space-y-3 ps-6">
          <li>VSCode Fork - Feel right at home</li>
          <li>Chat with AI models who have full code context</li>
          <li>
            Tag your files{' '}
            <span className="ml-1 rounded-lg bg-green-100 px-2 py-1 text-black">@filename</span>
          </li>
        </ul>
      </div>
    ),
  },
  // =================================================================
];
