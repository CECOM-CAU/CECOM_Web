'use client';

import ChatBubbleQ from "@/app/recruit/_components/ChatBubbleQ";
import ChatBubbleA from "@/app/recruit/_components/ChatBubbleA";
import React, {useEffect, useState} from "react";
import PageTitle from "@/app/_components/PageTitle";
import {MobilePageTitle} from "@/app/_components/MobilePageTitle";
import DropDown from "@/app/recruit/_components/DropDown";
import LongQuestion from "@/app/recruit/_components/LongQuestion";
import LongAnswer from "@/app/recruit/_components/LongAnswer";
import axios from "axios";
import SubmitSuccess from "@/app/recruit/_components/SubmitSuccess";
import SubmitFailModal from "@/app/recruit/_components/SubmitFailModal";
import {RecruitSubmissionItem} from "@/utils/Interfaces";
import PersonalInfoConsent from "@/app/recruit/_components/PersonalInfoConsent";

const RecruitPage = () => {
    const [ans, setAns] = useState<string[]>(['', '', '', '', '', '', '']);
    const [singleAns, setSingleAns] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [questionNum, setQuestionNum] = useState<number>(0);
    const [grade, setGrade] = useState<string>('');
    const [college, setCollege] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [lastNum, setLastNum] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [longAnswer, setLongAnswer] = useState<string[]>([]);
    const [questionList, setQuestionList] = useState<string[]>([]);
    const [submitSuccess, setSubmitSuccess] = useState<string>('');
    const [personalInfoConsentChecked, setPersonalInfoConsentChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const collegeData = [
        {label: '소속 대학', value: '소속 대학'},
        {label: '공과대학', value: '공과대학'},
        {label: '창의ICT공과대학', value: '창의ICT공과대학'},
        {label: '소프트웨어대학', value: '소프트웨어대학'},
        {label: '예술대학', value: '예술대학'},
        {label: '경영경제대학', value: '경영경제대학'},
        {label: '자연과학대학', value: '자연과학대학'},
        {label: '인문대학', value: '인문대학'},
        {label: '사회과학대학', value: '사회과학대학'},
        {label: '사범대학', value: '사범대학'},
        {label: '생명공학대학', value: '생명공학대학'},
        {label: '의과대학', value: '의과대학'},
        {label: '약학대학', value: '약학대학'},
        {label: '적십자간호대학', value: '적십자간호대학'},
        {label: '예술공학대학', value: '예술공학대학'},
        {label: '체육대학', value: '체육대학'}
    ];
    const gradeData = [{label: '학년', value: '학년'},
        {label: '1학년(1차, 2차)', value: '1학년(1차, 2차)'},
        {label: '2학년(3차, 4차)', value: '2학년(3차, 4차)'},
        {label: '3학년(5차, 6차)', value: '3학년(5차, 6차)'},
        {label: '4학년(7차, 8차)', value: '4학년(7차, 8차)'},
        {label: '9차 이상', value: '9차 이상'}];
    const phoneRegex = /^01[016789]\d{7,8}$/;
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 29;
    const endYear = currentYear - 19;
    const yearArray = [{label: '출생년도', value: '출생년도'}];
    for (let year = startYear; year <= endYear; year++) {
        yearArray.push({label: String(year), value: String(year)});
    }

    useEffect(() => {
        axios.get(`/api/recruit/getAvailability`)
            .then((res) => {
                if (!res.data.RESULT_DATA.isAvail) {
                    window.location.replace(`/recruit/closed`);
                } else {
                    setLoading(true);
                }
            });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    useEffect(() => {
        axios.get(`/api/recruit/getQuestionList`)
            .then((res) => {
                    setQuestionList(res.data.RESULT_DATA.list);
                    setLongAnswer(new Array(res.data.RESULT_DATA.count).fill(''));
                }
            )
    }, []);

    useEffect(() => {
        if (age != '') {
            const tempList = [...ans];
            tempList[1] = age;
            setAns(tempList);
            handleQuestionNum(1);
        }
    }, [age]);

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

    const handleInput = (e: any) => {
        setSingleAns(e.target.value);
    }

    const handleAns = () => {
        if (singleAns == '') {
            return;
        }
        if (questionNum == 0) {
            setName(singleAns);
        } else if (questionNum == 2) {
            setId(singleAns);
        } else if (questionNum == 5) {
            setDepartment(singleAns);
        } else if (questionNum == 6) {
            setPhone(singleAns);
        }
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

    const handleSubmit = () => {
        const applicationData: RecruitSubmissionItem = {
            age: age,
            answer: longAnswer,
            id: id,
            name: name,
            grade: grade,
            college: college,
            department: department,
            phone: phone,
            timestamp: 0,
            isPrivacyCollectAgree: personalInfoConsentChecked

        }
        axios.get(`/api/recruit/getAvailability`)
            .then((res) => {
                if (!res.data.RESULT_DATA.isAvail) {
                    window.location.replace(`/recruit/closed`);
                } else {
                    axios.post(`/api/recruit/postSubmission`, applicationData).then((_) => {
                        setSubmitSuccess('success');
                    }).catch((_) => {
                        setSubmitSuccess('fail');
                    })
                }
            });

    }
    const activeEnter = (e: any) => {
        if (e.key === 'Enter') {
            handleAns();
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
            {loading === false ? <div className='flex justify-center items-center h-[100vh]'></div> : <>
                {submitSuccess === 'success' ? <SubmitSuccess>{name}</SubmitSuccess> :
                    <div className='flex flex-col w-full lg:items-center  px-[10px]'>
                        <div>
                            {page === 1 ?
                                <>
                                    <div className="flex flex-col lg:w-[500px]">
                                        <ChatBubbleQ>모든 답변은 문장이 아닌 단답형으로<br/>적어주세요.</ChatBubbleQ>
                                        <ChatBubbleQ>이름이 무엇인가요?</ChatBubbleQ>
                                        {name ? (<><ChatBubbleA nowNum={questionNum} QuestionNum={0}
                                                                setNumber={setQuestionNum}>{name}</ChatBubbleA>
                                            <ChatBubbleQ>나이는 어떻게 되시나요?</ChatBubbleQ>
                                            <ChatBubbleA nowNum={questionNum}>
                                                <div className="w-full flex flex-row">
                                                    <DropDown setValue={setAge} value={age}
                                                              options={yearArray}/>년

                                                </div>
                                            </ChatBubbleA></>) : <></>}
                                        {age && <ChatBubbleQ>학번은 어떻게 되시나요?</ChatBubbleQ>}
                                        {id ? <> <ChatBubbleA nowNum={questionNum} QuestionNum={2}
                                                              setNumber={setQuestionNum}>{id}</ChatBubbleA>
                                            <ChatBubbleQ>몇 학년인가요?</ChatBubbleQ>
                                            <ChatBubbleA nowNum={questionNum}>
                                                <div className="w-full flex flex-row">
                                                    <DropDown setValue={setGrade} value={grade}
                                                              options={gradeData}
                                                    />

                                                </div>
                                            </ChatBubbleA>
                                        </> : <></>
                                        }
                                        {grade ? <> <ChatBubbleQ>어느 단과대 소속인가요?</ChatBubbleQ>
                                            <ChatBubbleA nowNum={questionNum}>
                                                <div className="w-full flex flex-row">
                                                    <DropDown setValue={setCollege} value={college}
                                                              options={collegeData}/>

                                                </div>
                                            </ChatBubbleA>

                                        </> : <></>}
                                        {college && <ChatBubbleQ>어디 학과인가요?</ChatBubbleQ>}
                                        {department ? <> <ChatBubbleA nowNum={questionNum} QuestionNum={5}
                                                                      setNumber={setQuestionNum}>{department}</ChatBubbleA>
                                            <ChatBubbleQ>전화번호를 작성해주세요.<br/>( - 없이 작성)</ChatBubbleQ>
                                        </> : <></>}
                                        {phone && <ChatBubbleA nowNum={questionNum} QuestionNum={6}
                                                               setNumber={setQuestionNum}>{phone}</ChatBubbleA>}

                                        <div className="flex flex-row">
                                            {[0, 2, 5, 6].includes(questionNum) ?
                                                <div
                                                    className='flex justify-center items-center w-full border-[2px] rounded-[20px] mt-[10px] p-[10px] mb-[100px]'>
                                                    <input
                                                        className="w-full h-[25px] bg-[#ffffff] text-[#000000] focus:outline-none resize-none "
                                                        placeholder="답장 보내기..." value={singleAns}
                                                        onChange={handleInput}
                                                        onKeyUp={(e) => activeEnter(e)}
                                                    ></input>
                                                    <button onClick={handleAns}><img src={'SendBTN.png'}/></button>

                                                </div> : <></>
                                            }
                                            {questionNum == 7 &&
                                                <div className="w-full flex justify-center mb-[100px]">
                                                    <img src={'disabled_send_button_left.png'}
                                                         className='w-[30px] h-[30px] mx-[5px]'/>
                                                    {page === 1 && name.trim() !== '' && id.trim() !== '' && age !== '출생년도' && grade !== '학년' && college !== '소속 대학' && department.trim() !== '' && phoneRegex.test(phone.trim()) ?
                                                        <button onClick={() => setPage(2)}><img
                                                            src={'send_button_right.png'}
                                                            className='w-[30px] h-[30px] mx-[5px]'/>
                                                        </button>
                                                        :
                                                        <img src={'disabled_send_button_right.png'}
                                                             className='w-[30px] h-[30px] mx-[5px]'/>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </>
                                :
                                <>{page === 2 ?
                                    <>
                                        {questionList.map((question, index) => {
                                            return (
                                                <>
                                                    <LongQuestion length={longAnswer[index].length} key={index}>
                                                        {question}
                                                    </LongQuestion>
                                                    <LongAnswer setAnswer={setLongAnswer} Answer={longAnswer}
                                                                num={index}/>
                                                </>
                                            )
                                        })
                                        }
                                        <PersonalInfoConsent checked={personalInfoConsentChecked}
                                                             setChecked={setPersonalInfoConsentChecked}/>


                                        <div className="w-full flex justify-center">
                                            <button onClick={() => setPage(1)}><img src={'send_button_left.png'}
                                                                                    className='w-[30px] h-[30px] mx-[5px]'/>
                                            </button>
                                            {page === 2 && longAnswer.every(element => element.trim()) ?
                                                <button onClick={() => handleSubmit()}><img
                                                    src={'send_button_right.png'}
                                                    className='w-[30px] h-[30px] mx-[5px]'/>
                                                </button>
                                                :
                                                <img src={'disabled_send_button_right.png'}
                                                     className='w-[30px] h-[30px] mx-[5px]'/>
                                            }
                                        </div>
                                    </> : <></>
                                }</>
                            }
                        </div>
                    </div>
                }
                {submitSuccess === 'fail' ? <SubmitFailModal handleClose={setSubmitSuccess}></SubmitFailModal> : <></>}
            </>

            }


        </>
    )
}


export default RecruitPage;