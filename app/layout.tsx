import React from "react";

import type { Metadata } from "next";
import { Inter, Catamaran } from "next/font/google";
import { Toaster } from "sonner";

import "../styles/globals.css";
import GlobalProvider from "@/provider/global";
import { _siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
      className={`${inter.variable} ${catamaran.variable} antialiased`}
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
