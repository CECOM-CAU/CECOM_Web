import dynamic from 'next/dynamic'
import DesktopMainLogo from "@/app/_components/mainPage/desktop/DesktopMainLogo";
import {MainImage} from "@/utils/Interfaces";
import {Suspense} from "react";


const LoadingComponent = () => <div className="h-screen">Loading... </div>;
const Who = dynamic(() => import('@/app/_components/mainPage/desktop/Who'),{loading:()=><p></p>,  ssr: false});
const WhatWeDo = dynamic(() => import('@/app/_components/mainPage/desktop/WhatWeDo'),{loading:()=><p></p>,  ssr: false});

export const DesktopHome = ({project,study,mentoring,event} :MainImage) => {
    return (
        <div className="hidden lg:block">
            <div className="h-[100vh] w-full bg-gradient-to-br from-blue-100 to-transparent via-transparent">
                <div className="h-[100vh] w-full bg-gradient-to-tl from-red-100 to-transparent via-transparent">
                    <div className="flex flex-col w-full pl-[300px]">
                        <DesktopMainLogo/>
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
    );
}