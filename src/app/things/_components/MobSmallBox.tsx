import {ThingItem} from "@/utils/Interfaces";
const MobSmallbox = ({description, id, name, photo, tag}:ThingItem) => {
    return (
        <div className={'border rounded-xl border-gray-400 flex flex-col flex-grow-0 hover:shadow-xl'}>
            <img className={'h-[100px] w-[115px] m-[20px]'} src={`data:image/jpeg;base64,${photo}`} alt="Things"/>
            <div className={'mx-[23px] mb-[23px]'}>
                <div className={'flex flex-col'}>
                    <div className={'w-[105px] flex flex-col gap-y-[5px]'}>
                        <span className={'w-[105px] text-wrap text-[18px] font-gmarket-m'}>{name}</span>
                        <span className={'px-[5px] py-[1px] rounded-2xl border-0 bg-gray-300 '
                            +'text-[10px] place-self-start font-gmarket'}>{tag}</span>
                    </div>
                    <div className={'mt-[10px] mb-[10px]'}>
                        <hr className={'w-[110px] border-gray-500'}/>
                    </div>
                    <span className={'text-wrap w-[105px] text-[12px] font-gmarket'}>{description}</span>
                </div>
            </div>
        </div>
    );
}
export default MobSmallbox;