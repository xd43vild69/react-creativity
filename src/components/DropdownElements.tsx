import { FC, useState } from 'react'

export interface IElements {
    label: string,
    value: string
}

interface Props {
    name: string
    options?: IElements[]
}

const DropdownElements: FC<{ name: string, options: IElements[] }> = ({ name, options }: Props) => {

    const [optionsElement, setOptionElements] = useState<IElements[]>([]);

    //let ddlElements = optionsElement ?? [{ label: " ", value: " " }];

    //setOptionElements(options);

    //console.log(options);

    return (
        <div className="DropdownElement">
            <label>{name}</label>
            {/* {fruit} */}
            <select>
                <option value="-1">Select one</option>
                {options?.map((fruit) => <option value={fruit.label}>{fruit.label}</option>)}
            </select>
        </div>
    )
}

export default DropdownElements
