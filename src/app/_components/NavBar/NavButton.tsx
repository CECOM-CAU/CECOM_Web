import React from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    link: string;
    click: true | false;
}

const NavButton = ({children, link, click}: Props) => {
    if (click) {
        return (
            <Link href={`${link}`}>
                <p className="px-4 py-2 rounded-3xl ml-[20px] mr-[20px] font-gmarket-m bg-primary-lightgray30 ">{children}</p>
            </Link>
        )
    } else {
        return (
            <Link href={`${link}`}>
                <p className="px-4 py-2 w-30  mr-[20px] ml-[20px]">{children}</p>
            </Link>
        )
    }
}

export default NavButton;