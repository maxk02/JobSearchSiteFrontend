import type { Metadata } from "next";
import "./globals.css";
import font from "@/lib/font";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "znajdzprace.pl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <ThemeRegistry>
            <Navbar />
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
