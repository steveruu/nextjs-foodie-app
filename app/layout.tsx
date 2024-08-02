import type { Metadata, Viewport } from "next";
import MainHeader from "../components/MainHeader/MainHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextFood",
  description: "NextFood - a food sharing platform",
  openGraph: {
    title: "NextFood",
    description: "NextFood - a food sharing platform"
  },
  keywords: "food, nextjs, recipes",
  creator: "@steveruu",
  robots: "index, follow"
};

export const viewport : Viewport = {
  themeColor: "#ff9b05",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
