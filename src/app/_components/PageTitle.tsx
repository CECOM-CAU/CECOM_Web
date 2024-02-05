import React from "react";

interface Props{
    children:React.ReactNode;
}
const PageTitle = ({children}:Props) => {
    return (
        <div className="flex flex-row mt-[95px] ">
            <p className="text-[100px] mt-[10px] ml-[200px]">{children}</p>
            <img className="h-[60px] ml-[-15px] mt-[10px]" src="/Titlelogo.png" alt="Titlelogo"/>
        </div>
    );
}

export default PageTitle;

