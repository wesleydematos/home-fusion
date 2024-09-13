import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";

const sfPro = localFont({
  src: "./fonts/SFProDisplay.woff",
});

export const metadata: Metadata = {
  title: "Home Fusion",
  description: "Encontre as melhores oportunidades de investimento hoje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfPro.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
