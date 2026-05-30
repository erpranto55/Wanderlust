import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust",
  description: "Travel and Explore the World",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
