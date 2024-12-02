import Image from "next/image";

interface Props {
    children: React.ReactNode;
    comment: string[];
    thumbnail: string;
}

const MobileWhatRight = ({children, comment, thumbnail}: Props) => {
    return (
        <div className="flex flex-col w-full mb-[30px]">
            <Image src={thumbnail} alt="thumbnail" width={330} height={280} loading="lazy"
                   className="flex justify-end rounded-[60px] object-cover"/>
            <div className="flex border-b-[1px] border-[#000000] mt-[15px] mb-[5px]"></div>
            <div className="flex flex-col justify-end items-start w-full">
                <div
                    className='flex w-full justify-end font-gmarket-m text-[30px] px-[10px] pb-[5px]'>{children}</div>
                {comment.map((comment: string, index: number) => (
                    <div
                        className="flex w-full justify-end text-start text-pretty font-gmarket-l text-[15px] px-[10px]"
                        key={index}>{comment}</div>))
                }
            </div>
        </div>
    )
}

export default MobileWhatRight;