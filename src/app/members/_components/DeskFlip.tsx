'use client'
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import MemberFrontCard from "@/app/members/_components/FrontCard";
import MemberBackCard from "@/app/members/_components/BackCard";
import {AdminItem} from "@/utils/Interfaces";

const DeskMemberCard = ({role,member}:AdminItem) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const Handleimage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="group [perspective:1000px]">
            <div className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="">
                    <MemberFrontCard member={member} role={role}/>
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <MemberBackCard member={member} role={role}/>
                </div>
            </div>
        </div>
    );
};

export default DeskMemberCard;