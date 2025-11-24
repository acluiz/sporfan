import type { Metadata } from "next";
import { Krona_One, Sen } from "next/font/google";

import "@/styles/index.scss";

const KRONA_ONE = Krona_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true,
});

const SEN = Sen({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sporfan",
  description:
    "Acompanhe jogos de futebol, vôlei e basquete com resultados de partidas passadas e próximos confrontos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${KRONA_ONE.className} ${SEN.className}`}>
        {children}
      </body>
    </html>
  );
}
