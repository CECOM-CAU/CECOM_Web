
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
const FooterDesktop = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-[300px] mt-[100px]">
            <div className="flex flex-row justify-center mb-[30px]">

                <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-[20px]" />
                <FontAwesomeIcon icon={faGithub} size="2x" className="mr-[20px]" />
            </div>
            <div className="flex flex-row items-end">
                <div className="font-gmarket-b text-[20px]">Contact</div><div className="font-gmarket-m text-[20px] ml-[10px]">cecom.cau@gmail.com</div>
            </div>
            <div className="border-[1px] border-[#000000] w-[200px] my-[20px]"></div>
            <div className="text-[15px] my-[10px]">
                Designed by 서유빈 Developed by 유용민 임수현 정세린
            </div>
            <div className="text-[15px] mb-[10px]">
                &#169; 2024 CECOM ALL RIGHT RESERVED.
            </div>
        </div>
    )
}

export default FooterDesktop;