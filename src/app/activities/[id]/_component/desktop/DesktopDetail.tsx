import Link from "next/link";
import DesktopCarousel from "@/app/activities/[id]/_component/desktop/DesktopCarousel";
import Tag from "@/app/activities/_components/Tag";
import MemberInfo from "@/app/activities/[id]/_component/MemberInfo";
import React from "react";
import {ActivityContent} from "@/utils/Interfaces";

export const DesktopDetail = ({contentData}: { contentData: ActivityContent }) => {
    return (
        <>
            <div className="flex flex-row w-full items-center h-[80px] my-[20px]">
                <Link href={'/activities'}>
                    <div className="text-[20px] font-gmarket-m">Activities &#62;</div>
                </Link>
                <div className="text-[20px] font-gmarket-l ml-[10px]">{contentData.title}</div>
            </div>
            <div className='flex flex-col justify-center w-[950px] lg:flex-row'>
                <DesktopCarousel count={Number(contentData.photo.count)} data={contentData.photo.data}/>
                <div className="flex flex-col w-[400px] ml-[100px]">
                    <Tag tag={contentData.tag}/>
                    <div className=" w-[400px] text-[35px] border-b-[1px] border-[#000000] mb-[10px]">
                        {contentData.title}
                    </div>
                    <MemberInfo role={contentData.role}/>
                </div>
            </div>
            <div
                className="w-[950px] mt-[40px] rounded-[20px] bg-primary-lightgray30 py-[25px] px-[20px]">
                {contentData.content}
            </div>
        </>
    )
}