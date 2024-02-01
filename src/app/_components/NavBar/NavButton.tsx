import React from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    link: string;
    isClick: boolean;
}

const NavButton = ({children, link, isClick}: Props) => {
    const NAV_BTN_STYLE_CLICKED = "px-4 py-2 rounded-3xl ml-[20px] mr-[20px] font-gmarket-m bg-primary-lightgray30 "
    const NAV_BTN_STYLE_NORMAL = "px-4 py-2 mr-[20px] ml-[20px]"

    return (
        <Link href={`${link}`}>
            <p className={isClick?NAV_BTN_STYLE_CLICKED:NAV_BTN_STYLE_NORMAL}>{children}</p>
        </Link>
    )
}

export default NavButton;