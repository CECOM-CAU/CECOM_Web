'use client';
import {ActivityContentRoleItem, ActivityContentRoleItemMember} from "@/utils/Interfaces";
import {useState} from "react";
import Member from "@/app/activities/[id]/_component/Member";

const Role = ({member, title}: ActivityContentRoleItem) => {
    return (
        <div className="flex flex-row my-[12px]">
            <div className="text-[20px] font-gmarket-m">{title}</div>
            <div className="text-[20px] font-gmarket-m mx-[10px]">&#124;</div>
            {member.map(({icon, name, url}: ActivityContentRoleItemMember) => (
                <Member icon={icon} name={name} url={url}/>))}
        </div>
    )
        ;
}

export default Role;