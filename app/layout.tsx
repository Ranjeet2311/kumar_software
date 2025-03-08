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
  title: "Kumar Software",
  description:
    "We start by understanding your business needs, challenges, and objectives. Through interactive sessions, we discuss your vision for the project. The target audience and user expectations Specific features, functionality, and scope of work. During this phase, we gather all the critical information and establish a clear roadmap, ensuring we’re aligned on your goals from the very beginning. Our goal is to collaborate with you as a partner to turn your ideas into reality.",
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
