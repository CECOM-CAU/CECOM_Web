
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const FooterDesktop = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-[300px] mt-[100px]">
            <div className="flex flex-row justify-center mb-[30px]">
                <Link href={"https://instagram.com/cecom_cau"}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-[20px]" />
                </Link>
                <Link href={"https://github.com/CECOM-CAU"}>
                    <FontAwesomeIcon icon={faGithub} size="2x" className="mr-[20px]" />
                </Link>
            </div>
            <div className="flex flex-row items-end">
                <div className="font-gmarket-b text-[20px]">Contact</div><div className="font-gmarket-m text-[20px] ml-[10px]">cecom.cau@gmail.com</div>
            </div>
            <div className="border-[1px] border-[#000000] w-[200px] my-[20px]"></div>
            <div className="text-[15px] my-[10px]">
                Designed by Yubin Seo / Developed by Yongmin Yoo, Soohyun Lim, Serin Jeong
            </div>
            <div className="text-[15px] mb-[10px]">
                &#169; 2024 CECOM ALL RIGHT RESERVED.
            </div>
        </div>
    )
}

export default FooterDesktop;