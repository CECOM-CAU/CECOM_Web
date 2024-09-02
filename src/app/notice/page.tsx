'use client';
import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import React, {useEffect} from "react";
import NoticeCard from "@/app/notice/_component/NoticeCard";
import axios from "axios";
import {NoticeList, NoticeListItem} from "@/utils/Interfaces";


const NoticePage = () => {
    const [noticeList, setNoticeList] = React.useState<NoticeListItem[]>([]);
    useEffect(() => {
        axios.get(`/api/notice/getNoticeList`)
            .then((res) => {
                    setNoticeList(res.data.RESULT_DATA.data);
                }
            )
    }, []);

    return (
        <div>
            <div className={'hidden lg:block'}>
                <PageTitle>Notice</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Notice</MobilePageTitle>
            </div>
            <div className='flex flex-row w-full justify-center '>
                <div className='flex flex-col w-full lg:w-[1020px] items-center '>
                    <div
                        className='flex flex-row w-full px-[6px] justify-evenly lg:w-[1050px] lg:justify-start flex-wrap'>
                        {noticeList.map((notice: NoticeListItem) => (
                            <NoticeCard img={notice.thumbnail} id={notice.id} title={notice.title} tag={notice.part}
                                        date={notice.date}/>))}
                        <div className='w-[160px] lg:w-[340px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticePage;