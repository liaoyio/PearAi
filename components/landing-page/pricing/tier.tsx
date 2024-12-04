'use client';

import React, { useEffect, useState, useRef, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Spinner,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button
} from '@/components/ui';
import { cn } from '@/utils/cn';
import { Apple, Windows, Linux } from '@/assets/icons';
import { useCheckout } from '@/hooks/useCheckout';
import { PricingTierProps } from '@/types/pricing';

import PearCreditsTooltip from './tooltip';

interface ExtendedPricingTierProps extends PricingTierProps {
  disabled?: boolean;
}

type VersionInfo = { version: string; releaseDate: string };

const platformVersions: Record<string, VersionInfo> = {
  Windows: {
    version: 'v1.5.1',
    releaseDate: 'Nov 12, 2024',
  },
  'Mac (M chip)': {
    version: 'v1.5.1',
    releaseDate: 'Nov 17, 2024',
  },
  'Mac (Intel)': {
    version: 'v1.5.1',
    releaseDate: 'Nov 17, 2024',
  },
  Linux: {
    version: 'v1.5.0',
    releaseDate: 'Nov 12, 2024',
  },
};

const PricingTier: React.FC<ExtendedPricingTierProps> = ({
  title,
  prevPrice,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
  index,
  disabled,
  priceUnit = '/month',
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();
  const router = useRouter();

  // used to ensure animations run after mount client-side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const styles = {
    backgroundImage: 'linear-gradient(45deg, #1a237e, #006064, #1b5e20, #006064, #b71c1c)',
    backgroundSize: '300% 300%',
    animation: 'rainbow-animation 5s ease infinite',
    color: 'white',
    transition: 'all 0.3s ease',
  };

  const gradientStyle = mounted ? styles : {};

  const handleDownload = async (os_type: string) => {
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/download?os_type=${os_type}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw Error(res.statusText);
      }

      const download = await res.json();
      if (download?.url) {
        setDownloadLink(download.url);
        router.push(download.url);
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error((error as any).message);
    } finally {
      setIsDownloading(false);
    }
  };

  const featureRowDescription = (feature: string) => {
    if (feature?.startsWith('custom-standard')) {
      return (
        <div className="flex items-center">
          <span>
            Monthly refill of PearAI Credits for market-leading AI models
            <PearCreditsTooltip type="standard" />
          </span>
        </div>
      );
    } else if (feature?.startsWith('free')) {
      return (
        <div className="flex items-center">
          <span>
            Use our free trial, your own API key, or local models
            <PearCreditsTooltip type="free" />
          </span>
        </div>
      );
    } else if (feature?.startsWith('custom-enterprise')) {
      return (
        <div className="flex items-center">
          <span>
            Monthly refill of <span className="underline"> increased</span> PearAI Credits for
            market-leading AI models
            <PearCreditsTooltip type="enterprise" />
          </span>
        </div>
      );
    }
    return feature;
  };
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && 'from-primary-600/5 ring-primary-900/40 dark:from-primary-600/5 dark:ring-primary-600/20'}`}
    >
      <div className="flex h-full w-full flex-col">
        <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
          <CardTitle className="text-primary-700 text-2xl leading-6">
            {title}
            &nbsp;
            {index === 1 && title === 'Junior Engineer' && '(Monthly)'}
            {index === 2 && title === '10x Engineer' && '(Yearly)'}
          </CardTitle>
          <p className="text-base font-normal text-gray-600 sm:text-base md:text-sm">
            {index === 0 && isFree && (
              <>You can download PearAI directly, and use our free trial, or your own API key 🤓</>
            )}
            {!isFree && description}
          </p>
        </CardHeader>
        <CardContent className="mt-5 flex flex-grow flex-col px-6">
          {!isFree ? (
            <div className="flex flex-col items-start justify-center">
              <p
                className="text-2xl text-gray-900 sm:text-3xl"
                aria-label={`Price: $${price} per month`}
              >
                ${price}
                <small className="text-base text-gray-400 sm:text-lg">{priceUnit}</small>
                &nbsp;
                <small className="text-primary-700 text-base sm:text-lg">
                  &#40;Early Bird&#41;
                </small>
              </p>
              <p
                className="text-base text-gray-400 sm:text-lg"
                aria-label={`Original price: $${prevPrice} per month`}
              >
                <del>${prevPrice}</del>
                <small>{priceUnit}</small>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-center">
              <p className="text-2xl text-gray-900 sm:text-3xl" aria-label="Price: Free">
                Free
              </p>
              <p className="sm text-base text-gray-400" aria-label="Tagline: Start coding">
                Free requests out of the box, no credit card required.
              </p>
            </div>
          )}
          {features && (
            <ul className="mt-5 w-full" aria-label={`Features of ${title} plan`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center py-2 text-gray-600">
                  <Check
                    className="text-primary-700 mr-3 h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {featureRowDescription(feature)}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          {isDownloading ? (
            <Spinner className="mb-4 ml-4 border" />
          ) : (
            isFree &&
            (downloadLink !== undefined ? (
              <p className="text-gray-400">
                Thanks for trying out PearAI! Your download should have started, if it hasn&apos;t,
                click{' '}
                <a
                  className="text-primary-700 hover:text-primary-800 cursor-pointer transition-colors"
                  href={downloadLink}
                >
                  here
                </a>
                .
              </p>
            ) : (
              <div className="flex w-full flex-col items-center gap-2">
                <TooltipProvider>
                  <Tooltip delayDuration={50}>
                    <TooltipTrigger asChild>
                      <div className="ml-2 mr-auto text-sm text-gray-500">
                        <span className="underline">Version info</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="flex flex-col space-y-2 p-3">
                      <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
                        {Object.entries(platformVersions).map(([platform, info]) => (
                          <Fragment key={platform}>
                            <span className="font-medium">{platform}:</span>
                            <div className="flex items-center gap-1">
                              <div>{info.version}</div>
                              <div className="text-xs text-gray-400">({info.releaseDate})</div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="flex w-full max-w-md gap-2">
                  <Button
                    className={cn('rainbow-gradient', 'font-bold', 'flex-1')}
                    onClick={() => handleDownload('windows')}
                  >
                    <Windows className="fill-white-main h-[18px] w-[18px]" />
                    Windows
                  </Button>

                  <Button
                    className={cn('rainbow-gradient', 'font-bold', 'flex-1')}
                    onClick={() => (window.location.href = '/blog/download-pearai-on-linux')}
                  >
                    <Linux className="fill-white-main h-[18px] w-[18px]" />
                    Linux x64
                  </Button>
                </div>
                <div className="flex w-full max-w-md">
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        ref={buttonRef}
                        style={gradientStyle}
                        className="relative flex w-full items-center justify-center px-4 py-2 transition-opacity hover:opacity-90"
                      >
                        <div className="flex items-center">
                          <Apple className="mr-2 h-[18px] w-[18px] fill-current" />
                          <span>MacOS</span>
                        </div>
                        <ChevronDown size="20" className="absolute right-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="center"
                      style={{
                        width: buttonWidth !== null ? `${buttonWidth}px` : 'auto',
                      }}
                      className="flex flex-col items-center justify-center border border-border/50 bg-background p-1"
                    >
                      <DropdownMenuItem
                        className="focus:bg-secondary-300/10 flex w-full justify-center rounded px-2 py-1.5 text-sm"
                        onSelect={() => handleDownload('darwin-arm64')}
                      >
                        Silicon (M chip)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="focus:bg-secondary-300/10 flex w-full justify-center rounded px-2 py-1.5 text-sm"
                        onSelect={() => handleDownload('intel-x64')}
                      >
                        Intel chip
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          )}
          {!isFree && (
            <>
              {disabled ? (
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={() => priceId && handleCheckout(priceId)}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={`Subscribe to ${title} plan`}
                >
                  {isSubmitting ? 'Processing...' : buttonText}
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default PricingTier;
