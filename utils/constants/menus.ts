import { Discord, GitHub, LinkedIn, Twitter } from '@/assets/icons';

export const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'App Privacy Policy', href: '/privacy-app' },
      { text: 'Terms of Service', href: '/terms-of-service' },
      { text: 'Disclaimer', href: '/disclaimer' },
    ],
  },
  {
    title: 'Product',
    links: [
      { text: 'Documentation', href: '/docs' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Blog', href: '/blog' },
      { text: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'FAQ', href: '/faq' },
      { text: 'Email', href: 'mailto:pear@trypear.ai' },
      { text: 'Discord', href: 'https://discord.gg/7QMraJUsQt', target: '_blank' },
    ],
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    icon: GitHub,
    link: 'https://github.com/trypear/pearai-master',
  },
  {
    icon: Discord,
    link: 'https://discord.gg/AKy5FmqCkF',
  },
  {
    icon: Twitter,
    link: 'https://x.com/trypearai',
  },
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/company/trypearai',
  },
];
