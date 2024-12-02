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
        fetch("/api/main/getMainImages", {
            next: {
                revalidate: 3600
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProject(data.RESULT_DATA.project);
                setEvents(data.RESULT_DATA.event);
                setStudy(data.RESULT_DATA.study);
                setMentoring(data.RESULT_DATA.mentoring);
            })
            .catch((err) => {
            });
    },[]);

    return (
        <main className="w-full flex-col items-center justify-between z-0">
            <DesktopHome project={`data:image/avif;base64,${project}`} mentoring={`data:image/avif;base64,${mentoring}`} study={`data:image/avif;base64,${study}`} event={`data:image/avif;base64,${events}`}/>
            <MobileHome  project={`data:image/avif;base64,${project}`} mentoring={`data:image/avif;base64,${mentoring}`} study={`data:image/avif;base64,${study}`} event={`data:image/avif;base64,${events}`}/>
        </main>
    );
}


