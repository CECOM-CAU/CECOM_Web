import MobileWhatLeft from "@/app/_components/mainPage/mobile/MobileWhatLeft";
import MobileWhatRight from "@/app/_components/mainPage/mobile/MobileWhatRight";

const MobileWhatWeDo = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[200px]">
            <div className="flex flex-col items-end w-[340px] mb-[30px]">
                <div className="flex flex-col w-[280px]">
                    <div className="flex justify-end font-gmarket-m text-[60px] h-[60px]">WHAT</div>
                    <div className="flex justify-end text-[60px]">WE DO</div>
                </div>
            </div>
            <div className="flex flex-col w-[340px]">
                <MobileWhatLeft
                    thumbnail={'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'}
                    comment={["해당 분야에 대해 경험과 지식이 있는", "멘토가 6주 동안 멘티를 지도하는 활동입니다."]}>Mentoring</MobileWhatLeft>

                <MobileWhatRight comment={["프로젝트 혹은 그에 준하는 경험이 있는", "부원들이 모여 재미있는 아이디어를 나누고", "이를 실현시키는 활동입니다."]}
                                 thumbnail={'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'}>Project</MobileWhatRight>

                <MobileWhatLeft
                    thumbnail={'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'}
                    comment={["해당 분야에 관심이 있는 부원들이 모여", "공부하고, 배운 것을 나누는 활동입니다."]}>Study Group</MobileWhatLeft>

                <MobileWhatRight comment={["재미있는 아이디어가 자유롭게 오갈 수 있는", "환경을 만들기 위해","부원들 사이의 친목을 도모할 수 있는","다양한 친목 활동을 진행합니다."]}
                                 thumbnail={'https://velog.velcdn.com/images/kk1112k/post/3c313eca-0dbc-4cd5-b5f8-1ee2f41657d6/79351df114d5d8fa958cbc2065df6877.jpg'}>Events</MobileWhatRight>

            </div>
        </div>
    )
}

export default MobileWhatWeDo;