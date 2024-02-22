'use client';
import Link from "next/link";
import {useState} from "react";

const BasicLogoStyle = "flex flex-row items-center h-[70px] bg-transparent pl-[20px] py-[10px] backdrop-blur-md"
const openMenuLogoStyle = "flex flex-row items-center h-[70px] bg-transparent pl-[20px] py-[10px]"
const NavBarMobile = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div>
            {
                isClicked ? <div className="flex flex-col h-[100vh] bg-primary-lightgray50 backdrop-blur-md">
                        <div className={openMenuLogoStyle}>
                            <Link href="/">
                                <img className="w-[50px] h-[50px] " src="/MobileLogo.svg" alt="logo"/>
                            </Link>
                            <div className="absolute right-[20px]" onClick={() => setIsClicked(false)}>
                                <img className="w-[50px] h-[50px]" src={"/Close.svg"} alt="close"/>
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
                    <div className={BasicLogoStyle}>
                        <Link href="/">
                            <img className="w-[50px] h-[50px]" src="/MobileLogo.svg" alt="logo"/>
                        </Link>
                        <div className="absolute right-[20px]" onClick={() => setIsClicked(true)}>
                           <img  className="w-[50px] h-[50px]" src={"/Menu.svg"} alt="menu"/>
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