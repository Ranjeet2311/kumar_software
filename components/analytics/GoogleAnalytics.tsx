"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;
const CONSENT_KEY = "cookie_consent";

const IS_PROD = process.env.NODE_ENV === "production";

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (!IS_PROD) return;
    const hasConsent =
      typeof window !== "undefined" &&
      (localStorage.getItem(CONSENT_KEY) === "accepted" ||
        document.cookie.includes(`${CONSENT_KEY}=accepted`));

    if (hasConsent) setConsented(true);

    const onAccept = () => setConsented(true);
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () =>
      window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  if (!IS_PROD || !GA_ID || !consented) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive" nonce="ABC123">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
