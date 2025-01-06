import React from "react";

import type { Metadata } from "next";
import { Inter as BodyFont, Sora as HeadingFont } from "next/font/google";
import { Toaster } from "sonner";

import "../styles/globals.css";
import GlobalProvider from "@/provider/global";
import { _siteConfig } from "@/config/site";

const inter = BodyFont({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const heading = HeadingFont({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: _siteConfig.name,
  description: _siteConfig.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} antialiased`}
    >
      <body className={`${inter.className} antialiased`}>
        <GlobalProvider>{children}</GlobalProvider>
        <Toaster
          richColors
          expand={true}
          position="top-right"
          pauseWhenPageIsHidden={true}
          toastOptions={{
            unstyled: true,
            classNames: {
              error: "bg-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}
