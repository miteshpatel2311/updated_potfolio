import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/themeContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Mitesh Patel",
  description: "Portfolio of Mitesh Patel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth !overflow-x-hidden">
      <body
        className={`${inter.className} ${poppins.className} !overflow-x-hidden`}
      >
        <ThemeContextProvider>
          <Header />
          <div className="container mx-auto px-4 sm:px-8">{children}</div>
          <Footer />
          <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
