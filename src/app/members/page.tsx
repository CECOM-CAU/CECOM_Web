'use client'
import PageTitle from "@/app/_components/PageTitle";
import {Admin, AdminItem} from "@/utils/Interfaces";
import {useEffect, useState} from "react";
import axios from "axios";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import DeskMemberCard from "@/app/members/_components/DeskFlip";
import MobMemberCard from "@/app/members/_components/MobFlip";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";

export const dynamic = "force-dynamic";

const MembersPage = () => {
    const [adminList, setAdminList] = useState<Admin[]>([]);
    const [current,setCurrent] = useState(0);

    useEffect(() => {
        axios.get('/api/members/getMembersList')
            .then((res) => {
                setAdminList(res.data.RESULT_DATA);
                setCurrent(res.data.RESULT_DATA[0].year)
            }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div className={'w-full flex flex-col'}>
            <div className={'hidden lg:block'}>
                <PageTitle>Members</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Members</MobilePageTitle>
            </div>
            <div className={'w-full flex flex-col items-center'}>
                <div className={'hidden lg:block'}>
                    <NavDesktop adminList={adminList} current={current} HandleCurrent={setCurrent}/>
                </div>
                <div className={'block lg:hidden'}>
                    <select value={current} onChange={(item)=>setCurrent(Number(item.target.value))}
                            className={'ml-[-10px] pl-[3px] mb-[15px] text-[16px] font-gmarket-m ' +
                                'w-[75px] h-[33px] bg-gray-200 rounded-xl'}>
                        {adminList.map(({list,year}:Admin)=>(
                                <option value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className={'hidden lg:block'}>
                    <div className={'flex flex-row gap-[20px] justify-center w-[1200px] flex-wrap'}>
                        {
                        adminList.length > 0 && current != 0 ?
                            adminList[adminList[0]['year']-current].list.map(({member,role}:AdminItem)=>(
                                <DeskMemberCard member={member} role={role}/>
                            ))
                            :<></>
                    }
                    </div>
                </div>
                <div className={'block lg:hidden'}>
                    <div className={'flex flex-col gap-[20px] justify-center w-full'}>
                        {
                            adminList.length > 0 && current != 0 ?
                                adminList[adminList[0]['year']-current].list.map(({member,role}:AdminItem)=>(
                                    <MobMemberCard member={member} role={role}/>
                                ))
                                :<></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

interface Props{
    adminList: Admin[];
    current: number;
    HandleCurrent: (num:number)=>void;
}
const NavDesktop=({adminList, current,HandleCurrent}:Props)=>{
    return(
        <nav className="w-full mb-[15px] gap-x-[40px] flex flex-row justify-center h-50">
            {adminList.map(({list,year}:Admin)=>(
                <div onClick={() => HandleCurrent(year)}>
                    <MenuBTN isClicked={year===current}>{year}</MenuBTN>
                </div>
            ))}
        </nav>
    );
}


export default MembersPage;