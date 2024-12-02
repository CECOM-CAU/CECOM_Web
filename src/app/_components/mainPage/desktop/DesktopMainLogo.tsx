const DesktopMainLogo = () => {
    const thin = "flex text-[80px] h-[100px] mr-[20px]";
    const bold = "flex text-[80px] w-full h-[100px] font-gmarket-m";
    return (
        <div className="flex flex-col justify-center w-[962px] min-h-[100vh]">
            <div className="flex flex-row w-full">
                <div className={`${thin} w-auto`}>That's</div>
                <div className={bold}>crazy idea,</div>
            </div>
            <div className="flex flex-row w-full">
                <div className={`${thin} w-auto`}>let's</div>
                <div className={bold}>do &#8213;&#8213;&#8213; that</div>
            </div>

            <div className={bold}>right away ! &#8213;&#8213;&#8213;</div>
        </div>
    )
        ;
}

export default DesktopMainLogo;