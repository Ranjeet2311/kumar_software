"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

export default function GoogleAnalyticsReporter() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
