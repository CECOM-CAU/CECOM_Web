
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const FooterMobile = () => {
    return (
        <div className="w-[340px] flex flex-col justify-center items-center h-[300px] mt-[100px]">
            <div className="w-full flex flex-row justify-center mb-[15px]">
                <Link href={"https://instagram.com/cecom_cau"}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-[15px]" />
                </Link>
                <Link href={"https://github.com/CECOM-CAU"}>
                    <FontAwesomeIcon icon={faGithub} size="2x" className="ml-[15px]" />
                </Link>
            </div>
            <div className="w-full flex flex-row justify-center">
                <div className="font-gmarket-b text-[15px]">
                    Contact
                </div>
                <div className="font-gmarket-m text-[15px] ml-[10px]">
                    cecom.cau@gmail.com
                </div>
            </div>
            <div className="w-[200px] border-[1px] border-[#000000] my-[20px]"></div>
            <div className="w-full text-[13px] text-center">
                Designed by Yubin Seo
            </div>
            <div className="w-full text-[13px] text-center mb-[10px]">
                Developed by Yongmin Yoo<br/>Sooghyun Lim, Serin Jeong
            </div>
            <div className="w-full text-[13px] text-center mt-[10px] mb-[-100px]">
                &#169; 2024 CECOM ALL RIGHT RESERVED.
            </div>
        </div>
    )
}

export default FooterMobile;