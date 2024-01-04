import type { Metadata } from "next";
import { Inter, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "野村書道教室",
  description: "地域で20年の実績兵庫県伊丹市、東塚口、西宮北口の書道教室",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={mincho.className}>{children}</body>
    </html>
  );
}
