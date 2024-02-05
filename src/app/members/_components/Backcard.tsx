import Projectname from "@/app/members/_components/projectname";

const MemberBackCard = () => {
    return (
        <div className={'pt-[40px] pl-[20px] w-[260px] h-[400px] mr-[20px] mb-[20px] border-0 rounded-lg shadow-xl'}>
            <div className={'flex flex-col'}>
                <img className={'w-[63px] h-[69px]'} src="" alt="BackIcon"/>
                <TextBox></TextBox>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <div className={'mt-[10px] w-[220px] flex flex-row flex-wrap'}>
                    <span className={'text-[14px] font-gmarket'}>안녕하세요내용내용내용애내용냉용내용내용내용내용애용내욘애뇽내용내용내용</span>
                </div>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <span className={'text-[15px] font-gmarket mt-[10px]'}>참여 활동</span>
                <div className={'flex flex-row gap-x-[5px] mt-[5px]'}>
                    <Projectname></Projectname>
                    <Projectname></Projectname>
                    <Projectname></Projectname>
                </div>
            </div>
        </div>
    );
}

const TextBox = () => {
    return (
        <div className={'flex flex-col mt-[8px]'}>
            <div className={'h-[28px] w-[140px] grid grid-cols-5 grid-rows-1 items-end'}>
                <span className={'col-span-3 text-[24px] h-[28px] font-gmarket-m mr-[5px]'}>김이름</span>
                <img className={'ml-[-9px] h-[25px]'} src="/InstagramLogo.png" alt="Instagram"/>
                <img className={'ml-[-9px] mb-[2px] h-[22px]'} src="/GithubLogo.png" alt="Github"/>
            </div>
            <div className={'mt-[8px] flex flex-col'}>
                <div className={'flex flex-row items-center'}>
                    <span className={'text-[15px] font-gmarket-m'}>김이름</span>
                    <div className={'mr-[7px] ml-[7px] border border-left border-s-gray-400 h-[15px]'}></div>
                    <span className={'text-[15px] font-gmarket'}>기획부장</span>
                </div>
                <span className={'font-gmarket text-[15px]'}>24학번 오징어 먹물학과</span>
            </div>
        </div>
    );
}

export default MemberBackCard;