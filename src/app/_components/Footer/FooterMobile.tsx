
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const FooterMobile = () => {
    return (
        <div className="w-[340px] flex flex-col justify-center items-center h-[300px] mt-[100px]">
            <div className="w-full flex flex-row justify-center mb-[30px]">
                <Link href={"https://instagram.com/cecom_cau"}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-[20px]" />
                </Link>
                <Link href={"https://github.com/CECOM-CAU"}>
                    <FontAwesomeIcon icon={faGithub} size="2x" className="mr-[20px]" />
                </Link>
            </div>
            <div className="w-full flex flex-row justify-center">
                <div className="font-gmarket-b text-[20px]">
                    Contact
                </div>
                <div className="font-gmarket-m text-[20px] ml-[10px]">
                    cecom.cau@gmail.com
                </div>
            </div>
            <div className="w-[200px] border-[1px] border-[#000000] my-[20px]"></div>
            <div className="w-full text-[15px] text-center my-[10px]">
                Designed by Yubin Seo / Developed by Yongmin Yoo, Sooghyun Lim, Serin Jeong
            </div>
            <div className="w-full text-[15px] text-center mb-[10px]">
                &#169; 2024 CECOM ALL RIGHT RESERVED.
            </div>
        </div>
    )
}

export default FooterMobile;