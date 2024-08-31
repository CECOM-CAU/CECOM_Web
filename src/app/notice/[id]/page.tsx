'use client';
import Link from "next/link";
import React from "react";
import PhotoCarousel from "@/app/_components/PhotoCarousel";


const NoticeDetailPage = ({params}: { params: { id: string } }) => {
    const {id} = params;
    const title = '쿠쿠루 삥뽕';
    const user = '#홍보부';
    const date = '8/19-9/20';
    const content = '쿠쿠루 삥뽕 그아아아아아아아아 가이고기고기ㅗ기ㅗㄱ 프로젝트를 쿠쿠루삥뽕';
    return (
        <div className="flex flex-col mt-[75px]  w-full items-center ">
            <div className="flex flex-col w-full lg:w-[1020px] px-[10px] lg:px-[0px] items-start">
                <div
                    className="flex flex-row w-full items-center justify-start h-[50px] ml-[20px] lg:h-[80px] lg:my-[20px] ">
                    <Link href={'/notice'}>
                        <div className="text-[15px] lg:text-[20px] font-gmarket-m">Notice &#62;</div>
                    </Link>
                    <div className="text-[15px] lg:text-[20px] font-gmarket-l ml-[10px]">{title}</div>
                </div>
            </div>
            <div className='w-[320px] flex flex-col lg:w-[450px] items-start'>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-[320px] lg:w-[450px]">
                        <PhotoCarousel count={Number(3)}
                                       data={['/MemberFemale.png', '/MemberMale.png', '/MemberFemale.png']}/>
                    </div>
                    <div className="flex flex-row w-[320px] lg:w-[450px] mt-[5px]">
                        <div
                            className="flex h-[20px] text-center pt-[4px] text-[12px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px]  mr-[10px] mt-[10px]">{user}</div>
                        <div
                            className="flex h-[20px] text-center pt-[4px] text-[12px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[10px] mt-[10px]">{date}</div>
                    </div>
                </div>
                <div className='w-full text-[28px] lg:text-[35px] border-b-[1px] border-[#000000] mb-[10px] mt-[2px]'>
                    {title}
                </div>
                <div
                    className=" flex flex-row justify-center lg:w-[450px] mt-[8px] rounded-[20px] bg-primary-lightgray30 py-[25px] px-[20px]">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default NoticeDetailPage;