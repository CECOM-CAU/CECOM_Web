const MobileMainLogo = () => {
    const Main = "font-gmarket-m text-[100px] w-[292px] h-[100px]";
    const subBold = "font-gmarket-m text-[22px]";
    const subThin = "font-gmarket-l text-[22px]";
    return (
        <div className="flex flex-col h-[100vh] w-full justify-center items-center">
            <div className="pt-[-100px]">
                <div className={Main}>
                    CE &#8213;
                </div>
                <div className={Main}>COM</div>
                <div className="flex flex-row mt-[30px] justify-start w-[270px] ml-[10px]">
                    <div className={subBold}>허상</div>
                    <div className={subThin}>이</div>
                    <div className={subBold}>&nbsp;&#8212;&#8212;&#8212;&#8212;&nbsp;&nbsp;현실</div>
                    <div className={subThin}>이 되는</div>
                </div>
                <div className="flex flex-row justify-start w-[270px] mb-[80px] ml-[10px]">
                    <div className={subBold}>사소</div>
                    <div className={subThin}>하고</div>
                    <div className={subBold}>&nbsp;위대한&nbsp;&#8212;&#8212;&#8212;&nbsp;생각</div>
                </div>
            </div>
        </div>

    )
}

export default MobileMainLogo;