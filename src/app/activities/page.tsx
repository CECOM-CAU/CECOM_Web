"use client";
import PageTitle from "@/app/_components/PageTitle";
import {useState} from "react";
import {ActivityListData} from "@/utils/DummyData";
import {ActivityItem} from "@/utils/Interfaces";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import ActivityCardFront from "@/app/activities/_components/ActivityCardFront";
import ActivityCardBack from "@/app/activities/_components/ActivityCardBack";


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
                            <div className="group [perspective:1000px]">
                                <div
                                    className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div className="">
                                        <ActivityCardFront content={content} id={id} member={member} mentor={mentor} tag={tag}
                                                           thumbnail={"/Activities.jpg"}
                                                           title={title}/>
                                    </div>

                                    <div
                                        className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <ActivityCardBack title={title} mentor={mentor} member={member}
                                                          content={"내용내내용내용내용내용내용내용내"}/>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ActivitiesPage;