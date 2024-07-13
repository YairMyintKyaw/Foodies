import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodies",
  description: "Foodies World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
