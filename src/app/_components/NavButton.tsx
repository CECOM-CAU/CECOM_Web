import React from "react";

interface Props{
    children:React.ReactNode;
    link:string;

}

const NavButton=({children}:Props)=>{
    return(
        <a href='/activities'>
           <p className="w-40 font-[100] ">{children}</p>
        </a>
    )
}

export default NavButton;