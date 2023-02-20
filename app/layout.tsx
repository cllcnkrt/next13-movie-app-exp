import { Inter } from "@next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";

const interFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFamily.className}>
      <head />
      <body className="container">{children}</body>
    </html>
  );
}
