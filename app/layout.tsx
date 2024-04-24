import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ComponentProps } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk issue",
  description: "Clerk issue",
};

type ClerkAppearance = NonNullable<
  ComponentProps<typeof ClerkProvider>["appearance"]
>;

const clerkAppearance: ClerkAppearance = {
  variables: {
    colorPrimary: "#1f2937",
    colorText: "#1f2937",
    colorTextSecondary: "#6b7280",
    borderRadius: "0.25rem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en">
        <body className={inter.className}>
          <main className="max-w-7xl mx-auto py-8">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
