import {DesktopHome} from "@/app/_components/mainPage/desktop/DesktopHome";
import {MobileHome} from "@/app/_components/mainPage/mobile/MobileHome";
export default function Home() {
    return (
        <main className="w-full flex-col items-center justify-between z-0">
            <DesktopHome/>
            <MobileHome/>
        </main>
    );
}


