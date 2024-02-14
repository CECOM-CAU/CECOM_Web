"use client";
import PageTitle from "@/app/_components/PageTitle";
import {useState} from "react";
import {ActivityListData} from "@/utils/DummyData";
import {ActivityItem} from "@/utils/Interfaces";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import ActivityCard from "@/app/activities/_components/ActivityCard";


const ActivitiesPage = () => {
    const [all, setAll] = useState<boolean>(true);
    const [project, setProject] = useState<boolean>(false);
    const [mentoring, setMentoring] = useState<boolean>(false);
    const [study, setStudy] = useState<boolean>(false);
    const handleMenuBtn = (isAll: boolean, isProject: boolean, isMentoring: boolean, isStudy: boolean) => {
        setAll(isAll);
        setProject(isProject);
        setMentoring(isMentoring);
        setStudy(isStudy);

    }
    return (
        <div className="w-full flex flex-col">
            <PageTitle>Activities</PageTitle>
            <nav className="w-full flex flex-row justify-center ">
                <div onClick={() => handleMenuBtn(true, false, false, false)}>
                    <MenuBTN isClicked={all}>ALL</MenuBTN>
                </div>
                <div onClick={() => handleMenuBtn(false, true, false, false)}>
                    <MenuBTN isClicked={project}>Project</MenuBTN>
                </div>
                <div onClick={() => handleMenuBtn(false, false, true, false)}>
                    <MenuBTN isClicked={mentoring}>Mentoring</MenuBTN>
                </div>
                <div onClick={() => handleMenuBtn(false, false, false, true)}>
                    <MenuBTN isClicked={study}>Study</MenuBTN>
                </div>
            </nav>
            <div className="flex flex-col items-center ">
                <div
                    className="grid container max-w-[1300px] grid-cols-4 grid-flow-row gap-[10px] justify-items-center">
                    {
                        ActivityListData.data.map(({content, member, mentor, tag, thumbnail, title, id}: ActivityItem) => (
                            <ActivityCard content={content} member={member} mentor={mentor} tag={tag} thumbnail={thumbnail} title={title} id={id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ActivitiesPage;