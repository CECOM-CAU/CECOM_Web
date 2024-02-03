'use client';
import PageTitle from "@/app/_components/PageTitle";
import SmallBox from "@/app/things/_components/page";
import React from "react";
import MenuBar from "@/app/things/_components/menubar";


const ThingsPage = () => {
    return (
        <div>
                <PageTitle>Things</PageTitle>
            <div>
                <div className={'flex flex-row mt-[10px] justify-center'}>
                    <MenuBar/>
                </div>
                    <div className={'grid container w-full grid-cols-3 grid-flow-row gap-[30px] justify-items-center mt-[20px]'}>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                        <SmallBox></SmallBox>
                    </div>
            </div>
        </div>

    );
}

export default ThingsPage;