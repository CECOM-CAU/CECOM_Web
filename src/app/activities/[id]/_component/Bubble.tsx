interface Props {
    children: React.ReactNode;
}
const Bubble = ({ children}:Props) => {
    return (
        <div className="absolute my-[-26px] ml-[-11px]">
            <div className="bg-[#E1E1E1] rounded-lg max-w-max h-[22px] px-[5px] relative z-20">
                <div className="text-center text-[13px] py-[3px]">{children}</div>
            </div>
            <div className="absolute w-5 h-4 bg-[#E1E1E1]  border-solid bottom-0 left-1/2 transform -translate-x-3 rotate-45 z-0"></div>
        </div>
    );
}

export default Bubble;