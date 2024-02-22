import React from "react";

interface props {
    children: React.ReactNode;
    isClicked: boolean;

}

const MenuBTN = ({children, isClicked}: props) => {
    const NAV_BTN_STYLE_CLICKED = "text-[18px] rounded-3xl mx-[10px] font-gmarket-m lg:text-xl lg:mx-[15px]"
    const NAV_BTN_STYLE_NORMAL = "text-[18px] flex justify-center mx-[10px] lg:text-xl lg:mx-[15px]";
    return (
        <div className={isClicked ? NAV_BTN_STYLE_CLICKED : NAV_BTN_STYLE_NORMAL}>
            {children}
        </div>
    );

}

export default MenuBTN;