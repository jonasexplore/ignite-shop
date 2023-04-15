import "./globals.css";

import { Roboto } from "next/font/google";

import { Navbar } from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} font-sans bg-gray-900 flex justify-center`}
      >
        <div className="h-screen w-full max-w-5xl flex flex-col gap-8">
          <header className="w-full py-10">
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
