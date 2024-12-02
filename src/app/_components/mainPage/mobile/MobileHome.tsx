'use client';
import dynamic from "next/dynamic";
import MobileMainLogo from "@/app/_components/mainPage/mobile/MobileMainLogo";
import {MainImage} from "@/utils/Interfaces";
import {Suspense} from "react";

const LoadingComponent = () => <div className="h-screen">Loading... </div>;
const Who = dynamic(() => import('@/app/_components/mainPage/mobile/MobileWho'),{loading:()=><p></p>,  ssr: false});
const WhatWeDo = dynamic(() => import('@/app/_components/mainPage/mobile/MobileWhatWeDo'),{loading:()=><p></p>,  ssr: false});

export const MobileHome = ({project,study,mentoring,event} :MainImage) => {
    return (
        <div className="block lg:hidden z-0">
            <div className="h-[100vh] w-full bg-gradient-to-br from-blue-100 to-transparent via-transparent">
                <div className="h-[100vh] w-full bg-gradient-to-tl from-red-100 to-transparent via-transparent">
                    <div className="flex flex-col w-full">
                        <MobileMainLogo/>
                    </div>
                </div>
            </div>
            <Suspense fallback={<LoadingComponent />}>
                <Who/>
            </Suspense>
            <Suspense fallback={<LoadingComponent />}>
                <WhatWeDo
                    project={project}
                    mentoring={mentoring}
                    study={study}
                    event={event}
                />
            </Suspense>
        </div>
    )
}