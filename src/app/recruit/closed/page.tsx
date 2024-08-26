import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import React from "react";

const ClosedPage = () => {
    return (
        <>
            <div className={'hidden lg:block'}>
                <PageTitle>Recruit</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Recruit</MobilePageTitle>
            </div>
            <div className='mt-[100px]'>
                <div className='text-center md:text-2xl text-[20px] font-bold'>
                    신입부원 모집기간이 아닙니다.
                </div>
            </div>
        </>
    )
}


export default ClosedPage;