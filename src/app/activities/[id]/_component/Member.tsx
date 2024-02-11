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
                <img className="rounded-full w-[25px] h-[25px]"
                     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk6U3b0bu-HwA2BtU-hub0tg8msPeUCQeEA&usqp=CAU"}/>

            </Link>
        </div>
    );

}

export default Member;