import React from "react";

interface Props{
    children:React.ReactNode;
}
const PageTitle = ({children}:Props) => {
    return (
        <p className="text-[180px] mt-[95px] ml-[120px]">{children}</p>
    );
}

export default PageTitle;