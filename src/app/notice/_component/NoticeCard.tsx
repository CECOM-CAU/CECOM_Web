import {id} from "postcss-selector-parser";
import Link from "next/link";

interface Props {
    id: number;
    img: string;
    title: string;
    tag?: string;
    date?: string;
}

const NoticeCard = ({img, id, title, tag, date}: Props) => {

    return (

        <div
            className="flex flex-col w-[300px] h-[230px] items-start mx-[20px]">
            <Link href={`/notice/${id}`}>
                <div className="w-[300px] h-[150px] rounded-md">
                    <img className='object-cover w-[300px] h-[150px] rounded-md shadow-lg ' src={img}/>
                </div>
                <div className='font-gmarket-m text-[16px] mt-[10px]'>{title}</div>
                <div className='flex flex-row'>
                    <div
                        className="flex h-[20px] text-center text-[12px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px] mr-[10px] mt-[1px]">{tag}</div>
                    <div
                        className="flex h-[20px] text-center text-[12px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[10px] mt-[1px]">{date}</div>
                </div>
            </Link>
        </div>
    )
}

export default NoticeCard;