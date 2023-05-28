import Header from "@/components/Header";
import "./globals.css";
import "devicon/devicon.min.css"
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
