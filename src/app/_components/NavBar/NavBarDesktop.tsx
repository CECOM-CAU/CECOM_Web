"use client"
import NavButton from "@/app/_components/NavBar/NavButton";
import {useState} from "react";
import Link from "next/link";

const NavBarDesktop = () => {
    const [activity, setActivity] = useState(false)
    const [member, setMember] = useState(false)
    const [thing, setThing] = useState(false)
    const handleActivity = () => {
        setActivity(true);
        setMember(false);
        setThing(false);
    }
    const handleMember = () => {
        setActivity(false);
        setMember(true);
        setThing(false);
    }
    const handleThing = () => {
        setActivity(false);
        setMember(false);
        setThing(true);
    }
    const handleLogo = () => {
        setActivity(false);
        setMember(false);
        setThing(false);
    }

    return (
        <nav className="w-full">
            <div className="flex flex-row justify-between h-30 mt-[15px] ml-[120px] mr-[40px]">
                <div>
                    <Link href="/">
                        <img className="h-30" src="/HeaderLogo.svg" alt="logo" onClick={handleLogo}/>
                    </Link>
                </div>
                <div className="mr-[50px] h-30 flex justify-end items-center ">
                    <NavButton link="/activities" click={activity}><a
                        onClick={handleActivity}>Activities</a></NavButton>
                    <NavButton link="/members" click={member}><a onClick={handleMember}>Members</a></NavButton>
                    <NavButton link="/things" click={thing}><a onClick={handleThing}>Things</a></NavButton>
                </div>
            </div>
        </nav>
    )
}

export default NavBarDesktop;