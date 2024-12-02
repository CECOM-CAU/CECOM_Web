import Image from "next/image";

interface Props{
    children:React.ReactNode;
    comment:string[];
    thumbnail:string;
}
const WhatLeft= ({children,comment,thumbnail}:Props) => {
    return (
        <div className="flex flex-row w-full">
            <Image src={thumbnail} alt="thumbnail" width={450} height={350} loading="lazy" className="flex justify-end rounded-[60px] object-cover"/>
            <div className="flex flex-col justify-center items-center w-[700px] ">
                <div className='font-gmarket-m text-[40px] px-[20px] pb-[10px] border-b-[1px] border-[#000000] mb-[20px]'>{children}</div>
                {comment.map((comment:string,index:number)=>(
                <div className="text-center text-pretty w-[600px] font-gmarket-l text-[20px] px-[20px]" key={index}>{comment}</div> ))
                }
            </div>
        </div>
    )
}

export default WhatLeft;