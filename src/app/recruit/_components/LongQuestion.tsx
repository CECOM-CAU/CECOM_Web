interface Props {
    children: string;
    length: number;
}

const LongQuestion = ({children, length}: Props) => {
    return (
        <div className="flex flex-col items-start w-full mb-[10px] text-[18px] pb-[10px] border-b-[1px] border-[#000000]">
            {children}
                <div className="flex w-full justify-end items-end">
                    {length}/500자<img className='flex w-[30px] h-[30px] ml-[10px]' src={'pen.png'}/>
                </div>


        </div>
    )
};


export default LongQuestion;