import {ActivityItem} from "@/utils/Interfaces";

const ActivityCardBack = ({content, member, mentor, tag, thumbnail, title, id}: ActivityItem) => {
    const members: string = member.map((m) => m).join(', ')
    return (
        <div className="flex flex-col items-start max-w-[270px] h-[415px] bg-white rounded-lg shadow-lg mt-[15px] py-[40px] px-[20px]">
            <div className="text-[20px] font-gmarket-b">{title}</div>
            <div className="flex flex-col justify-center mt-[10px]">
                <div className="text-[15px] font-gmarket-m">{mentor}</div>
                <div className="text-[13px] font-gmarket-l"> {members}</div>
            </div>
            <div className="w-[240px] text-[12px] mt-[10px] text-pretty">{content}</div>
            <div></div>
        </div>
    )
}

export default ActivityCardBack;