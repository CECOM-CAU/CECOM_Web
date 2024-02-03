import React from "react";

interface Props{
    children:React.ReactNode;
}
const PageTitle = ({children}:Props) => {
    return (
        <div>
            <p className="text-[130px] mt-[90px] ml-[120px]">{children}</p>
            <img className="h-[60px] absolute top-[90px] left-[570px]" src="/Titlelogo.png" alt="Titlelogo"/>
        </div>
    );
}

export default PageTitle;

