import Header from "@/components/Header";
import "./globals.css";
import "devicon/devicon.min.css";
import { Lato, Oxanium } from "next/font/google";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});
const latoBold = Lato({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-lato-bold",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oxanium",
});

const oxaniumBold = Oxanium({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oxanium-bold",
});

export const metadata = {
  title: "Lucas Pereira",
  description:
    "Site pessoal com fatos sobre mim, habilidades e projetos que desenvolvi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Lucas Pereira</title>
        <meta name="title" content="Lucas Pereira" />
        <meta
          name="description"
          content="Site pessoal com fatos sobre mim, habilidades e projetos que desenvolvi."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pereira299.vercel.app/" />
        <meta property="og:title" content="Lucas Pereira" />
        <meta
          property="og:description"
          content="Site pessoal com fatos sobre mim, habilidades e projetos que desenvolvi."
        />
        <meta property="og:image" content="/image/profile.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pereira299.vercel.app/" />
        <meta property="twitter:title" content="Lucas Pereira" />
        <meta
          property="twitter:description"
          content="Site pessoal com fatos sobre mim, habilidades e projetos que desenvolvi."
        />
        <meta property="twitter:image" content="/image/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="theme-color" content="#1a202c" />
        <meta
          name="keywords"
          content="web develop, ui, ux, programador, desenvolvedor, web, interface"
        />
        <meta name="robots" content="index,follow" />
      </head>
      <body
        className={`--font-lato overflow-x-hidden overflow-y-auto ${lato.variable} ${latoBold.variable} ${oxanium.variable} ${oxaniumBold.variable} bg-gray-800`}
      >
        <Header />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
