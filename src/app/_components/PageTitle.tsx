import React from "react";

interface Props{
    children:React.ReactNode;
}
const PageTitle = ({children}:Props) => {
    return (
        <div className="flex flex-row">
            <p className="text-[130px] mt-[10px] ml-[120px]">{children}</p>
            <img className="h-[60px] ml-[-15px] mt-[10px]" src="/Titlelogo.png" alt="Titlelogo"/>
        </div>
    );
}

export default PageTitle;

