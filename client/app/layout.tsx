import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClickTech - Recharge & Bill Payment",
    template: '%s - ClickTech',
  },
  description: "ClickTech is your one-stop platform for fast and secure mobile recharges, utility bill payments, and digital transactions. Simplify your payments with a seamless user experience and real-time processing.",
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
