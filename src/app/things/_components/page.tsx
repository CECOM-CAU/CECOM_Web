const SmallBox = () => {
    return (
        <div className={'border rounded-xl border-gray-400 flex flex-row flex-grow-0 hover:shadow-xl'}>
            <img className={'h-[100px] m-[20px]'} src="/Thingsphoto.jpg" alt="Things"/>
            <div className={'mt-[20px] mr-[30px] mb-[20px]'}>
                <TextBox></TextBox>
            </div>
        </div>
    );
}

const TextBox = () => {
    return (
        <div className={'flex flex-col'}>
            <p className={'text-[24px] mr-[20px] font-gmarket-b'}>Title</p>
            <div className={'mb-[10px]'}>
                <hr className={'w-[180px] border-gray-500'}/>
            </div>
            <p className={'text-wrap w-[180px] text-[15px] font-gmarket'}>내용내용내용내용내용내용내용내용내용내용</p>
        </div>
    );
}
export default SmallBox;