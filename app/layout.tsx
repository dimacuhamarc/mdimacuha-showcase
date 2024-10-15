import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "%s | Marc Dimacuha",
  description: "Marc Dimacuha's Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body>
        {children}
      </body>
    </html>
  );
}
