import type { Metadata } from "next";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar/Navbar";
import { ReduxProvider } from "@/store/slices/provider";
import { ReactNode } from "react";
import ChakraClientWrapper from "@/components/ChakraClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumar-software.netlify.app/"),
  title: "Kumar Software - Dinamične Spletne Strani & Spletne Aplikacije",
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
    url: "https://kumar-software.netlify.app/",
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
      <head>
        {/* SEO Essentials */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {/* Hreflang for SEO in multiple languages */}
        <link
          rel="alternate"
          href="https://kumar-software.netlify.app/"
          hrefLang="sl"
        />
        <link
          rel="alternate"
          href="https://kumar-software.netlify.app/?lang=en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://kumar-software.netlify.app/?lang=gr"
          hrefLang="de"
        />
      </head>
      <body>
        <ReduxProvider>
          <ChakraClientWrapper>
            <Navbar />
            <div className="app-wrap container-fluid px-0">{children}</div>
          </ChakraClientWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
