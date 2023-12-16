import type { Metadata } from "next";
import {
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";
import clsx from "clsx";
import Header from "./components/Header";
import Home from "./components/Home";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "Lab project | %s",
    default: "Lab project",
  },
  description: "Next.js lab project",
};

// Get this info from some external source (e.g. CMS)
const pages: Record<string, `/${string}`> = {
  home: "/",
  women: "/women",
  men: "/men",
  kids: "/kids",
  sale: "/sale",
  blog: "/blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link href='https://fonts.googleapis.com/css?family=MuseoModerno' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
        
      >
      <Header />
      <Home />
      {children}
      

      </body>
    </html>
  );
}