'use client';

import { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function PearCreditsTooltip({ type }: { type: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const pearCreditsCount = useMemo(() => {
    return (type: string) => {
      if (type === 'free') {
        return '50';
      } else if (type === 'enterprise') {
        return '1000';
      }
      return '700';
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen} delayDuration={50}>
        <TooltipTrigger asChild>
          <Info
            className="mb-0.5 ml-1 inline-flex h-4 w-4 flex-shrink-0 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p className="max-w-[250px]">
            Current models include Claude 3.5 Sonnet, GPT4o, Gemini 1.5 Pro, and Claude 3.5 Haiku.
            <br /> <br />
            Your PearAI Credits usage depend on your prompt input and output sizes. On average, this
            equates to around {pearCreditsCount(type)} requests
            {type === 'free' && ' for our current free trial'}.
            {type !== 'free' && (
              <>
                <br /> <br />
                If you happen to run out of credits, you can top up from your dashboard.
              </>
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
