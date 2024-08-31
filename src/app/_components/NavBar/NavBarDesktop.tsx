"use client"
import NavButton from "@/app/_components/NavBar/NavButton";
import {useEffect, useState} from "react";
import Link from "next/link";
import RecruitBTN from "@/app/_components/NavBar/RecruitBTN";
import {useSelectedLayoutSegment} from "next/navigation";

const NavBarDesktop = () => {
    const params = useSelectedLayoutSegment();
    const [activity, setActivity] = useState(false)
    const [member, setMember] = useState(false)
    const [notice, setNotice] = useState(false)
    const handleNavBTN = (isActivity: boolean, isMember: boolean, isNotice: boolean) => {
        setActivity(isActivity);
        setMember(isMember);
        setNotice(isNotice);
    }
    useEffect(() => {
        if (params === "activities") {
            handleNavBTN(true, false, false)
        } else if (params === "members") {
            handleNavBTN(false, true, false)
        } else if (params === "notice") {
            handleNavBTN(false, false, true)
        }else if (params ==="recruit"){
            handleNavBTN(false, false, false)
        }
    }, [params]);

    return (
        <nav className="w-full bg-white">
            <div className="flex flex-row items-center justify-between h-[100px] ml-[200px] mr-[40px]">
                <div>
                    <Link href="/">
                        <img className="h-30 min-w-[247px] " src="/HeaderLogo.svg" alt="logo"
                             onClick={() => handleNavBTN(false, false, false)}/>
                    </Link>
                </div>
                <div className="mr-[50px] h-30 flex justify-end items-center ">
                    <NavButton link="/activities" isClick={activity}>
                        Activities
                    </NavButton>
                    <NavButton link="/members" isClick={member}>
                        Members
                    </NavButton>
                    <NavButton link="/notice" isClick={notice}>
                        Notice
                    </NavButton>
                    <RecruitBTN>Recruit</RecruitBTN>
                </div>
            </div>
        </nav>
    )
}

export default NavBarDesktop;