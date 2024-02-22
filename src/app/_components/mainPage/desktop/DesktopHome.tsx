import DesktopMainLogo from "@/app/_components/mainPage/desktop/DesktopMainLogo";
import Who from "@/app/_components/mainPage/desktop/Who";
import WhatWeDo from "@/app/_components/mainPage/desktop/WhatWeDo";
import {MainImage} from "@/utils/Interfaces";

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
            <Who/>
            <WhatWeDo project={project} mentoring={mentoring} study={study} event={event}/>
        </div>
    );
}