const MainLogo = () => {
    const thin = "flex text-[60px] mr-[20px]";
    const bold = "flex text-[60px] font-gmarket-m";
    return (
        <div className="ml-[250px] mt-[300px]">
            <div className="flex flex-row">
                <div className={thin}>That's</div>
                <div className={bold}>crazy idea,</div>
            </div>
            <div className="flex flex-row">
                <div className={thin}>let's</div>
                <div className={bold}>do &#8213;&#8213;&#8213; that</div>
            </div>

            <div className={bold}>right away ! &#8213;&#8213;&#8213;</div>
        </div>
    )
        ;
}

export default MainLogo;