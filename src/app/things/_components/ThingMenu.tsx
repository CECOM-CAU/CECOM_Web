import React from "react";



interface props{
    children: React.ReactNode;
    isClicked: boolean;

}
const ThingMenu = ({children, isClicked}:props) => {
    const NAV_BTN_STYLE_CLICKED = "text-[14px] rounded-3xl mx-[9px] font-gmarket-m lg:text-xl lg:mx-[30px]"
    const NAV_BTN_STYLE_NORMAL = "text-[14px] flex justify-center mx-[9px] font-gmarket lg:text-xl lg:mx-[30px]";
    return (

        <div className={isClicked?NAV_BTN_STYLE_CLICKED:NAV_BTN_STYLE_NORMAL}>
            {children}</div>

    );

}
export default ThingMenu;