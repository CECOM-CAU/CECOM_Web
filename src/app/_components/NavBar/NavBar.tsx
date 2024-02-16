import NavBarDesktop from "@/app/_components/NavBar/NavBarDesktop";
import NavBarMobile from "@/app/_components/NavBar/NavBarMobile";

export const NavBar = () => {
    return (
        <>
            <div className="hidden w-full flex flex-row fixed top-0 z-20 lg:block">
                <NavBarDesktop/>
            </div>
            <div className="w-full fixed top-0 z-50 lg:hidden">
                <NavBarMobile/>
            </div>
        </>
    )
}