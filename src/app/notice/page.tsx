import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import React from "react";
import NoticeCard from "@/app/notice/_component/NoticeCard";


const NoticePage = () => {
    return (
        <div>
            <div className={'hidden lg:block'}>
                <PageTitle>Notice</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Notice</MobilePageTitle>
            </div>
            <div className='flex flex-row w-full justify-center '>
                <div className='flex flex-col w-[1020px] items-start'>
                    <div className='flex flex-row justify-start'>

                        <NoticeCard img={'/MemberFemale.png'} id={1} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                        <NoticeCard img={'/MemberMale.png'} id={2} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                        <NoticeCard img={'/MemberFemale.png'} id={3} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <NoticeCard img={'/MemberFemale.png'} id={1} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                        <NoticeCard img={'/MemberMale.png'} id={2} title={"룰루랄랄 쿠쿠루삐dddd뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                        <NoticeCard img={'/MemberFemale.png'} id={3} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                    date={"8/19-9/20"}/>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div className='flex flex-row'>
                            <NoticeCard img={'/MemberMale.png'} id={2} title={"룰루랄랄 쿠쿠루삐뽕"} tag={"#홍보부"}
                                        date={"8/19-9/20"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticePage;