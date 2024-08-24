import React from "react";

interface Props {
    checked:boolean;
    setChecked: (checked: boolean) => void;
}

const PersonalInfoConsent = ({checked, setChecked}: Props) => {
    return (
        <>
            <div className='font-gmarket-m mb-[3px] text-[20px]'>개인정보 수집 동의</div>
            <div className='text-pretty mb-[3px]'>본 지원서에 답변하신 내용은 CECOM 24-2 신입부원 선발에만 사용될 예정이며, 이후에는 폐기됩니다.</div>
            <div className='flex flex-col ml-[5px]'>
                <label><input type="checkbox" checked={checked}
                               onChange={({target: {checked}}) => setChecked(true)}/> 동의합니다.</label>
                <label><input type="checkbox" checked={!checked}
                              onChange={({target: {checked}}) => setChecked(false)}/> 동의하지 않습니다.</label>
            </div>
        </>
    )
}


export default PersonalInfoConsent;