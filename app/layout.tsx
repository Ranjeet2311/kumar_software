import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import { ReduxProvider } from "@/store/slices/provider";
import { ReactNode } from "react";
import ChakraClientWrapper from "@/components/ChakraClientWrapper";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleAnalyticsReporter from "@/components/analytics/GoogleAnalyticsReporter";
import Cookies from "@/components/cookies/cookies";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumar-node.com"),
  title: "Kumar-Node - Dinamične Spletne Strani & Spletne Aplikacije",
  description:
    "V Kumar Softwares razvijamo dinamične spletne strani in zmogljive spletne aplikacije z modernim dizajnom, brezskrbno funkcionalnostjo in izjemnimi zmogljivostmi. Preoblikujte svoje poslovanje z digitalnimi rešitvami, prilagojenimi vašim potrebam.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kumar Software - Spletne Aplikacije & Dinamične Spletne Strani",
    description:
      "Kumar Softwares je specializiran za izdelavo dinamičnih spletnih strani in zmogljivih spletnih aplikacij z modernim dizajnom in izjemnimi zmogljivostmi.",
    url: "https://kumar-node.com",
    siteName: "Kumar Software",
    images: [
      {
        url: "/assets/images/code_frontend.png",
        width: 1200,
        height: 630,
        alt: "Kumar Software Social Media Image",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kumarssoftware",
    creator: "@kumarssoftware",
    title: "Kumar Software - Spletne Aplikacije & Dinamične Spletne Strani",
    description:
      "Transformirajte svoje podjetje z modernimi spletnimi stranmi in spletnimi aplikacijami, ki jih razvije Kumar Softwares.",
    images: ["/assets/images/code_frontend.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sl">
      <head suppressHydrationWarning={true}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kumar-node.com/" />
        <link rel="alternate" href="https://kumar-node.com/" hrefLang="sl" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="theme-color" content="#0b0b0b" />
      </head>
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <GoogleAnalyticsReporter />
        <ReduxProvider>
          <ChakraClientWrapper>
            <Navbar />
            <div className="app-wrap container-fluid px-0">{children}</div>
            <Cookies />
          </ChakraClientWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
