import React from "react";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    children: React.ReactNode;
    setNumber?: (value: number) => void;
    QuestionNum?: number;
    nowNum: number;
}

const ChatBubbleA = ({children, setNumber, QuestionNum, nowNum}: Props) => {
    return (

        <div className='flex flex-row justify-end items-center my-[5px] ml-[60px] text-[14px] md:text-[16px]'>
            {setNumber !== undefined && QuestionNum !== undefined ?
                <button onClick={() => setNumber(QuestionNum)} className='mr-[5px]'>
                    {nowNum === QuestionNum ? <FontAwesomeIcon icon={faPencil} style={{color: '#000000'}}/> :
                        <FontAwesomeIcon icon={faPencil} style={{color: '#d9d9d9'}}/>}
                </button> : <></>}
            <div className="flex flex-col ">
                <div className="flex flex-row justify-between pr-[4px]">
                    <img src="chat_bubble_a_lt.png" alt="logo" width={20}
                         height={20}/>
                    <div className="w-full bg-[#0648A6]"></div>
                    <img src="chat_bubble_a_rt.png" alt="logo" width={15}
                         height={20}/>
                </div>
                <div className="mr-[4px] bg-[#0648A6]">
                    <div className="mx-[20px] bg-[#0648A6] text-[#ffffff]">{children}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <img src="chat_bubble_a_lb.png" alt="logo" width={20}
                         height={20}/>
                    <div className="w-full bg-[#0648A6]"></div>
                    <img src="chat_bubble_a_rb.png" alt="logo" width={15}
                         height={20}/>
                </div>
            </div>
        </div>
    );
}

export default ChatBubbleA;