import {ActivityItem} from "@/utils/Interfaces";
import Tag from "@/app/activities/_components/Tag";
const ActivityCardFront = ({member, mentor, tag, thumbnail, title}: ActivityItem) => {
    const firstTag = "flex h-[20px] text-center pt-[4px] text-[15px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px]  mr-[10px] mt-[10px]"
    const normalTag = "flex h-[20px] text-center pt-[4px] text-[15px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[10px] mt-[10px]"
    const members: string = member.map((m) => m).join(', ')
    return (
        <div
            className="flex flex-col items-center max-w-[270px] h-[430px] bg-white rounded-lg shadow-lg mt-[25px]">
            <img className="w-[240px] min-h-[240px] rounded-lg mx-[15px] my-[15px]" src={thumbnail} alt={title}/>
            <div className="flex flex-col w-full h-48 px-[15px]">
                <div className="flex flex-row flex-wrap justify-start mt-[10px]">
                    <span className="font-gmarket-b ">{title}&nbsp;&nbsp;</span>
                    <span>|&nbsp;&nbsp;{mentor}</span>
                </div>
                <span className="mt-[10px]">{members}</span>
                <Tag tag={tag}/>
            </div>
        </div>

    )
}

export default ActivityCardFront;