interface Props {
    handleClose: (success: string) => void;

}

const SubmitFailModal = ({handleClose}:Props) => {

    return (
        <div className='flex fixed bg-[#d9d9d990] w-full h-full justify-center z-50'>
            <div
                className='flex flex-col justify-center items-center w-[250px] h-[150px] text-[15px] md:w-[400px] md:h-[200px] md:text-[20px] rounded-[20px] mt-[300px] py-[20px] bg-[#ffffff] z-50'>
                <div className='flex h-full justify-center items-center'>제출에 실패했습니다.</div>
                <button className='flex content-end  text-[#FD7A7A]'  onClick={()=>handleClose('')}>닫기</button>
            </div>

        </div>
    );
}

export default SubmitFailModal;