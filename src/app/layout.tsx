import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Roster",
  description: "The Tech Roster demo for PROG3017",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <main className="overflow-y-auto min-h-screen p-5 bg-white">
            <div className="font-bold text-xl pb-2.5">_Technology Roster</div>

            {children}

            <div className="mt-10 mb-2.5">Technology descriptions by <a href="https://wikipedia.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">wikipedia</a></div>
        </main>
      </body>
    </html>
  );
}
