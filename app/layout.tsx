import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna Beauty — Salon & Beauty Studio",
  description: "Responsive salon booking website with WhatsApp integration."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}