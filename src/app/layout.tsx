import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Children} from "react";
import {NavBar} from "@/app/_components/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CECOM',
    description: 'Welcome to CECOM'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className="flex bg-transparent ">
        <NavBar/>
        {children}


        </body>
        </html>
    )
}
