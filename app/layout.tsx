import type { Metadata } from "next";
import "./globals.css";
import { cursive, dm_sans, space, strech, tall, unbounded } from "@/utils/fonts";
import { CursorProvider } from "@/elements/CursorContext";
import CustomCursor from "@/elements/Cursor";


export const metadata: Metadata = {
  title: "Arinova Studio - Innovation in tech",
  description: "Arinova Studio crafts innovative websites, apps, and digital experiences that drive growth and engage audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} ${space.variable} ${strech.variable} ${unbounded.variable} ${tall.variable} ${cursive.variable} antialiased cursor-none`}
      >
        <CursorProvider>
        {children}
        <CustomCursor />
        </CursorProvider>
      </body>
    </html>
  );
}
