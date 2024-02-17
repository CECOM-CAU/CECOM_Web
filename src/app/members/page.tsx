'use client'
import PageTitle from "@/app/_components/PageTitle";
import MemberCard from "@/app/members/_components/DeskFlip";
import {AdminList} from "@/utils/DummyData";
import {Admin, AdminItem} from "@/utils/Interfaces";
import {useEffect, useState} from "react";
import axios from "axios";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import DeskMemberCard from "@/app/members/_components/DeskFlip";
import MobMemberCard from "@/app/members/_components/MobFlip";

const MembersPage = () => {
    const [adminList, setAdminList] = useState<Admin[]>(AdminList);
    const [current,setCurrent] = useState(AdminList[0]['year']);

    useEffect(() => {
        axios.get('/api/members/getMembersList')
            .then((res) => {
                setAdminList(res.data.RESULT_DATA);
                console.log(res.data.RESULT_DATA);
            }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div className={'w-full flex flex-col'}>
            <div className={'w-full'}>
                <PageTitle>Members</PageTitle>
            </div>
            <div className={'w-full flex flex-col items-center'}>
                <NavDesktop current={current} HandleCurrent={setCurrent}/>
                <div className={'hidden lg:block'}>
                    <div className={'flex flex-row justify-center w-[1200px] flex-wrap'}>
                        {adminList.map(({list,year}:Admin)=>(
                            list.map(({member,role}:AdminItem)=>(
                                <DeskMemberCard member={member} role={role}/>
                            ))
                        ))}
                    </div>
                </div>
                <div className={'block lg:hidden'}>
                    <div className={'flex flex-col justify-center w-full'}>
                        {adminList.map(({list,year}:Admin)=>(
                            list.map(({member,role}:AdminItem)=>(
                                <MobMemberCard member={member} role={role}/>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface Props{
    current: number;
    HandleCurrent: (num:number)=>void;
}
const NavDesktop=({current,HandleCurrent}:Props)=>{
    return(
        <nav className="w-full gap-x-[40px] flex flex-row justify-center h-50">
            {AdminList.map(({list,year}:Admin)=>(
                <div onClick={() => HandleCurrent(year)}>
                    <MenuBTN isClicked={year===current}>{year}</MenuBTN>
                </div>
            ))}
        </nav>
    )
}

export default MembersPage;