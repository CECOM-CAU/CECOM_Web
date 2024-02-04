"use client"
import NavButton from "@/app/_components/NavBar/NavButton";
import {useState} from "react";
import Link from "next/link";
import RecruitBTN from "@/app/_components/NavBar/RecruitBTN";

const NavBarDesktop = () => {
    const [activity, setActivity] = useState(false)
    const [member, setMember] = useState(false)
    const [thing, setThing] = useState(false)
    const handleNavBTN = (isActivity: boolean, isMember: boolean, isThing: boolean) => {
        setActivity(isActivity);
        setMember(isMember);
        setThing(isThing);
    }

    return (
        <nav className="w-full bg-white">
            <div className="flex flex-row justify-between h-30 mt-[15px] ml-[120px] mr-[40px]">
                <div>
                    <Link href="/">
                        <img className="h-30" src="/HeaderLogo.svg" alt="logo"
                             onClick={() => handleNavBTN(false, false, false)}/>
                    </Link>
                </div>
                <div className="mr-[50px] h-30 flex justify-end items-center ">
                    <div onClick={() => handleNavBTN(true, false, false)}>
                        <NavButton link="/activities" isClick={activity}>
                            Activities
                        </NavButton>
                    </div>
                    <div onClick={() => handleNavBTN(false, true, false)}>
                        <NavButton link="/members" isClick={member}>
                            Members
                        </NavButton>
                    </div>
                    <div onClick={() => handleNavBTN(false, false, true)}>
                        <NavButton link="/things" isClick={thing}>
                            Things
                        </NavButton>
                    </div>
                    <div onClick={() => handleNavBTN(false, false, false)}>
                        <RecruitBTN link="/">Recruit</RecruitBTN>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBarDesktop;