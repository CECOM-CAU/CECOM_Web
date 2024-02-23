'use client'
import PageTitle from "@/app/_components/PageTitle";
import React, {useEffect, useState} from "react";
import {ThingItem} from "@/utils/Interfaces";
import axios from "axios";
import DeskSmallBox from "@/app/things/_components/DesktopSmallBox";
import MobSmallbox from "@/app/things/_components/MobSmallBox";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import ThingMenu from "@/app/things/_components/ThingMenu";
import {ThingData} from "@/utils/DummyData";

const ThingsPage = () => {
    const [All, setAll] = useState<boolean>(true);
    const [Sensors, setSensor] = useState<boolean>(false);
    const [Printers, setPrinters] = useState<boolean>(false);
    const [Boards, setBoard] = useState<boolean>(false);
    const [thingsList, setThingsList] = useState<ThingItem[]>([]);
    const [menuList, setMenuList] = useState<ThingItem[]>([]);
    const [printerList, setPrinterList] = useState<ThingItem[]>([]);
    const [boardList, setBoardList] = useState<ThingItem[]>([]);
    const [sensorList, setSensorList] = useState<ThingItem[]>([]);
    const MenuData = (isAll: boolean, isSensors:boolean, isPrinters: boolean, isBoards: boolean) => {
        if (isAll) {
            setMenuList(thingsList);
        } else if (isPrinters) {
            setMenuList(printerList);
        } else if (isBoards) {
            setMenuList(boardList);
        } else if (isSensors) {
            setMenuList(sensorList);
        }
    }
    const handleNavBTN = (isAll: boolean, isSensors:boolean, isPrinters: boolean, isBoards: boolean) => {
        setAll(isAll);
        setPrinters(isPrinters);
        setBoard(isBoards);
        setSensor(isSensors);
        MenuData(isAll,isSensors,isPrinters,isBoards);
    }

    useEffect(() => {
        axios.get('https://cecom.dev/api/things/getThingsList')
            .then((res) => {
                setThingsList(res.data.RESULT_DATA.data);
                setMenuList(res.data.RESULT_DATA.data);
                MakeArray(res.data.RESULT_DATA.data);
                console.log(res);
            }).catch((err) => {
                console.log(err);
        })
    },[]);

    const MakeArray = (data:ThingItem[]) => {
        if ((printerList.length === 0) && (sensorList.length === 0) && (boardList.length === 0)) {

            console.log(thingsList);
            data.forEach((item: ThingItem) => {
                if ('Printer' === item.tag) {
                    printerList.push(item);
                }
                if ('Board' === item.tag) {
                    boardList.push(item);
                }
                if ('Sensor' === item.tag) {
                    sensorList.push(item);
                }
            });
            console.log(thingsList);
        }
    }
    return (
        <div className={'w-full'}>
            <div className={'hidden lg:block'}>
                <PageTitle>Things</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Things</MobilePageTitle>
            </div>
            <div className={'w-full flex flex-col items-center'}>
                <div className={'flex flex-row mt-[10px] w-full justify-center'}>
                    <nav className="w-full flex flex-row justify-center">
                        <div onClick={() => handleNavBTN(true,  false, false, false)}>
                            <ThingMenu isClicked={All}>ALL</ThingMenu>
                        </div>
                        <div onClick={() => handleNavBTN(false,  false, true, false)}>
                            <ThingMenu isClicked={Printers}>3D Printers</ThingMenu>
                        </div>
                        <div onClick={() => handleNavBTN(false,  false, false, true)}>
                            <ThingMenu isClicked={Boards}>Boards</ThingMenu>
                        </div>
                        <div onClick={() => handleNavBTN(false,  true, false, false)}>
                            <ThingMenu isClicked={Sensors}>Sensors</ThingMenu>
                        </div>
                    </nav>
                </div>
                <div className={'hidden lg:block'}>
                    <div className={'flex flex-row justify-center'}>
                        <div className={'grid grid-cols-3 grid-flow-row gap-[30px] w-[1250px] justify-items-center mt-[20px]'}>
                            {menuList.map(({description, id, name, photo, tag}:ThingItem)=>(
                                <DeskSmallBox description={description} id={id} name={name} photo={photo} tag={tag}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={'block lg:hidden'}>
                    <div className={'flex flex-row justify-center'}>
                        <div className={'grid grid-cols-2 grid-flow-row gap-[10px] w-[326px] mt-[20px]'}>
                            {menuList.map(({description, id, name, photo, tag}:ThingItem)=>(
                                <MobSmallbox description={description} id={id} name={name} photo={photo} tag={tag}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ThingsPage;