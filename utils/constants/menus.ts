import { Discord, GitHub, LinkedIn, Twitter } from '@/assets/icons';
import { PricingTierData } from '@/types/pricing';

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

export const TEST_MODE_ENABLED = ['true', 'True', 'TRUE'].includes(
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED ?? '',
);

//  Next Public Stripe
const waitlist_price_id = 'price_1PZ9X608N4O93LU5yqMbGDtu';
const waitlist_price_id_test = 'price_1PZUT208N4O93LU5jItKoEYu';
const monthly_price_id = 'price_1PoZiZ08N4O93LU5kCrdrXvI';
const monthly_price_id_test = 'price_1Ppa9408N4O93LU5irNxLp5p';
const annual_price_id = 'price_1PpZUO08N4O93LU5FYFUyh43';
const annual_price_id_test = 'price_1PZUSi08N4O93LU5UVdlkfp2';
const top_up_5_credits_id = 'price_1Q8xJU08N4O93LU5jvruga2e';
const top_up_5_credits_id_test = 'price_1Q8vto08N4O93LU5avr7qtyJ';
const top_up_10_credits_id = 'price_1Q8xKo08N4O93LU5F4dbgrgz';
const top_up_10_credits_id_test = 'price_1Q8vqw08N4O93LU5wHyY1Dqg';
const top_up_15_credits_id = 'price_1Q8xKo08N4O93LU5dC9MUfYU';
const top_up_15_credits_id_test = 'price_1Q8AcI08N4O93LU5ALafGrbP';
const top_up_30_credits_id = 'price_1Q8xKo08N4O93LU5CGjikmTp';
const top_up_30_credits_id_test = 'price_1Q8vu608N4O93LU5z4DWu82N';

export const STRIPE_PRICE_IDS = {
  WAITLIST: TEST_MODE_ENABLED ? waitlist_price_id_test : waitlist_price_id,
  MONTHLY: TEST_MODE_ENABLED ? monthly_price_id_test : monthly_price_id,
  ANNUAL: TEST_MODE_ENABLED ? annual_price_id_test : annual_price_id,
  TOP_UP_CREDITS: {
    5: TEST_MODE_ENABLED ? top_up_5_credits_id_test : top_up_5_credits_id,
    10: TEST_MODE_ENABLED ? top_up_10_credits_id_test : top_up_10_credits_id,
    15: TEST_MODE_ENABLED ? top_up_15_credits_id_test : top_up_15_credits_id,
    30: TEST_MODE_ENABLED ? top_up_30_credits_id_test : top_up_30_credits_id,
  } as Record<number, string>,
};

export const PRICING_TIERS: {
  standard: PricingTierData[];
  enterprise: PricingTierData[];
} = {
  standard: [
    {
      title: 'Intern',
      price: '0',
      description:
        'You can download PearAI directly, and use our free trial, or your own API key 🤓',
      isFree: true,
      index: 0,
      features: ['free', 'Community Discord server'],
    },
    {
      title: 'Junior Engineer',
      price: '15',
      prevPrice: '18',
      description: "Get the monthly subscription, and we'll take care of you. 😎",
      features: [
        'custom-standard',
        'Full privacy: zero data retention policy with Anthropic',
        'Direct customer support by the founders and contributors',
        'Private Discord channel',
      ],
      buttonText: 'Get Started',
      priceId: STRIPE_PRICE_IDS.MONTHLY,
      index: 1,
    },
    {
      title: '10x Engineer',
      price: '10',
      prevPrice: '14',
      description: "Pay one lump sum yearly, and you'll be treated like our VIP! 🤩",
      features: [
        'Everything from monthly',
        'Priority for new feature requests',
        'Early access to new features (e.g. o1-mini and o1-preview)',
      ],
      buttonText: 'Get Started',
      priceId: STRIPE_PRICE_IDS.ANNUAL,
      index: 2,
    },
  ],
  enterprise: [
    {
      title: 'Monthly',
      price: '32',
      prevPrice: '35',
      description:
        'Get the best deal for your business and increase the productivity of your team.',
      features: [
        'custom-enterprise',
        'Full privacy: zero data retention policy with Anthropic',
        'Centralized Billing and Dashboard',
        'Direct customer support by the founders and contributors',
        'Private Discord Channel',
      ],
      buttonText: 'Get Started',
      priceId: STRIPE_PRICE_IDS.MONTHLY,
      index: 0,
    },
    {
      title: 'Yearly',
      price: '27',
      prevPrice: '30',
      description: 'Pay one lump sum yearly for our highest priority tier.',
      features: ['Everything from monthly', 'Priority Customer Support'],
      buttonText: 'Get Started',
      priceId: STRIPE_PRICE_IDS.ANNUAL,
      index: 1,
    },
  ],
};
