import "./globals.css";
import { ReactNode } from "react";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Lucas Soares | Web Developer",
  description: "Portfolio created with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${firaCode.className} bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}
