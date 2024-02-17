'use client';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

const MobileWho = () => {
    const [since, setSince] = useState<boolean>(true);
    const [goal, setGoal] = useState<boolean>(false);
    const [member, setMember] = useState<boolean>(false);
    const handleClick = (s: boolean, g: boolean, m: boolean) => {
        setSince(s);
        setGoal(g);
        setMember(m);
    }
    return (
        <div className="flex flex-row w-full items-center justify-center min-h-[100vh]">
            <div className="flex w-[340px] flex-col items-start">
                <div className="flex flex-col w-[280px]">
                    <div className="font-gmarket-m text-[60px] h-[60px]">WHO</div>
                    <div className="text-[60px] h-[80px] mb-[20px]">WE ARE</div>
                </div>
                <div className="w-[340px] z-20">
                    <div
                        className="flex flex-col w-full justify-between items-center border-y-[1px] border-[#000000] py-[15px]">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex justify-start font-gmarket-m w-[200px] text-[30px] pl-[20px] ">
                                Since 1986
                            </div>
                            {!since ?
                                <div className="flex justify-end duration-200"
                                     onClick={() => handleClick(true, false, false)}>
                                    <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]"/>
                                </div>
                                :
                                <div className="flex justify-end duration-200"
                                     onClick={() => handleClick(false, false, false)}>
                                    <FontAwesomeIcon icon={faMinus} size="2x" className="mr-[20px]"/>
                                </div>
                            }
                        </div>
                        {!since ?
                            <div className="flex"></div> :
                            <div
                                className="flex flex-col items-start w-full pl-[20px] my-[20px] duration-500">

                                <div className="font-gmarket-m">1986년 6월,</div>
                                <div>&nbsp;전기공학부의 소모임으로 시작한</div>

                                <div className="flex flex-row">
                                    <div className="font-gmarket-m">CECOM</div>
                                    <div>은 1987년 중앙동아리로</div>
                                </div>
                                <div className="flex flex-row">
                                    <div>승격한 이후</div>
                                    <div className="font-gmarket-m">&nbsp;38년째&nbsp;</div>
                                    중앙대학교의

                                </div>
                                <div className="flex flex-row">
                                    <div className="font-gmarket-m">컴퓨터 하드웨어 중앙동아리</div>
                                    <div>로</div>
                                </div>
                                <div>활동하고 있습니다.</div>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col w-full justify-between items-center py-[15px]"
                    >
                        <div className="flex flex-row w-full justify-between">
                            <div className="font-gmarket-m text-[30px] pl-[20px] ">
                                Goal
                            </div>
                            {!goal ?
                                <div className="flex justify-end duration-200"
                                     onClick={() => handleClick(false, true, false)}>
                                    <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]"/>
                                </div>
                                :
                                <div className="flex justify-end duration-200"
                                     onClick={() => handleClick(false, false, false)}>
                                    <FontAwesomeIcon icon={faMinus} size="2x" className="mr-[20px]"/>
                                </div>
                            }
                        </div>
                        {!goal ?
                            <div className="flex"></div> :
                            <div className="flex flex-col items-start w-full pl-[20px] my-[20px] duration-500">
                                <div className="flex flex-row ">
                                    <div className="font-gmarket-m">‘미친 생각이네. 당장 하자!’</div>
                                    <div>라는 슬로건에</div>
                                </div>
                                <div>걸맞는 재미있는 소프트웨어 · 하드웨어</div>
                                <div>프로젝트를 진행하고,</div>
                                <div>더 많은 사람들과 이러한 즐거움을</div>
                                <div>나누는 것이 우리의 목표입니다.</div>

                            </div>
                        }
                    </div>
                    <div
                        className="flex flex-col w-full justify-between items-center border-y-[1px] border-[#000000] py-[15px]">
                        <div className="flex flex-row w-full justify-between">
                            <div className="font-gmarket-m text-[30px] pl-[20px]">
                                Members
                            </div>
                            {!member ?
                                <div className="flex justify-end w-full duration-200"
                                     onClick={() => handleClick(false, false, true)}>
                                    <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]"/>
                                </div>
                                :
                                <div className="flex justify-end duration-200"
                                     onClick={() => handleClick(false, false, false)}>
                                    <FontAwesomeIcon icon={faMinus} size="2x" className="mr-[20px]"/>
                                </div>
                            }
                        </div>
                        {!member ?
                            <div className="flex"></div>
                            :
                            <div className="flex flex-col items-start w-full pl-[20px] my-[20px] duration-500">
                                <div className="flex flex-row">
                                    <div className="font-gmarket-m">CECOM</div>
                                    <div>은 학과 · 나이 · 학번에</div>
                                </div>
                                <div>구애받지 않고 재미있는 공상을</div>
                                <div>현실로 만드는 데 관심있는</div>
                                <div>모든 중앙대학교 학부생과 대학원생이 모여</div>
                                <div>활동하는 동아리입니다.</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
export default MobileWho;