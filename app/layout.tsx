import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "연지의 돌잔치💕",
  description: "사랑스런 연지의 첫 돌잔치에 초대합니다.",
  openGraph: {
    title: "연지의 돌잔치💕",
    type: "website",
    siteName: "연지의 돌잔치💕",
    description: "사랑스런 연지의 첫 돌잔치에 초대합니다.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
