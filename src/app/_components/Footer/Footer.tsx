import FooterDesktop from "@/app/_components/Footer/FooterDesktop";
import FooterMobile from "@/app/_components/Footer/FooterMobile";

export const Footer = () => {
    return (
        <div className="w-full flex z-20 bottom-0">
            <div className="w-0 invisible lg:w-full lg:visible">
                <FooterDesktop />
            </div>
            <div className="w-full flex justify-center visible lg:w-0 lg:invisible">
                <FooterMobile />
            </div>
        </div>
    )
}