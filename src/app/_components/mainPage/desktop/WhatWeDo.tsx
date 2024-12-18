import WhatLeft from "@/app/_components/mainPage/desktop/WhatLeft";
import WhatRight from "@/app/_components/mainPage/desktop/WhatRight";
import {MainImage} from "@/utils/Interfaces";

const WhatWeDo = ({project, study, mentoring, event}: MainImage) => {
    return (
        <div className="flex flex-col items-center justify-center mt-[200px]">
            <div className="flex flex-col items-end w-[1105px] mb-[100px]">
                <div
                    className="flex justify-end w-[390px] font-gmarket-m text-[100px] h-[110px]">WHAT
                </div>
                <div className="text-[100px]">WE DO</div>
            </div>
            <div className="flex flex-col w-[1105px]">
                <div className="flex border-b-[1px] border-[#000000] my-[15px] "></div>
                <WhatLeft thumbnail={mentoring??""}
                          comment={["해당 분야에 대해 경험과 지식이 있는 멘토가", "6주 동안 멘티를 지도하는 활동입니다."]}>Mentoring</WhatLeft>
                <div className="flex border-b-[1px] border-[#000000] my-[15px] "></div>
                <WhatRight thumbnail={project??""}
                           comment={["프로젝트 혹은 그에 준하는 경험이 있는 부원들이 모여", "재미있는 아이디어를 나누고 이를 실현시키는 활동입니다."]}>Project</WhatRight>
                <div className="flex border-b-[1px] border-[#000000] my-[15px] "></div>
                <WhatLeft thumbnail={study??""}
                          comment={["해당 분야에 관심이 있는 부원들이 모여", "공부하고, 배운 것을 나누는 활동입니다."]}>Study
                    Group</WhatLeft>
                <div className="flex border-b-[1px] border-[#000000] my-[15px] "></div>
                <WhatRight thumbnail={event??""}
                           comment={["재미있는 아이디어가 자유롭게 오갈 수 있는 환경을", "만들기 위해 부원들 사이의 친목을 도모할 수 있는", "다양한 친목 활동을 진행합니다."]}>Events</WhatRight>
                <div className="flex border-b-[1px] border-[#000000] my-[15px] mb-[100px]"></div>
            </div>
        </div>
    )
}

export default WhatWeDo;