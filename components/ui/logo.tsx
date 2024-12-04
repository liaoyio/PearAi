import { LinkItemType } from 'fumadocs-ui/layouts/docs';
import { Building2, BookOpenText, NotebookPen, FileClock, ScanFace, Crown } from 'lucide-react';
import { PearHeroLogo, Github } from '@/assets/icons';

export const Title = () => {
  return (
    <>
      <h3 className="flex flex-shrink-0 items-center" aria-label="PearAI Home">
        <PearHeroLogo className="mb-1 h-7" />
        <div className="ml-1 text-2xl font-bold">PearAI</div>
      </h3>
      {/* <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">PearAI</span> */}
    </>
  );
};

export const linkItems: LinkItemType[] = [
  {
    type: 'menu',
    text: 'Resources',
    items: [
      {
        icon: <Building2 />,
        text: 'About',
        description: 'Learn more about PearAI.',
        url: '/about',
        menu: { className: 'mt-6' },
      },
      {
        icon: <NotebookPen />,
        text: 'Blog',
        description: `Read insights on PearAI's development by our contributors`,
        url: '/blog',
        menu: { className: 'mt-6' },
      },
      {
        icon: <ScanFace />,
        text: 'FAQ',
        description: 'Frequently asked questions about PearAI.',
        url: '/faq',
        menu: { className: 'mt-6' },
      },
      {
        icon: <FileClock />,
        text: 'Changelog',
        description: `See what's new in PearAI`,
        url: '/changelog',
        menu: { className: 'mt-2' },
      },
    ],
  },
  {
    icon: <BookOpenText />,
    text: 'Documentation',
    url: '/docs',
    active: 'nested-url',
  },
  {
    icon: <Crown />,
    text: 'Pricing',
    url: '/pricing',
    active: 'url',
  },
  {
    // type: 'icon',
    url: 'https://github.com/trypear/pearai-master',
    text: 'Github',
    icon: <Github />,
    active: 'url',
    // external: true,
  },
];
