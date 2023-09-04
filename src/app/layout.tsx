import "../styles/normalize.css";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Saira_Extra_Condensed, Mulish } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const saira_extra_condensed = Saira_Extra_Condensed({
  subsets: ["latin"],
  variable: "--font-saira-extra-condensed",
  weight: ["500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

const Header = dynamic(() => import("../components/Header/index"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Portefólio Samuel Amaro",
  description: "Portfólio Web site do desenvolvedor samuel amaro",
  authors: {
    name: "Samuel Amaro",
    url: "https://www.linkedin.com/in/samuel-amaro/",
  },
  keywords:
    "Portfolio, Desenvolvedor, Blog, Front-End, Serviços Front-End, Desenvolvedor Site, Desenvolvedor Front-End, Construtor Sites, Websites, páginas web, Portfolio Front-End, Portfolio Desenvolvedor",
  openGraph: {
    title: "Portefólio Samuel Amaro",
    description: "Portfólio Web site do desenvolvedor samuel amaro",
    siteName: "Portfólio Samuel Amaro",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${saira_extra_condensed.variable} ${mulish.variable}`}
    >
      <body>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
