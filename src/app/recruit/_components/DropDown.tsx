
interface Props{
    options: {label: string, value: string}[];
    setValue: (value:string) => void;
    value: string;
}

const DropDown = ({ options, setValue, value}:Props) => {
    return (
        <div className="w-full">
        <select
            className="max-w-[300px] mx-[2px] bg-transparent text-[#fffff] text-center focus:outline-none"
            onChange={(item)=>{setValue(item.target.value)} }
            value={value}
        >
            {options.map((option) => (
                <option className="px-[2px] text-[#000000]" key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        </div>
    )
}

export default DropDown;
