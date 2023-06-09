"use client";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body>
        <main className={heebo.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <SessionProvider session={session}>{children}</SessionProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
