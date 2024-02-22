interface Props{
    children:React.ReactNode;
    comment:string[];
    thumbnail:string;
}
const MobileWhatLeft= ({children,comment,thumbnail}:Props) => {
    return (
        <div className="flex flex-col w-full mb-[30px]">
            <img src={thumbnail} alt="thumbnail" className="flex justify-end rounded-[60px] w-[330px] h-[280px] object-cover"/>
            <div className="flex w-[330px] border-b-[1px] border-[#000000] mt-[15px] mb-[5px]"></div>
            <div className="flex flex-col justify-start items-start w-full">
                <div className='font-gmarket-m text-[30px] px-[10px] pb-[5px]'>{children}</div>
                {comment.map((comment:string,index:number)=>(
                    <div className="text-start text-pretty w-full font-gmarket-l text-[15px] px-[10px]" key={index}>{comment}</div> ))
                }
            </div>
        </div>
    )
}

export default MobileWhatLeft;