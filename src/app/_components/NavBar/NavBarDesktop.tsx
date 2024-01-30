import NavButton from "@/app/_components/NavBar/NavButton";

const NavBarDesktop = () => {
    return (
        <nav className="w-full">
            <div className="flex flex-row justify-between w-full h-30 mt-[15px]">
                <div>
                    <img className="h-30 ml-[80px]" src="/HeaderLogo.svg" alt="logo"/>
                </div>
                <div className="w-full h-30 flex justify-end items-center">
                    <NavButton link="/activities">Activities</NavButton>
                    <NavButton link="/members">Members</NavButton>
                    <NavButton link="/things">Things</NavButton>
                </div>
            </div>
        </nav>
    )
}

export default NavBarDesktop;