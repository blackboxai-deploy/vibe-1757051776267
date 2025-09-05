import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Service Center",
  description: "Apply for government documents and services online. Fast, secure, and available 24/7.",
  keywords: "government services, digital services, documents, passport, ID card, birth certificate",
  authors: [{ name: "Digital Service Center" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Digital Service Center",
    description: "Apply for government documents and services online. Fast, secure, and available 24/7.",
    type: "website",
    siteName: "Digital Service Center",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}