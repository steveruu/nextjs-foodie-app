import type { Metadata } from "next";
import MainHeader from "../components/MainHeader/MainHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextFood",
  description: "NextFood - a food sharing platform",
  openGraph: {
    title: "NextFood",
    description: "NextFood - a food sharing platform"
  },
  generator: "food, nextjs, recipes",
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
