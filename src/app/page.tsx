import MainLogo from "@/app/_components/mainPage/MainLogo";
import Who from "@/app/_components/mainPage/Who";
import WhatWeDo from "@/app/_components/mainPage/WhatWeDo";

export default function Home() {
    return (
        <main className="w-full flex-col items-center justify-between z-0">

            <div className="h-[100vh] w-full bg-gradient-to-br from-blue-100 to-transparent via-transparent">
                <div className="h-[100vh] w-full bg-gradient-to-tl from-red-100 to-transparent via-transparent">
                    <div className="flex flex-col w-full pl-[300px]">
                        <MainLogo/>
                    </div>
                </div>
            </div>
            <Who/>
            <WhatWeDo/>
        </main>
    )
}
