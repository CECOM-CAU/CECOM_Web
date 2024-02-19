"use client";
import PageTitle from "@/app/_components/PageTitle";
import {useEffect, useState} from "react";
import {ActivityListData} from "@/utils/DummyData";
import {Activity, ActivityItem} from "@/utils/Interfaces";
import MenuBTN from "@/app/activities/_components/MenuBTN";
import ActivityCard from "@/app/activities/_components/ActivityCard";
import axios from "axios";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";


const ActivitiesPage = () => {
    const [all, setAll] = useState<boolean>(true);
    const [project, setProject] = useState<boolean>(false);
    const [mentoring, setMentoring] = useState<boolean>(false);
    const [study, setStudy] = useState<boolean>(false);
    const [activityList, setActivityList] = useState<ActivityItem[]>([]);
    const [menuList, setMenuList] = useState<ActivityItem[]>([]);
    const [projectList, setProjectList] = useState<ActivityItem[]>([]);
    const [mentoringList, setMentoringList] = useState<ActivityItem[]>([]);
    const [studyList, setStudyList] = useState<ActivityItem[]>([]);
    const MenuData = (isAll: boolean, isProject: boolean, isMentoring: boolean, isStudy: boolean) => {
        if (isAll) {
            setMenuList(activityList);
        } else if (isProject) {
            setMenuList(projectList);
        } else if (isMentoring) {
            setMenuList(mentoringList);
        } else if (isStudy) {
            setMenuList(studyList);
        }
    }
    const handleMenuBtn = (isAll: boolean, isProject: boolean, isMentoring: boolean, isStudy: boolean) => {
        setAll(isAll);
        setProject(isProject);
        setMentoring(isMentoring);
        setStudy(isStudy);
        MenuData(isAll, isProject, isMentoring, isStudy);
    };

    useEffect(() => {
        axios.get('https://cecom.dev/api/activities/getActivitiesList')
            .then((res) => {
                setActivityList(res.data.RESULT_DATA.data);
                setMenuList(res.data.RESULT_DATA.data);
                makeArray(res.data.RESULT_DATA.data);
            }).catch((err) => {
            console.log(err);
        })
    }, []);

    const makeArray = (data: ActivityItem[]) => {
        if ((projectList.length === 0) &&
            (mentoringList.length === 0) && (studyList.length === 0)) {

            console.log(projectList);
            data.forEach((item: ActivityItem) => {
                if ('Project' === item.tag[0]) {
                    projectList.push(item);
                }
                if ('Mentoring' === item.tag[0]) {
                    mentoringList.push(item);
                }
                if ('Study' === item.tag[0]) {
                    studyList.push(item);
                }
            });
            console.log(projectList);
        }
    };
    return (
        <div className="w-full flex flex-col">
            <div className="hidden lg:block">
            <PageTitle>Activities</PageTitle></div>
            <MobilePageTitle>Activities</MobilePageTitle>
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
                    className="grid container lg:max-w-[1300px] grid-cols-1 lg:grid-cols-4 grid-flow-row gap-[10px] justify-items-center">
                    {
                        menuList.map(({
                                          content,
                                          member,
                                          mentor,
                                          tag,
                                          thumbnail,
                                          title,
                                          id
                                      }: ActivityItem) => (
                            <ActivityCard content={content} member={member} mentor={mentor} tag={tag}
                                          thumbnail={`data:image/png;base64,${thumbnail}`} title={title} id={id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ActivitiesPage;