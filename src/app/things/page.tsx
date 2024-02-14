'use client'
import PageTitle from "@/app/_components/PageTitle";
import SmallBox from "@/app/things/_components/page";
import React, {useEffect, useState} from "react";
import MenuBar from "@/app/things/_components/menubar";
import {ThingData} from "@/utils/DummyData";
import {ThingItem} from "@/utils/Interfaces";
import axios from "axios";


const ThingsPage = () => {
    const [thingData, setThingData] = useState(ThingData);

    useEffect(() => {
        axios.get('https://cecom.dev/api/things/getThingsList')
            .then((res) => {
                setThingData(res.data.RESULT_DATA);
                console.log(res.data.RESULT_DATA);
            }).catch((err) => {
                console.log(err);
        })
    },[]);
    return (
        <div className={'w-full'}>
                <PageTitle>Things</PageTitle>
            <div>
                <div className={'flex flex-row mt-[10px] justify-center'}>
                    <MenuBar/>
                </div>
                    <div className={'flex flex-row items-center justify-center'}>
                        <div className={'grid w-full container grid-cols-3 grid-flow-row gap-[30px] justify-items-center mt-[20px]'}>
                            {thingData.data.map(({description, id, name, photo, tag}:ThingItem)=>(
                                <SmallBox description={description} id={id} name={name} photo={photo} tag={tag}/>
                            ))}
                        </div>
                    </div>
            </div>
        </div>

    );
}

export default ThingsPage;