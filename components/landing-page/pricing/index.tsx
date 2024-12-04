'use client';

import { toast } from 'sonner';

import PricingTier from '@/components/landing-page/pricing/tier';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { PRICING_TIERS, CONTACT_EMAIL } from '@/utils/constants';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Pricing',
  description: 'The pricing and download page for PearAI.',
  canonical: '/pricing',
});

export default async function Pricing() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-24" aria-labelledby="pricing-heading">
      <div className="bg-primary-800/30 absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="mt-8 text-4xl font-medium leading-tight sm:text-4xl md:text-4xl lg:text-4xl"
            >
              Speed up your
              <br />
              development today.
            </h1>
          </header>

          <Tabs defaultValue="standard" className="mt-[20px] flex w-full flex-col items-center">
            <TabsList className="h-full rounded-full bg-gray-300/20 px-2 py-2 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
              <TabsTrigger
                value="standard"
                className="text-secondary-main data-[state=active]:bg-primary-800 dark:text-white-main w-[135px] rounded-full px-4 py-2"
              >
                Standard
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="text-secondary-main data-[state=active]:bg-primary-800 dark:text-white-main ml-[6px] w-[135px] rounded-full px-4 py-2"
              >
                Enterprise
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="standard"
              className="w-full space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6"
            >
              <div className="from-primary-800/[0.15] mt-[20px] flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
                <div className="flex w-full items-center justify-between rounded-md">
                  <p className="block w-max items-center justify-start md:flex">
                    <span className="text-primary-700 dark:text-primary-800">
                      Be the early bird and get a discount
                    </span>
                    &nbsp;
                    <span className="text-primary-900 dark:text-primary-700">forever</span>
                  </p>

                  <p className="block w-max items-center justify-end text-right md:flex">
                    <strong className="text-primary-900 text-lg dark:text-gray-900">
                      20-30% off
                    </strong>
                    &nbsp;
                    <span className="text-primary-700 dark:text-primary-300 font-normal">
                      &#40;forever&#41;
                    </span>
                  </p>
                </div>
              </div>
              {PRICING_TIERS.standard && (
                <div
                  className="mt-[20px] grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                  role="list"
                >
                  {PRICING_TIERS.standard.map((tier, index) => (
                    <div key={index} role="listitem">
                      <PricingTier {...tier} user={null} index={index} />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent
              value="enterprise"
              className="w-full space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6"
            >
              <div className="from-primary-800/[0.15] mt-[20px] flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
                <div className="flex w-full items-center justify-between rounded-md">
                  <p className="block w-max items-center justify-start md:flex">
                    <span className="text-primary-700 dark:text-primary-800">
                      Be the early bird and get a discount
                    </span>
                    &nbsp;
                    <span className="text-primary-900 dark:text-primary-700">forever</span>
                  </p>

                  <p className="block w-max items-center justify-end text-right md:flex">
                    <strong className="text-primary-900 text-lg dark:text-gray-900">
                      20-30% off
                    </strong>
                    &nbsp;
                    <span className="text-primary-700 dark:text-primary-300 font-normal">
                      &#40;forever&#41;
                    </span>
                  </p>
                </div>
              </div>
              {PRICING_TIERS.enterprise && (
                <div
                  className="mt-[20px] grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2"
                  role="list"
                >
                  {PRICING_TIERS.enterprise.map((tier, index) => (
                    <div key={index} role="listitem">
                      <PricingTier
                        {...tier}
                        user={null}
                        index={index}
                        priceUnit="/month/user"
                        disabled
                      />
                    </div>
                  ))}
                </div>
              )}
              <footer className="text-center">
                <p className="text-base text-gray-400 sm:text-lg md:text-xl">
                  Interested in these plans?
                  <button
                    className="text-primary-700 hover:text-primary-800 ml-2 font-semibold transition-colors"
                    aria-label="Contact us for custom plans"
                    onClick={() => {
                      navigator.clipboard.writeText(CONTACT_EMAIL);
                      toast.success('Email copied to clipboard!');
                    }}
                  >
                    Contact us
                  </button>!
                </p>
              </footer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
