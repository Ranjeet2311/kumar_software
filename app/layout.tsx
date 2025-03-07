import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar/Navbar";
import { ReduxProvider } from "@/store/slices/provider";
import { ReactNode, useEffect } from "react";
import ChakraClientWrapper from "@/components/ChakraClientWrapper";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
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
