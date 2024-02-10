import {useState} from "react";
import Link from "next/link";
import NavButton from "@/app/_components/NavBar/NavButton";


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
        <nav className="w-full">
            <div className="flex flex-row justify-between h-50 flex justify-center">
                <NavButton link="/All" isClick={All}>
                    <div onClick={() => handleNavBTN(true,  false, false, false, false)}>All</div>
                </NavButton>
                <NavButton link="/Tools" isClick={Tools}>
                    <div onClick={() => handleNavBTN(false,  true, false, false, false)}>Tools</div>
                </NavButton>
                <NavButton link="/Components" isClick={Components}>
                    <div onClick={() => handleNavBTN(false,  false, true, false, false)}>Components</div>
                </NavButton>
                <NavButton link="/Printers" isClick={Printers}>
                    <div onClick={() => handleNavBTN(false,  false, false, true, false)}>3D Printers</div>
                </NavButton>
                <NavButton link="/Board" isClick={Board}>
                    <div onClick={() => handleNavBTN(false,  false, false, false, true)}>Board & Sensors</div>
                </NavButton>

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