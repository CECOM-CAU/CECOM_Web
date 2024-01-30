import React from "react";
import Link from "next/link";

interface Props{
    children:React.ReactNode;
    link:string;

}

const NavButton=({children, link}:Props)=>{
    return(
        <Link href={`/${link}`}>
           <p className="w-40 font-[100] ">{children}</p>
        </Link>
    )
}

export default NavButton;