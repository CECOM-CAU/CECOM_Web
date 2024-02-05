import {ActivityItem} from "@/utils/Interfaces";


const ActivityCard = ({member, mento, tag, thumbnail, title}: ActivityItem) => {
    const firstTag = "bg-primary-cecom_blue backdrop-opacity-5 rounded-3xl px-[5px] mr-[10px] mt-[10px]"
    const normalTag = "bg-primary-lightgray30 rounded-3xl px-[5px] mr-[10px] mt-[10px]"
    const members: string = member.map((m) => m).join(', ')
    return (
        <div className="flex flex-col items-center max-w-[270px] min-h-[400px] bg-white rounded-lg shadow-lg mt-[25px]">
            <img className="w-[240px] min-h-[240px] rounded-lg mx-[15px] my-[15px]" src={thumbnail} alt={title}/>
            <div className="flex flex-col w-full h-48 px-[15px]">
                <div className="flex flex-row flex-wrap justify-start mt-[10px]">
                    <span className="font-gmarket-b ">{title}&nbsp;&nbsp;</span>
                    <span>|&nbsp;&nbsp;{mento}</span>
                </div>
                <span className="mt-[10px]">{members}</span>
                <div className="flex flex-row flex-wrap ">
                    {
                        tag.map((t: string, index: number) => (
                            <div className={index === 0 ? firstTag : normalTag}>{t}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;