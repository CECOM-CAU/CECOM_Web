import Projectname from "@/app/members/_components/projectname";
import {AdminItem} from "@/utils/Interfaces";

const MemberBackCard = ({member,role}:AdminItem) => {
    return (
        <div className={'pt-[40px] pl-[20px] w-[260px] h-[400px] mr-[20px] mb-[20px] border-0 rounded-lg shadow-xl'}>
            <div className={'flex flex-col'}>
                <img className={'w-[63px] h-[69px]'} src="" alt="BackIcon"/>
                <div className={'flex flex-col mt-[8px]'}>
                    <div className={'h-[28px] w-[140px] grid grid-cols-5 grid-rows-1 items-end'}>
                        <span className={'col-span-3 text-[24px] h-[28px] font-gmarket-m mr-[5px]'}>{member.name}</span>
                        <img className={'ml-[-9px] h-[25px]'} src={member.instagram} alt="Instagram"/>
                        <img className={'ml-[-9px] mb-[2px] h-[22px]'} src={member.github} alt="Github"/>
                    </div>
                    <div className={'mt-[8px] flex flex-col'}>
                        <div className={'flex flex-row items-center'}>
                            <span className={'text-[15px] font-gmarket-m'}>{member.name}</span>
                            <div className={'mr-[7px] ml-[7px] border border-left border-s-gray-400 h-[15px]'}></div>
                            <span className={'text-[15px] font-gmarket'}>{role}</span>
                        </div>
                        <span className={'font-gmarket text-[15px]'}>{member.department}</span>
                    </div>
                </div>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <div className={'mt-[10px] w-[220px] flex flex-row flex-wrap'}>
                    <span className={'text-[14px] font-gmarket'}>{member.comment}</span>
                </div>
                <hr className={'mt-[10px] w-[220px] border-black'}/>
                <span className={'text-[15px] font-gmarket mt-[10px]'}>참여 활동</span>
                <div className={'flex flex-row gap-x-[5px] mt-[5px]'}>
                    <Projectname member={member} role={role}/>
                    <Projectname member={member} role={role}/>
                    <Projectname member={member} role={role}/>
                </div>
            </div>
        </div>
    );
}


export default MemberBackCard;