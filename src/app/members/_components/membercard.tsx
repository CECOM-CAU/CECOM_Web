
const MemberFrontCard = () => {
    return(
        <div className={'w-[260px] h-[400px] px-[12px] pt-[12px] ' +
            'shadow-xl mr-[20px] mb-[20px] border-0 rounded-lg flex flex-col justify-start flex-grow-0 item-center'}>
            <img className="w-[260px] h-[260px] flex-grow-0" src="" alt="Icon"/>
            <div className={'w-[260px] flex flex-row justify-center'}>
                <TextCard></TextCard>
            </div>
        </div>
    );
}


const TextCard = () => {
    return(
        <div className={'w-[260px] flex flex-col mt-[15px] mb-[15px]'}>
            <div className={'flex flex-row'}>
                <span className={'h-[18px] font-gmarket-b'}>김이름</span>
                <div className={'mr-[14px] ml-[14px] border border-left border-s-black h-[18px]'}></div>
                <span className={'h-[18px] font-gmarket'}>기획부장</span>
            </div>
            <span className={'mt-[14px] font-gmarket h-[16px]'}>오징어 먹물학과</span>
        </div>
    );
}

export default MemberFrontCard;