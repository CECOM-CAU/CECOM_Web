"use client";
import PageTitle from "@/app/_components/PageTitle";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import {useState} from "react";
import ActivityCard from "@/app/activities/_components/ActivityCard";
import {ActivityListData} from "@/utils/DummyData";
import {Activity, ActivityItem} from "@/utils/Interfaces";
import MainImg from "/Thingsphoto.jpg";

const ActivitiesPage = () => {
    const [all, setAll] = useState<boolean>(true);
    const [project, setProject] = useState<boolean>(false);
    const [mentoring, setMentoring] = useState<boolean>(false);
    const [study, setStudy] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col">
            <PageTitle>Activities</PageTitle>
            <nav className="w-full flex flex-row justify-center ">
                <MenuBTN isClicked={all}><p>ALL</p></MenuBTN>
                <MenuBTN isClicked={project}><p>Project</p></MenuBTN>
                <MenuBTN isClicked={mentoring}><p>Mentoring</p></MenuBTN>
                <MenuBTN isClicked={study}><p>Study</p></MenuBTN>
            </nav>
            <div className="flex flex-col items-center">

                <div
                    className="grid container w-[75%] grid-cols-4 grid-flow-row gap-[10px] justify-items-center">

                    {ActivityListData.data.map(({member, mento, tag, thumbnail, title}: ActivityItem) => (
                        <ActivityCard member={member} mento={mento} tag={tag} thumbnail={"/Activities.jpg"}
                                      title={title}/>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActivitiesPage;