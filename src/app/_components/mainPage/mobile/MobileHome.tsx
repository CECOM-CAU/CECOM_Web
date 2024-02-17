import MobileMainLogo from "@/app/_components/mainPage/mobile/MobileMainLogo";
import MobileWho from "@/app/_components/mainPage/mobile/MobileWho";
import MobileWhatWeDo from "@/app/_components/mainPage/mobile/MobileWhatWeDo";

export const MobileHome = () => {
    return (
        <div className="block lg:hidden z-0">
            <div className="h-[100vh] w-full bg-gradient-to-br from-blue-100 to-transparent via-transparent">
                <div className="h-[100vh] w-full bg-gradient-to-tl from-red-100 to-transparent via-transparent">
                    <div className="flex flex-col w-full">
                        <MobileMainLogo/>
                    </div>
                </div>
            </div>
            <MobileWho/>
            <MobileWhatWeDo/>
        </div>
    )
}