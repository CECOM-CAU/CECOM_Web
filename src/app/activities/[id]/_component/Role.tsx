'use client';
import {ActivityContentRoleItem, ActivityContentRoleItemMember} from "@/utils/Interfaces";
import Member from "@/app/activities/[id]/_component/Member";

const Role = ({member, title}: ActivityContentRoleItem) => {
    return (
        <div className="flex flex-row my-[3px] lg:my-[12px]">
            <div className="lg:text-[20px] text-[15px] font-gmarket-m">{title}</div>
            <div className="lg:text-[20px] font-gmarket-m mx-[10px]">&#124;</div>
            {member.map(({gender, icon, name, url}: ActivityContentRoleItemMember, index: number) => (
                <Member gender={gender} icon={icon} name={name} url={url} key={index}/>))}
        </div>
    );
}
export default Role;