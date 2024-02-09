import {ActivityItem} from "@/utils/Interfaces";

interface Props {
    content: string;
    member: string[];
    mento: string;
    title: string;
}

const ActivityCardBack = ({content, member, mento, title}: Props) => {
    const members: string = member.map((m) => m).join(', ')
    return (
        <div className="flex flex-col items-start max-w-[270px] h-[415px] bg-white rounded-lg shadow-lg mt-[15px] py-[40px] px-[20px]">
            <div className="text-[20px] font-gmarket-b">{title}</div>
            <div className="flex flex-row items-center mt-[10px]">
                <div className="text-[15px] font-gmarket-m">{mento}</div>
                <div className="mx-[10px] font-gmarket-m">|</div>
                <div className="text-[13px] font-gmarket-l"> {members}</div>
            </div>
            <div className="text-[12px] mt-[10px] truncate text-pretty ">{content}</div>
            <div></div>
        </div>
    )
}

export default ActivityCardBack;