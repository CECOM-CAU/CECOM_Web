interface Props {
    children: React.ReactNode;

}

const ChatBubbleQ = ({children}: Props) => {
    return (
        <div className='flex flex-row justify-start items-end my-[5px] text-[14px] md:text-[16px]'>
            <img src="MobileLogo.svg" alt="logo" width={40}/>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between ">
                    <img src="chat_bubble_lt.png" alt="logo" width={20}
                         height={20}/>
                    <div className="w-full bg-[#d9d9d9]"></div>
                    <img src="chat_bubble_rt.png" alt="logo" width={15}
                         height={20}/>
                </div>
                <div className="ml-[5px] bg-[#d9d9d9]">
                    <div className=" mx-[20px] bg-[#d9d9d9] text-[#000000]">{children}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <img src="chat_bubble_lb.png" alt="logo" width={20}
                         height={20}/>
                    <div className="w-full bg-[#d9d9d9]"></div>
                    <img src="chat_bubble_rb.png" alt="logo" width={15}
                         height={20}/>
                </div>
            </div>
        </div>
    );
}

export default ChatBubbleQ;