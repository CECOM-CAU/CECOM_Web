import {ThingItem} from "@/utils/Interfaces";

const SmallBox = ({description, id, name, photo, tag}:ThingItem) => {
    return (
        <div className={'border rounded-xl border-gray-400 flex flex-row flex-grow-0 hover:shadow-xl'}>
            <img className={'h-[100px] m-[20px]'} src="/Thingsphoto.jpg" alt="Things"/>
            <div className={'mt-[20px] mr-[30px] mb-[20px]'}>
                <div className={'flex flex-col'}>
                    <div className={'w-[200px] flex flex-row gap-x-[10px]'}>
                        <span className={'max-w-[130px] text-wrap text-[24px] font-gmarket-m'}>{name}</span>
                        <span className={'px-[5px] py-[1px] rounded-2xl border-0 bg-gray-300 ' +
                            'text-[12px] place-self-center font-gmarket'}>{tag}</span>
                    </div>
                    <div className={'mb-[10px]'}>
                        <hr className={'w-[220px] border-gray-500'}/>
                    </div>
                    <span className={'text-wrap w-[200px] text-[15px] font-gmarket'}>{description}</span>
                </div>
            </div>
        </div>
    );
}

const TextBox = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'w-[200px] grid grid-cols-3 grid-rows-1 '}>
                <span className={'text-[24px] col-span-2 font-gmarket-m'}>UNO 보드</span>
                <div className={'self-center flex flex-col justify-center w-[55px] h-[21px] bg-cover rounded-2xl border-0 bg-gray-300'}>
                    <span className={'place-self-center text-[12px] font-gmarket'}>#Board</span>
                </div>
            </div>
            <div className={'mb-[10px]'}>
                <hr className={'w-[200px] border-gray-500'}/>
            </div>
            <span className={'text-wrap w-[180px] text-[15px] font-gmarket'}>내용내용내용내용내용내용내용내용내용내용</span>
        </div>
    );
}
export default SmallBox;
