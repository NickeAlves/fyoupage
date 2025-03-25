import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "For you",
  description: "Gift for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gift-svgrepo-com.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
