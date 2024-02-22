'use client';
import {DesktopHome} from "@/app/_components/mainPage/desktop/DesktopHome";
import {MobileHome} from "@/app/_components/mainPage/mobile/MobileHome";
import {useEffect, useState} from "react";
import axios from "axios";
export default function Home() {
    const [project, setProject] = useState<string>('');
    const [mentoring, setMentoring] = useState<string>('');
    const [study, setStudy] = useState<string>('');
    const [events, setEvents] = useState<string>('');

    useEffect(() => {
        axios.get("https://cecom.dev/api/main/getMainImages")
            .then((res) => {
                setProject(res.data.RESULT_DATA.project);
                setEvents(res.data.RESULT_DATA.event);
                setStudy(res.data.RESULT_DATA.study);
                setMentoring(res.data.RESULT_DATA.mentoring);
            }).catch((err) => {
        });
    },[]);

    return (
        <main className="w-full flex-col items-center justify-between z-0">
            <DesktopHome project={project} mentoring={mentoring} study={study} event={events}/>
            <MobileHome project={project} mentoring={mentoring} study={study} event={events}/>
        </main>
    );
}


