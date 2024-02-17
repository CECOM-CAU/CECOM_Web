'use client'
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import MemberFrontCard from "@/app/members/_components/membercard";
import MemberBackCard from "@/app/members/_components/Backcard";
import {AdminItem} from "@/utils/Interfaces";

const MobMemberCard = ({role,member}:AdminItem) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const Handleimage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
            <div onMouseEnter={Handleimage}>
                <MemberFrontCard member={member} role={role}/>
            </div>
            <div onMouseEnter={Handleimage}>
                <MemberBackCard member={member} role={role}/>
            </div>
        </ReactCardFlip>
    );
};

export default MobMemberCard;