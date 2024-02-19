import {ThingItem} from "@/utils/Interfaces";

const DeskSmallBox = ({description, id, name, photo, tag}:ThingItem) => {
    return (
        <div className={'border rounded-xl border-gray-400 flex flex-row flex-grow-0 hover:shadow-xl'}>
            <img className={'h-[100px] m-[20px]'} src="/Thingsphoto.jpg" alt="Things"/>
            <div className={'mt-[20px] mr-[30px] mb-[20px]'}>
                <div className={'flex flex-col'}>
                    <div className={'w-[210px] flex flex-col gap-y-[5px]'}>
                        <span className={'max-w-[200px] text-wrap text-[24px] font-gmarket-m'}>{name}</span>
                        <span className={'px-[5px] py-[1px] rounded-2xl border-0 bg-gray-300 '
                            +'text-[12px] place-self-start font-gmarket'}>{tag}</span>
                    </div>
                    <div className={'mt-[10px] mb-[10px]'}>
                        <hr className={'w-[220px] border-gray-500'}/>
                    </div>
                    <span className={'text-wrap w-[210px] text-[15px] font-gmarket'}>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default DeskSmallBox;