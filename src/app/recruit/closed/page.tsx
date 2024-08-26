'use client';

import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import React, {useEffect, useState} from "react";
import axios from "axios";

const ClosedPage = () => {
    const [closeMessage, setCloseMessage] = useState("")

    useEffect(() => {
        axios.get(`/api/recruit/getAvailibility`)
            .then((res) => {
                setCloseMessage(res.data.RESULT_DATA.message);
            });
    });

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
                    {closeMessage}
                </div>
            </div>
        </>
    )
}


export default ClosedPage;