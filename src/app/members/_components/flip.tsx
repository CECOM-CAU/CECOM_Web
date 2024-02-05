'use client'
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import MemberFrontCard from "@/app/members/_components/membercard";
import MemberBackCard from "@/app/members/_components/Backcard";

const MemberCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const Handleimage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
          <div onMouseEnter={Handleimage}>
              <MemberFrontCard></MemberFrontCard>
          </div>
          <div onMouseLeave={Handleimage}>
              <MemberBackCard></MemberBackCard>
          </div>
      </ReactCardFlip>
    );
};

export default MemberCard;