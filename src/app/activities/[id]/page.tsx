'use client';
import React, {useEffect, useState} from "react";
import MemberInfo from "@/app/activities/[id]/_component/MemberInfo";
import {ActivityContentData} from "@/utils/DummyData";
import Tag from "@/app/activities/_components/Tag";
import Link from "next/link";
import PhotoCarousel from "@/app/activities/[id]/_component/desktop/PhotoCarousel";
import axios from "axios";
import {ActivityContent} from "@/utils/Interfaces";
import MobileCarousel from "@/app/activities/[id]/_component/mobile/MobileCarousel";
import {DesktopDetail} from "@/app/activities/[id]/_component/desktop/DesktopDetail";
import {MobileDetail} from "@/app/activities/[id]/_component/mobile/MobileDetail";

const ActivityDetailPage = ({params}: { params: { id: string } }) => {
    const {id} = params;

    const [contentData, setContentDatas] = useState<ActivityContent>({
        content: '',
        id: '',
        photo: {count: 0, data: []},
        role: [],
        tag: [],
        title: ''
    });
    const imageData = [
        'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg',
        'https://img.freepik.com/free-photo/sparkle-cloud-pastel-purple-image_53876-94835.jpg?size=626&ext=jpg',
        'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'
    ];
    useEffect(() => {
        axios.get(`/api/activities/getActivitiesData/${id}`)
            .then((res) => {
                    setContentDatas(res.data.RESULT_DATA);
                }
            ).catch((err) => {
        })
    }, []);

    return (
        <div className="flex flex-col mt-[75px] lg:mt-[100px] w-full items-center ">
            <div className="hidden lg:block">
                <DesktopDetail contentData={contentData}/>
            </div>
            <div className='block lg:hidden'>
                <MobileDetail contentData={contentData}/>
            </div>
        </div>

    );
}
export default ActivityDetailPage;