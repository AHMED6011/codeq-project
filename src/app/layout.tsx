import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
import Header from "../components/Header/Header.jsx";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const plex = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "CodeQ | تعليم الشباب، تطوير المشاريع، بيئة عمل تعاونية - انضم الآن!",
  description: "منصة تعليمية للشباب، ندعم مشاريعك الناشئة، ونوفر بيئة عمل تعاونية لتكتسب خبرات قبل إنطلاقك لسوق العمل . اكتشف فرصتك وسجل الآن!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${plex.className}`}>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
