import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const PhotoCarousel = ({count, data}: { count: number, data: Array<string> }) => {
    const imageList: Array<string> = data;
    const [current, setCurrent] = useState(0);
    const moveStyle: { [key: number]: string } = {
        0: 'translate-x-0',
        1: 'translate-x-[-450px]',
        2: 'translate-x-[-900px]',
        3: 'translate-x-[-1350px]',
        4: 'translate-x-[-1800px]',
        5: 'translate-x-[-2250px]',
    };
    const nextHandler = () => {
        setCurrent(() => {
            if (current === count - 1) {
                return 0;
            } else {
                return current + 1;
            }
        });
    };
    const prevHandler = () => {
        setCurrent(() => {
            if (current === 0) {
                return count - 1;
            } else {
                return current - 1;
            }
        });
    };
    return (
        <div className="relative flex h-[400px] x-[450px] items-center overflow-hidden bg-black-100">
            <div
                className={`flex h-[400px] items-center ${moveStyle[current]} transition`}>
                {imageList.map((image: string, index: number) => (
                    <div key={index} className="w-[450px] h-[400px] bg-cover rounded-[20px]">
                        <img src={`data:image/png;base64,${image}`} className="w-[450px] h-[400px] rounded-[20px]"/>
                    </div>
                ))}
            </div>
            <button
                onClick={nextHandler}
                className="absolute right-[-20px] flex h-[4rem] w-[4rem] items-center justify-center color-primary-lightgray50">
                <FontAwesomeIcon icon={faAngleRight} size='2x' color='#D9D9D9FF'/>
            </button>
            <button
                onClick={prevHandler}
                className="absolute left-[-20px] flex h-[4rem] w-[4rem] items-center justify-center">
                <FontAwesomeIcon icon={faAngleLeft} size='2x' color='#D9D9D9FF'/>
            </button>
            <ul className="absolute bottom-5 flex w-[450px] justify-center gap-4">
                {imageList.map((_, idx) => (
                    <li
                        key={idx}
                        className={`h-[1.2rem] w-[1.2rem] rounded-full bg-white ${
                            idx === current ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </ul>
        </div>
    );
}


export default PhotoCarousel;