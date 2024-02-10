import Link from "next/link";
import {useState} from "react";
import {Admin, AdminItem} from "@/utils/Interfaces";

interface props {
    link : string;
}
const Projectname = ({role,member}:AdminItem) => {
    const [isClicked, setIsClicked] = useState(false)
    const HandlePj = () => {
        setIsClicked(!isClicked);
    }
    return(
        <div onClick={() => HandlePj}>
            <Link href="">
                <div className={'h-[20px] flex flex-col justify-center item-center' +
                    'bg-cover rounded-2xl border-0 bg-gray-300'}>
                    <span className={'text-[11px] mx-[3px] place-self-center font-gmarket'}>{member.project}</span>
                </div>
            </Link>
        </div>

    );
}
export default Projectname;

