import Link from "next/link";
import Tag from "@/app/activities/_components/Tag";
import MemberInfo from "@/app/activities/[id]/_component/MemberInfo";
import React from "react";
import {ActivityContent} from "@/utils/Interfaces";
import MobileCarousel from "@/app/activities/[id]/_component/mobile/MobileCarousel";

export const MobileDetail = ({contentData}: { contentData: ActivityContent }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full items-center justify-start h-[50px]">
                <Link href={'/activities'}>
                    <div className="text-[15px] font-gmarket-m">Activities &#62;</div>
                </Link>
                <div className="text-[15px] font-gmarket-l ml-[10px]">{contentData.title}</div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <div className="w-[320px]">
                    <MobileCarousel count={Number(contentData.photo.count)} data={contentData.photo.data}/>
                </div>
                <div className="flex flex-col w-[320px] mt-[15px] lg:mt-[30px]">
                    <Tag tag={contentData.tag}/>
                    <div className=" w-[320px] text-[28px] border-b-[1px] border-[#000000] mb-[10px]">
                        {contentData.title}
                    </div>
                    <MemberInfo role={contentData.role}/>
                </div>
            </div>
            <div
                className="w-full mt-[15px] lg:mt-[40px] rounded-[20px] bg-primary-lightgray30 py-[25px] px-[20px]">
                {contentData.content}
            </div>
        </div>
    )
}