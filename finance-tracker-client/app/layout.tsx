import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import CustomProvider from "@/redux/provider";
import { Navbar, Footer } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "FinanceTracker by @MaikiBR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
