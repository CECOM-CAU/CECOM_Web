'use client';
import React from "react";
import MemberInfo from "@/app/activities/[id]/_component/MemberInfo";
import {ActivityContentData} from "@/utils/DummyData";
import Tag from "@/app/activities/_components/Tag";
import Link from "next/link";
import PhotoCarousel from "@/app/activities/[id]/_component/PhotoCarousel";

const ActivityDetailPage = ({params}: { params: { id: string } }) => {
    const {id} = params;
    const contentData = ActivityContentData;
    const imageData = [
        'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg',
        'https://img.freepik.com/free-photo/sparkle-cloud-pastel-purple-image_53876-94835.jpg?size=626&ext=jpg',
        'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'
    ];

    return (
        <div className="flex flex-col mt-[100px] w-full items-center ">
            <div className="flex flex-row w-full items-center h-[80px] pl-[250px] my-[20px]">
                <Link href={'/activities'}>
                    <div className="text-[20px] font-gmarket-m">Activities &#62;</div>
                </Link>
                <div className="text-[20px] font-gmarket-l ml-[10px]">{contentData.title}</div>
            </div>
            <div className='flex flex-row justify-center w-[950px]'>
                <PhotoCarousel count={contentData.photo.count} data={imageData}/>
                <div className="flex flex-col w-[450px] ml-[100px]">
                    <Tag tag={contentData.tag}/>
                    <div className=" w-[400px] text-[35px] border-b-[1px] border-[#000000] mb-[10px]">
                        {contentData.title}
                    </div>
                    <div>
                        <MemberInfo role={contentData.role}/>
                    </div>
                </div>
            </div>
            <div
                className="w-[950px] mt-[40px] rounded-[20px] bg-primary-lightgray30 py-[25px] px-[20px]">{contentData.content}</div>
        </div>

    );
}
export default ActivityDetailPage;