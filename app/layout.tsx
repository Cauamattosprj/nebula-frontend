import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Nebula",
    description: "Um simples pomodoro com caderno de anotações integrado.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <nav className={`${inter.className} antialiased py-4 px-4`}>
                    <Navbar />
                </nav>
                {children}
            </body>
        </html>
    );
}
