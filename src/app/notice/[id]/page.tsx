'use client';
import Link from "next/link";
import React, {useEffect} from "react";
import PhotoCarousel from "@/app/_components/PhotoCarousel";
import axios from "axios";
import {NoticeDetail} from "@/utils/Interfaces";


const NoticeDetailPage = ({params}: { params: { id: string } }) => {
    const {id} = params;
    const [noticeDetail, setNoticeDetail] = React.useState<NoticeDetail>({content:'',date:'',id:'',part:'',title:'',photo:{count:0,data:[]},photoCnt:0});
    useEffect(() => {
        axios.get(`/api/notice/getNoticeDetail/${id}`)
            .then((res) => {
                    setNoticeDetail(res.data.RESULT_DATA);
                }
            )
    }, []);
    return (
        <div className="flex flex-col mt-[75px]  w-full items-center ">
            <div className="flex flex-col w-full lg:w-[1020px] px-[10px] lg:px-[0px] items-start">
                <div
                    className="flex flex-row w-full items-center justify-start h-[50px] ml-[20px] lg:h-[70px] lg:mt-[15px] ">
                    <Link href={'/notice'}>
                        <div className="text-[18px] lg:text-[25px] font-gmarket-m">Notice &#62;</div>
                    </Link>
                    <div className="text-[18px] lg:text-[25px] font-gmarket-l ml-[10px]">{noticeDetail.title}</div>
                </div>
            </div>
            <div className='w-[350px] flex flex-col lg:w-[700px] items-start'>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-[350px] lg:w-[700px] rounded-[20px]">
                        <PhotoCarousel count={noticeDetail.photoCnt}
                                       data={noticeDetail.photo.data}/>
                    </div>
                    <div className="flex flex-row w-[350px] lg:w-[700px] mt-[5px]">
                        <div
                            className="flex h-[25px] text-center pt-[4px] text-[12px] lg:text-[18px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px] lg:px-[10px]  mr-[10px] mt-[10px]">{noticeDetail.part}</div>
                        <div
                            className="flex h-[25px] text-center pt-[4px] text-[12px] lg:text-[18px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] lg:px-[10px] mr-[10px] mt-[10px]">{noticeDetail.date}</div>
                    </div>
                </div>
                <div className='w-full text-[28px] lg:text-[40px] border-b-[1px] border-[#000000] mb-[10px] mt-[5px] lg:mt-[10px]'>
                    {noticeDetail.title}
                </div>
                <div
                    className="flex flex-col w-full justify-start lg:w-[700px] mt-[8px] rounded-[10px] bg-primary-lightgray30 py-[25px] px-[20px]">
                    {(noticeDetail.content).split(`\\n`).map((line) => {
                        return <div>{line}</div>})}
                </div>
            </div>
        </div>
    );
}

export default NoticeDetailPage;