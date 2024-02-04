import React from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    link: string;
}

const RecruitBTN = ({children, link}: Props) => {
    const NAV_BTN_STYLE_NORMAL = "px-4 py-2 mr-[20px] ml-[20px] bg-primary-cecom_blue text-white rounded-3xl font-gmarket-m";

    return (
        <Link href={link}>
            <div className={NAV_BTN_STYLE_NORMAL}>{children}</div>
        </Link>
    )
}

export default RecruitBTN;