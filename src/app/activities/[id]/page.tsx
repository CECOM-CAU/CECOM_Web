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

    const [contentData, setContentData] = useState<ActivityContent>({
        content: '',
        id: '',
        photo: {count: 0, data: []},
        role: [],
        tag: [],
        title: ''
    });
    useEffect(() => {
        axios.get(`https://cecom.dev/api/activities/getActivitiesData/${id}`)
            .then((res) => {
                    setContentData(res.data.RESULT_DATA);
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