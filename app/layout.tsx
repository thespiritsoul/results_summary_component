import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const geistHanken_Grotesk = Hanken_Grotesk({
  variable: "--font-Hanken-Grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Componente de resultados",
  description: "Tarea de Taller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistHanken_Grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
