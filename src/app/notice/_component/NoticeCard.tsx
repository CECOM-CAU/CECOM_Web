import {id} from "postcss-selector-parser";
import Link from "next/link";

interface Props {
    id: string;
    img: string;
    title: string;
    tag?: string;
    date?: string;
}

const NoticeCard = ({img, id, title, tag, date}: Props) => {

    return (

        <div
            className="flex flex-col w-[165px] lg:w-[300px] items-start mb-[18px] lg:mb-[40px] lg:mx-[20px]">
            <Link href={`/notice/${id}`}>
                <div className="w-[165px] h-[165px] lg:w-[300px] lg:h-[150px] rounded-md">
                    <img className='object-cover w-[165px] h-[165px] lg:w-[300px] lg:h-[150px] rounded-md shadow-lg' src={`data:image/png;base64,${img}`}/>
                </div>
                <div className='font-gmarket-m text-[15px] lg:text-[16px] mt-[10px] break-words w-[165px] lg:w-[300px]'>{title}</div>
                <div className='flex flex-row'>
                    <div
                        className="flex text-[10px] h-[20px] pt-[3px] text-center lg:text-[12px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px] mr-[5px] mt-[1px]">{tag}</div>
                    <div
                        className="flex text-[10px] h-[20px] pt-[3px] text-center lg:text-[12px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[5px] mt-[1px]">{date}</div>
                </div>
            </Link>
        </div>
    )
}

export default NoticeCard;