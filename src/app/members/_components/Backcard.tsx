import Projectname from "@/app/members/_components/projectname";
import {Admin, AdminItem} from "@/utils/Interfaces";
import {useState} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

const InstaButton = ({role,member}:AdminItem) => {
    const [isClicked, setIsClicked] = useState(false)
    const HandlePj = () => {
        setIsClicked(!isClicked);
    }
    return(
        <div className={`${member.instagram.length > 0 ? "visible" : "invisible"}`}>
            <div onClick={() => HandlePj}>
                <Link href={'https://www.instagram.com/'+member.instagram}>
                    <FontAwesomeIcon icon={faInstagram} size="xl"/>
                </Link>
            </div>
        </div>

    );
}
const GitButton = ({role,member}:AdminItem) => {
    const [isClicked, setIsClicked] = useState(false)
    const HandlePj = () => {
        setIsClicked(!isClicked);
    }
    return(
        <div className={`${member.github.length > 0 ? "visible" : "invisible"}`}>
            <div onClick={() => HandlePj}>
                <Link href={'https://www.github.com/'+member.github}>
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                </Link>
            </div>
        </div>

    );
}
const MemberBackCard = ({member,role}:AdminItem) => {
    return (
        <div className={'pt-[40px] pl-[20px] w-[260px] h-[400px] bg-white border-0 rounded-lg shadow-xl'}>
            <div className={'flex flex-col'}>
                <img className={'w-[63px] h-[69px]'} src={
                    member.image !== "" ?
                        member.image
                        : member.gender === "male" ?
                            "/MemberMale.png"
                            : "/MemberFemale.png"
                } alt="BackIcon"/>
                <div className={'flex flex-col mt-[14px]'}>
                    <div className={'h-[24px] w-[140px] flex flex-row gap-[5px] items-center'}>
                        <span className={'text-[26px] place-self-center font-gmarket-m mr-[5px]'}>{member.name}</span>
                        <InstaButton member={member} role={role}/>
                        <GitButton member={member} role={role}/>
                    </div>
                    <div className={'mt-[4px] flex flex-col'}>
                        <div className={'flex flex-row items-center'}>
                            <div className={'mr-[7px] ml-[1px] border border-left border-s-gray-400 h-[15px]'}></div>
                            <span className={'mt-[3px] text-[15px] font-gmarket'}>{role}</span>
                        </div>
                        <span className={'font-gmarket text-[15px]'}>{member.department}</span>
                    </div>
                </div>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <div className={'mt-[10px] w-[220px] flex flex-row flex-wrap'}>
                    <span className={'text-[14px] font-gmarket'}>{member.comment}</span>
                </div>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <span className={'text-[15px] font-gmarket mt-[10px]'}>참여 활동</span>
                <div className={'flex flex-row gap-x-[5px] mt-[5px]'}>
                    {member.project.map((m) => (
                        <Projectname id={m}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default MemberBackCard;