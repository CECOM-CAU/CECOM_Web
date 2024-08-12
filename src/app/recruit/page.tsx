'use client';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft, faCircleRight} from "@fortawesome/free-solid-svg-icons";
import ChatBubbleQ from "@/app/recruit/_components/ChatBubbleQ";
import ChatBubbleA from "@/app/recruit/_components/ChatBubbleA";
import React, {useEffect, useState} from "react";
import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import DropDown from "@/app/recruit/_components/DropDown";

const RecruitPage = () => {
    const [ans, setAns] = useState<string[]>(['', '', '', '', '', '', '']);
    const [singleAns, setSingleAns] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [grade, setGrade] = useState<string>('');
    const [college, setCollege] = useState<string>('');
    const [lastNum, setLastNum] = useState<number>(0);
    const handleInput = (e: any) => {
        setSingleAns(e.target.value);
    }

    useEffect(() => {
        if (year != '') {
            const tempList = [...ans];
            tempList[1] = year;
            setAns(tempList);
            handleQuestionNum(1);
        }
    }, [year]);

    useEffect(() => {
        if (grade != '') {
            const tempList = [...ans];
            tempList[3] = grade;
            setAns(tempList);
            handleQuestionNum(3);
        }
    }, [grade]);

    useEffect(() => {
        if (college != '') {
            const tempList = [...ans];
            tempList[4] = college;
            setAns(tempList);
            handleQuestionNum(4);
        }
    }, [college]);
    const handleAns = () => {
        const tempList = [...ans];
        tempList[questionNum] = singleAns;
        setAns(tempList);
        setSingleAns('');
        handleQuestionNum();
    }
    const handleQuestionNum = (num?: number) => {
        if (num && num == lastNum) {
            setQuestionNum(questionNum + 1);
            setLastNum(questionNum + 1);
        } else if (!num) {
            if (questionNum < lastNum) {
                setQuestionNum(lastNum);
            } else if (questionNum == lastNum && lastNum < 7) {
                setQuestionNum(questionNum + 1);
                setLastNum(questionNum + 1);
            }
        }
    }

    return (
        <>
            <div className={'hidden lg:block'}>
                <PageTitle>Recruit</PageTitle>
            </div>
            <div className={'block lg:hidden'}>
                <MobilePageTitle>Recruit</MobilePageTitle>
            </div>
            <div className='flex flex-col w-full lg:items-center lg:px-[300px] px-[10px]'>

                <div className="flex flex-col lg:w-[500px]">
                    <ChatBubbleQ>이름이 무엇인가요?</ChatBubbleQ>
                    {ans[0] ? (<><ChatBubbleA nowNum={questionNum} QuestionNum={0}
                                              setNumber={setQuestionNum}>{ans[0]}</ChatBubbleA>
                        <ChatBubbleQ>나이는 어떻게 되나요?</ChatBubbleQ>
                        <ChatBubbleA nowNum={questionNum}>
                            <div className="w-full flex flex-row">
                                <DropDown setValue={setYear} value={year}
                                          options={[{label: '출생년도', value: '0'}, {label: '2000', value: '2000'}, {
                                              label: '2001',
                                              value: '2001'
                                          }, {label: '2002', value: '2002'},]}/>년

                            </div>
                        </ChatBubbleA></>) : <></>}
                    {ans[1] && <ChatBubbleQ>학번은요?</ChatBubbleQ>}
                    {ans[2] ? <> <ChatBubbleA nowNum={questionNum} QuestionNum={2}
                                              setNumber={setQuestionNum}>{ans[2]}</ChatBubbleA>
                        <ChatBubbleQ>학년은요?</ChatBubbleQ>
                        <ChatBubbleA nowNum={questionNum}>
                            <div className="w-full flex flex-row">
                                <DropDown setValue={setGrade} value={grade}
                                          options={[{label: '학년', value: '0'}, {label: '1학년(1차, 2차)', value: '1'},
                                              {label: '2학년(3차, 4차)', value: '2'}, {label: '3학년(5차, 6차)', value: '3'},
                                              {label: '4학년(7차, 8차)', value: '4'}, {label: '9차 이상', value: '5'}]}/>

                            </div>
                        </ChatBubbleA>
                    </> : <></>
                    }
                    {ans[3] ? <> <ChatBubbleQ>단과대는 무엇인가요?</ChatBubbleQ>
                        <ChatBubbleA nowNum={questionNum}>
                            <div className="w-full flex flex-row">
                                <DropDown setValue={setCollege} value={college}
                                          options={[{label: '소속 대학', value: '0'}, {label: '소프트웨어대학', value: '1'},
                                              {label: 'ICT 창의 공과대학', value: '2'}, {label: '자연과학대학', value: '3'},
                                              {label: '경영경제대학', value: '4'}, {label: '사회과학대학', value: '5'}]}/>

                            </div>
                        </ChatBubbleA>

                    </> : <></>}
                    {ans[4] && <ChatBubbleQ>학과는?</ChatBubbleQ>}
                    {ans[5] ? <> <ChatBubbleA nowNum={questionNum} QuestionNum={5}
                                              setNumber={setQuestionNum}>{ans[5]}</ChatBubbleA>
                        <ChatBubbleQ>전화번호는요?</ChatBubbleQ>
                    </> : <></>}
                    {ans[6] && <ChatBubbleA nowNum={questionNum} QuestionNum={6}
                                            setNumber={setQuestionNum}>{ans[6]}</ChatBubbleA>}

                    <div className="flex flex-row">
                        {[0, 2, 5, 6].includes(questionNum) ?
                            <div
                                className='flex justify-center items-end w-full border-[2px] rounded-[20px] mt-[10px]
                                p-[10px]'>
                                <textarea
                                    className="w-full h-[30px] bg-[#ffffff] text-[#000000] focus:outline-none resize-none "
                                    placeholder="답장 보내기..." value={singleAns}
                                    onChange={handleInput}></textarea>
                                <button onClick={handleAns}><img src={'SendBTN.png'}/></button>

                            </div> : <></>
                        }
                        {questionNum == 7 &&
                            <div className="w-full flex justify-center">
                                <FontAwesomeIcon icon={faCircleLeft}
                                                 style={{color: '#d9d9d9', fontSize: '30px', marginRight: '5px'}}/>
                                <FontAwesomeIcon icon={faCircleRight}
                                                 style={{color: '#0648A6', fontSize: '30px', marginLeft: '5px'}}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default RecruitPage;