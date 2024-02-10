import type {Metadata} from 'next'
import './globals.css'
import {NavBar} from "@/app/_components/NavBar/NavBar";
import {Footer} from "@/app/_components/Footer/Footer";

export const metadata: Metadata = {
    title: 'CECOM',
    description: 'Welcome to CECOM'
}

export default function RootLayout(
    {children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="flex bg-transparent ">
            <NavBar/>
            {children}
        </body>
        <Footer/>
        </html>
    )
}