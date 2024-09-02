import ActivityCardFront from "@/app/activities/_components/ActivityCardFront";
import ActivityCardBack from "@/app/activities/_components/ActivityCardBack";
import {ActivityItem} from "@/utils/Interfaces";
import Link from "next/link";
import Tag from "@/app/activities/_components/Tag";

const ActivityCard = ({content, member, mentor, tag, thumbnail, title, id}: ActivityItem) => {
    return (
        <>
        { /*<div className="group [perspective:1000px]">
            <Link href={`/activities/${id}`}>
                <div className="">
                    {/!* <ActivityCardFront content={content} id={id} member={member} mentor={mentor} tag={tag}
                                           thumbnail={thumbnail}
                                           title={title}/>*!/}
                    {/!*<div
                        className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <ActivityCardBack title={title} id={id} mentor={mentor} member={member} tag={tag}
                                          thumbnail={thumbnail}
                                          content={content}/>
                    </div>*!/}

                </div>
            </Link>
        </div>*/}
        <div className="flex flex-col w-[165px] lg:w-[300px] items-start mb-[18px] lg:mb-[40px] lg:mx-[20px]">
            <Link href={`/activities/${id}`}>
                <div className="w-[165px] h-[165px] lg:w-[300px] lg:h-[150px] rounded-md">
                    <img className='object-cover object-top  w-[165px] h-[165px] lg:w-[300px] lg:h-[150px] rounded-md shadow-lg' src={`${thumbnail}`}/>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap justify-start mt-[10px]">
                        <span className="font-gmarket-m text-[15px] lg:text-[16px] mt-[10px] break-words w-[165px] lg:w-[300px]">{title}&nbsp;&nbsp;</span>
                        <span className="text-[13px] lg:text-[18px]">{mentor}</span>
                    </div>
                    <Tag tag={tag}/>
                </div>
        </Link>
        </div>
</>
)
}

export default ActivityCard;