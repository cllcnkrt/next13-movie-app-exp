import { Inter } from "@next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Footer, Header } from "@/components";

const interFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFamily.className}>
      <head />
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
