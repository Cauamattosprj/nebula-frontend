import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ToastContainer } from "react-toastify";


const inter = Inter({
    subsets: ["latin"],
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
            <body className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px]">
                <div>
                    <ToastContainer />
                    <nav className={`${inter.className} antialiased py-4 px-4`}>
                        <Navbar />
                    </nav>
                    {children}
                </div>
            </body>
        </html>
    );
}
