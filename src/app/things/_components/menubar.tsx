import {useState} from "react";
import Link from "next/link";
import NavButton from "@/app/_components/NavBar/NavButton";
import MenuBTN from "@/app/activities/_components/MenuBTN";


const MenuBarDesktop = () => {
    const [All, setAll] = useState(false)
    const [Tools, setTools] = useState(false)
    const [Components, setComponents] = useState(false)
    const [Printers, setPrinters] = useState(false)
    const [Board, setBoard] = useState(false)
    const handleNavBTN = (isAll: boolean, isTools: boolean, isComponents: boolean, isPrinters: boolean, isBoard: boolean) => {
        setAll(isAll);
        setTools(isTools);
        setComponents(isComponents);
        setPrinters(isPrinters);
        setBoard(isBoard);
    }

    return (
        <nav className="w-full gap-x-[40px] flex flex-row justify-between h-50">
            <div onClick={() => handleNavBTN(true,  false, false, false, false)}>
                <MenuBTN isClicked={All}>ALL</MenuBTN>
            </div>
            <div onClick={() => handleNavBTN(false,  true, false, false, false)}>
                <MenuBTN isClicked={Tools}>Tools</MenuBTN>
            </div>
            <div onClick={() => handleNavBTN(false,  false, true, false, false)}>
                <MenuBTN isClicked={Components}>Components</MenuBTN>
            </div>
            <div onClick={() => handleNavBTN(false,  false, false, true, false)}>
                <MenuBTN isClicked={Printers}>3D Printer</MenuBTN>
            </div>
            <div onClick={() => handleNavBTN(false,  false, false, false, true)}>
                <MenuBTN isClicked={Board}>Board & Sensors</MenuBTN>
            </div>
        </nav>
    )
}

const MenuBar = () => {
    return (
        <div  className={'flex flex-row'}>
            <MenuBarDesktop></MenuBarDesktop>
        </div>
    );
}

export default MenuBar;