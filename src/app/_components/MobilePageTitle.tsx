import React from "react";

export const MobilePageTitle = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center lg:hidden">
            <div className="flex justify-center mt-[80px]">
                <p className="text-[50px]">{children}</p>
                <img className="h-[30px] ml-[-5px] mt-[-5px]" src="/Titlelogo.png" alt="Titlelogo"/>
            </div>
            <div className="w-[150px] border-[#000000] border-y-[1px] mt-[10px] mb-[20px]"></div>
        </div>
    )
}