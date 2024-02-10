import ActivityCardFront from "@/app/activities/_components/ActivityCardFront";
import ActivityCardBack from "@/app/activities/_components/ActivityCardBack";
import {ActivityItem} from "@/utils/Interfaces";
import Link from "next/link";

const ActivityCard = ({content, member, mentor, tag, thumbnail, title, id}: ActivityItem) => {
    return (
        <div className="group [perspective:1000px]">
            <Link href={`/activities/${id}`}>
                <div
                    className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="">
                        <ActivityCardFront content={content} id={id} member={member} mentor={mentor} tag={tag}
                                           thumbnail={"https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg"}
                                           title={title}/>
                    </div>

                    <div
                        className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <ActivityCardBack title={title} id={id} mentor={mentor} member={member} tag={tag}
                                          thumbnail={"https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg"}
                                          content={content}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ActivityCard;