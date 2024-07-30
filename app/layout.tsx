import type { Metadata } from "next";
import MainHeader from "../components/MainHeader/MainHeader";
import MainHeaderBackground from "../components/MainHeader/MainHeaderBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextFood",
  description: "Created by NextFood",
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
