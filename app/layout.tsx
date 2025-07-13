import type { Metadata } from "next";
import "./globals.scss";
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
  keywords:
    "Kumar Software, dinamične spletne strani, spletne aplikacije, HTML5, CSS3, SCSS, JavaScript, TypeScript, React, Vue, Angular, GitHub, GitLab, Bootstrap, Tailwind, Webpack, Vite, Jest, Cypress, Node.js, Express.js, PHP, MongoDB, SQL, Docker, Figma, Adobe XD, Jira, EsLint, WordPress, WooCommerce",
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
        width: 1200, // Recommended width
        height: 630, // Recommended height (aspect ratio 1.91:1)
        alt: "Kumar Software Social Media Image", // Alt text for accessibility
      },
    ],
    locale: "sl_SI", // Locale for Slovene
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Large image card for Twitter
    site: "@kumarssoftware", // Twitter handle of the company
    creator: "@kumarssoftware", // Creator's Twitter handle
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
        {/* Manually adding hreflang links */}
        <link
          rel="alternate"
          href="https://kumar-software.netlify.app/"
          hrefLang="sl"
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
