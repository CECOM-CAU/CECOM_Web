'use client';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import NavButton from "@/app/_components/NavBar/NavButton";
import RecruitBTN from "@/app/_components/NavBar/RecruitBTN";

const LogoStyle = "flex flex-row items-center h-[70px] bg-transparent pl-[20px] pt-[10px]"
const NavBarMobile = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div>
            {
                isClicked ? <div className="flex flex-col h-[100vh] bg-primary-lightgray50 backdrop-blur-md">
                        <div className={LogoStyle}>
                            <Link href="/">
                                <img className="w-[70px] h-[70px] " src="/MobileLogo.svg" alt="logo"/>
                            </Link>
                            <div className="absolute right-[20px]" onClick={() => setIsClicked(false)}>
                                <FontAwesomeIcon icon={faX} size="xl"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-[90px] z-50">
                            <div onClick={() => setIsClicked(false)}>
                                <MobileNavButton link="/">
                                   About Us
                                </MobileNavButton>
                            </div>
                            <div onClick={() => setIsClicked(false)}>
                                <MobileNavButton link="/activities">
                                    Activities
                                </MobileNavButton>
                            </div>
                            <div onClick={() => setIsClicked(false)}>
                                <MobileNavButton link="/members">
                                    Members
                                </MobileNavButton>
                            </div>
                            <div onClick={() => setIsClicked(false)}>
                                <MobileNavButton link="/things">
                                    Things
                                </MobileNavButton>
                            </div>
                        </div>
                    </div>


                    :
                    <div className={LogoStyle}>
                        <Link href="/">
                            <img className="w-[70px] h-[70px]" src="/MobileLogo.svg" alt="logo"/>
                        </Link>
                        <div className="absolute right-[20px]" onClick={() => setIsClicked(true)}>
                            <FontAwesomeIcon icon={faBars} size="2xl"/>
                        </div>


                    </div>
            }
        </div>
    );
}
export default NavBarMobile;

interface Props {
    children: React.ReactNode;
    link: string;
}

const MobileNavButton = ({children, link}: Props) => {
    return (
        <Link href={link}>
            <div className="text-[30px] my-[20px] font-gmarket-m">{children}</div>
        </Link>
    )
}