import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import TopLoader from "@/components/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OverLay Bot",
  description: "Overlay chatbot for your Domains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopLoader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
