'use client';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
const Who = () => {
    const [since, setSince] = useState<boolean>(true);
    const [goal, setGoal] = useState<boolean>(false);
    const [member, setMember] = useState<boolean>(false);
    const handleClick = (s: boolean, g: boolean, m: boolean) => {
        setSince(s);
        setGoal(g);
        setMember(m);
    }
    return (
        <div className="flex flex-row w-full items-center justify-center h-[90vh]">
            <div className="flex w-[1105px] flex-row items-center">
                <div className="flex flex-col w-[435px]">
                    <div className="font-gmarket-m text-[100px] h-[110px]">WHO</div>
                    <div className="text-[100px] h-[130px]">WE ARE</div>
                </div>
                <div className="w-[570px] ml-[100px] z-20">
                    <div
                        className="flex flex-row w-full justify-between items-center border-y-[1px] border-[#000000] py-[20px]"
                        onMouseOver={() => handleClick(true, false, false)}
                        onMouseOut={() => handleClick(false, false, false)}>
                        <div className="font-gmarket-m w-[200px] text-[30px] pl-[20px] ">
                            Since 1986
                        </div>
                        {!since ?
                            <div className="flex justify-end duration-200"
                            >
                                <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]" />
                            </div> :
                            <div
                                className="ml-[10px] mr-[20px] my-[20px] duration-500">

                                <div className="font-gmarket-m">1986년 6월,</div>
                                <div>전기공학부의 소모임으로 시작한</div>
                                <div>CECOM은 1987년 중앙동아리로</div>
                                <div className="flex flex-row">승격한 이후
                                    <div className="font-gmarket-m">&nbsp;38년째&nbsp;</div>
                                    중앙대학교의
                                </div>
                                <div className="flex flex-row">
                                    <div className="font-gmarket-m">컴퓨터 하드웨어 중앙동아리&nbsp;</div>
                                    활동하고 있습니다.
                                </div>

                            </div>
                        }
                    </div>
                    <div className="flex flex-row w-full justify-between items-center py-[20px]"
                         onMouseOver={() => handleClick(false, true, false)}
                         onMouseOut={() => handleClick(false, false, false)}>
                        <div className="font-gmarket-m text-[30px] pl-[20px] ">
                            Goal
                        </div>
                        {!goal ?
                            <div className="flex justify-end w-full duration-200">

                                <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]"/>
                            </div> :
                            <div className="ml-[10px] mr-[20px] my-[20px] duration-500">
                                <div className="flex flex-row ">
                                    <div className="font-gmarket-m">‘미친 생각이네. 당장 하자!’</div>
                                    <div>라는 슬로건에 걸맞는 재미있는</div>
                                </div>
                                <div>
                                    소프트웨터 · 하드웨어 프로젝트를 진행하고, 더 많은 사람들과
                                </div>
                                <div>이러한 즐거움을 나누는 것이 우리의 목표입니다.</div>

                            </div>
                        }
                    </div>
                    <div
                        className="flex flex-row w-full justify-between items-center border-y-[1px] border-[#000000] py-[20px]"
                        onMouseOver={() => handleClick(false, false, true)}
                        onMouseOut={() => handleClick(false, false, false)}>
                        <div className="font-gmarket-m text-[30px] pl-[20px]">
                            Members
                        </div>
                        {!member ?
                            <div className="flex justify-end w-full duration-200">
                                <FontAwesomeIcon icon={faPlus} size="2x" className="mr-[20px]"/>
                            </div> :
                            <div className="mr-[20px] my-[20px] ml-[10px] duration-500">
                                <div className="flex flex-row">
                                    <div className="font-gmarket-m">CECOM</div>
                                    <div>은 학과 · 나이 · 학번에 구애받지 않고</div>
                                </div>
                                <div>재미있는 공상을 현실로 만드는 데 관심있는 모든</div>
                                <div>
                                    중앙대학교 학부생과 대학원생이 모여 활동하는
                                </div>
                                <div>
                                    동아리입니다.
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Who;