import React from "react";

interface Props{
    children:React.ReactNode;
}
const PageTitle = ({children}:Props) => {
    return (
        <div className="flex flex-row w-full mt-[95px]">
            <div className="text-[100px] mt-[10px] ml-[200px]">{children}</div>
            <img className="h-[60px] ml-[-15px] mt-[10px]" src="/Titlelogo.png" alt="Titlelogo"/>
        </div>
    );
}

export default PageTitle;

