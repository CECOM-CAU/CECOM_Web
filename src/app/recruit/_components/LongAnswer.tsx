import React from "react";

interface Props {
    setAnswer: (value: string[]) => void;
    Answer: string[];
    num: number;

}

const LongAnswer = ({setAnswer, Answer, num}: Props) => {
    const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        let temp: string[] = [...Answer];
        temp[num] = value;
        setAnswer(temp);
        console.log(Answer);
    }

    return (
        <div className="w-full ">
        <textarea
            className="w-full h-[150px]  bg-[#d9d9d950] text-[#000000] p-[15px] mb-[50px] rounded-[10px] focus:outline-none resize-none "
            placeholder="최대 500자" value={Answer[num]||''}
            onChange={(e) => handleAnswer(e)}></textarea>
        </div>
    )
}

export default LongAnswer;