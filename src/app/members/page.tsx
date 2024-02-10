import PageTitle from "@/app/_components/PageTitle";
import MemberCard from "@/app/members/_components/flip";
import {AdminList} from "@/utils/DummyData";
import {Admin, AdminItem} from "@/utils/Interfaces";
import Flip from "@/app/members/_components/flip";

const MembersPage = () => {
    return (
        <div className={'w-full flex flex-col'}>
            <div className={'w-full'}>
                <PageTitle>Members</PageTitle>
            </div>
            <div className={'w-full flex flex-col items-center'}>
                <span className={'mb-[30px] mt-[20px] text-[26px] font-gmarket-m'}>운영진</span>
                <span className={'flex flex-row justify-center w-[1200px] flex-wrap'}>
                    {AdminList.map(({list,year}:Admin)=>(
                        list.map(({member,role}:AdminItem)=>(
                            <MemberCard member={member} role={role}/>
                        ))
                    ))}
                </span>
            </div>
        </div>
    );
}

export default MembersPage;