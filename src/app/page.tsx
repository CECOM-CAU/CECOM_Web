import DesktopMainLogo from "@/app/_components/mainPage/DesktopMainLogo";
import Who from "@/app/_components/mainPage/Who";
import WhatWeDo from "@/app/_components/mainPage/WhatWeDo";
import MobileMainLogo from "@/app/_components/mainPage/MobileMainLogo";

export default function Home() {
    return (
        <main className="w-full flex-col items-center justify-between z-0">
            <DesktopHome/>
            <MobileHome/>
        </main>
    );
}
const DesktopHome = () => {
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
            <WhatWeDo/>
        </div>
    );
}

const MobileHome = () => {
    return (
        <div className="block lg:hidden z-0">
            <div className="h-[100vh] w-full bg-gradient-to-br from-blue-100 to-transparent via-transparent">
                <div className="h-[100vh] w-full bg-gradient-to-tl from-red-100 to-transparent via-transparent">
                    <div className="flex flex-col w-full">
                        <MobileMainLogo/>
                    </div>
                </div>
            </div>
        </div>
    )
}