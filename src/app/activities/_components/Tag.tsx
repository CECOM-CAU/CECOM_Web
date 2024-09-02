const Tag = ({tag}: { tag: Array<string> }) => {
    const firstTag = "flex text-[10px] h-[20px] pt-[3px] text-center lg:text-[12px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px] mr-[5px] mt-[3px]";
    const normalTag = "flex text-[10px] h-[20px] pt-[3px] text-center lg:text-[12px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[5px] mt-[3px]";
    return (
        <div className="flex flex-row flex-wrap">
            {
                tag.map((t: string, index: number) => (
                    <div className={index === 0 ? firstTag : normalTag} key={index}>{t}</div>
                ))
            }
        </div>
    )
}
export default Tag;