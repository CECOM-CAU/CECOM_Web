import React from "react";

interface Props {
    children: string;
}

const SubmitSuccess = ({children}: Props) => {
    return (
        <div className="flex flex-col justify-center text-center w-full text-[20px] md:text-[30px] mt-[50px]">
            <div><span className='font-gmarket-m'>{children}</span>님의 CECOM 지원서</div>
            <div>제출이 완료 되었습니다.</div>
            <div>지원해주셔서 감사합니다.</div>
        </div>

    );
}

export default SubmitSuccess;