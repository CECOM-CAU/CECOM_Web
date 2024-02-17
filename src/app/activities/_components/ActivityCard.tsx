import ActivityCardFront from "@/app/activities/_components/ActivityCardFront";
import ActivityCardBack from "@/app/activities/_components/ActivityCardBack";
import {ActivityItem} from "@/utils/Interfaces";
import Link from "next/link";

const ActivityCard = ({content, member, mentor, tag, thumbnail, title, id}: ActivityItem) => {
    return (
        <div className="group [perspective:1000px]">
            <Link href={`/activities/${id}`}>
                <div
                    className="transition-all duration-500 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]">
                    <div className="">
                        <ActivityCardFront content={content} id={id} member={member} mentor={mentor} tag={tag}
                                           thumbnail={thumbnail}
                                           title={title}/>
                    </div>

                    <div
                        className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <ActivityCardBack title={title} id={id} mentor={mentor} member={member} tag={tag}
                                          thumbnail={thumbnail}
                                          content={content}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ActivityCard;