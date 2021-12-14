import { FC, useState } from 'react'

export interface IElements {
    label: string,
    value: string
}

interface Props {
    name: string
    options?: IElements[]
    selection?: string
}

const DropdownElements: FC<{ name: string, options: IElements[], selection: string }> = ({ name, options, selection }: Props) => {

    const [selected, setSelected] = useState("tango");

    // if (selection !== "") {
    //     setSelected("tango");
    // }

    return (
        <div className="DropdownElement">
            <label>{name}</label>
            {/* {fruit} */}
            <select value={selection}>
                <option value="-1">Select one</option>
                {options?.map((element) => <option value={element.label}>{element.label}</option>)}
            </select>
        </div>
    )
}

export default DropdownElements
