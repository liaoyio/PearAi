'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MobileFeatures = dynamic(() => import('./mobile'), { ssr: false });
const DesktopFeatures = dynamic(() => import('./desktop'), { ssr: false });

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1049);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="mx-6">
      <div className="mx-auto w-full max-w-3xl py-6 lg:max-w-[1049px]">
        <div className="rounded-xl border-[1.5px] px-5 py-8">
          {isMobile ? <MobileFeatures /> : <DesktopFeatures />}
        </div>
      </div>
    </div>
  );
}
