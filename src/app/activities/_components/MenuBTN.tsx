import React from "react";

interface props{
    children: React.ReactNode;
    isClicked: boolean;

}
const MenuBTN = ({children, isClicked}:props) => {
    const NAV_BTN_STYLE_CLICKED = "text-xl rounded-3xl mx-[15px] font-gmarket-m"
    const NAV_BTN_STYLE_NORMAL = "flex justify-center mx-[15px] text-xl";
    return (

        <div className={isClicked?NAV_BTN_STYLE_CLICKED:NAV_BTN_STYLE_NORMAL}>
            {children}</div>

    );

}

export default MenuBTN;