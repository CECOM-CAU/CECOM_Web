'use client';
import {useState} from "react";
import {ActivityContentRoleItemMember} from "@/utils/Interfaces";
import Link from "next/link";
import Bubble from "@/app/activities/[id]/_component/Bubble";

const Member = ({icon, name, url}: ActivityContentRoleItemMember) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div className="mx-[5px]" onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            {isHover ?  <Bubble>{name}</Bubble>: <></>}
            <Link href={url}>
                <img className="rounded-full w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                     src={`data:image/png;base64,${icon}`}/>
            </Link>
        </div>
    );

}

export default Member;