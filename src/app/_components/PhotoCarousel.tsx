import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {NoticeDetailPhoto} from "@/utils/Interfaces";

const PhotoCarousel = ({count, data}: NoticeDetailPhoto) => {
    const imageList: Array<string> = data;
    const [current, setCurrent] = useState(0);
    const moveStyle: { [key: number]: string } = {
        0: 'translate-x-0',
        1: 'translate-x-[-350px] lg:translate-x-[-700px]',
        2: 'translate-x-[-700px] lg:translate-x-[-1400px]',
        3: 'translate-x-[-1050px] lg:translate-x-[-2100px]',
        4: 'translate-x-[-1400px] lg:translate-x-[-2800px]',
        5: 'translate-x-[-1750px] lg:translate-x-[-3500px]',
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
        <div
            className="relative flex lg:h-[700px] lg:x-[700px] h-[300px] x-[350px] items-center overflow-hidden bg-black-100">
            <div
                className={`flex lg:h-[700px] h-[300px] items-center ${moveStyle[current]} transition`}>
                {imageList.map((image: string, index: number) => (
                    <div key={index} className="lg:w-[700px] lg:h-[700px] w-[350px] h-[300px] bg-cover rounded-[20px]">
                        <img src={`data:image/png;base64,${image}`}
                             className="lg:w-[700px] lg:h-[700px] w-[350px] h-[300px] rounded-[20px] object-cover"/>
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
            <ul className="absolute bottom-5 flex w-full lg:w-[450px] justify-center gap-4">
                {imageList.map((_, idx) => (
                    <li
                        key={idx}
                        className={`h-[0.8rem] w-[0.8rem] rounded-full bg-white ${
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