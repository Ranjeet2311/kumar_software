"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "cookie_consent";
const IS_PROD = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    gtag?: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

export default function GoogleAnalyticsReporter() {
  const pathname = usePathname();

  useEffect(() => {
    if (!IS_PROD) return;

    const hasConsent =
      typeof window !== "undefined" &&
      (localStorage.getItem(CONSENT_KEY) === "accepted" ||
        document.cookie.includes(`${CONSENT_KEY}=accepted`));
    if (!hasConsent || !window.gtag) return;

    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
