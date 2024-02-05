import Link from "next/link";
import {useState} from "react";

interface props {
    link : string;
}
const Projectname = () => {
    const [isClicked, setIsClicked] = useState(false)
    const HandlePj = () => {
        setIsClicked(!isClicked);
    }
    return(
        <div onClick={() => HandlePj}>
            <Button link=""></Button>
        </div>

    );
}
export default Projectname;

const Button = ({link}:props) => {
    return(
        <Link href={link}>
            <div className={'h-[20px] flex flex-col justify-center item-center' +
                'bg-cover rounded-2xl border-0 bg-gray-300'}>
                <span className={'text-[11px] mx-[3px] place-self-center font-gmarket'}>프로젝트 명</span>
            </div>
        </Link>
    );
}