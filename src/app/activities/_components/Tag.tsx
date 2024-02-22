const Tag = ({tag}: { tag: Array<string> }) => {
    const firstTag = "flex h-[20px] text-center pt-[4px] text-[12px] align-bottom justify-center items-center bg-primary-cecom_blue_light rounded-3xl px-[6px]  mr-[10px] mt-[10px]";
    const normalTag = "flex h-[20px] text-center pt-[4px] text-[12px] align-bottom justify-center items-center bg-primary-lightgray30 rounded-3xl px-[6px] mr-[10px] mt-[10px]";
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