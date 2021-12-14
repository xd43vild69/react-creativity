import { FC, useState } from 'react'
import { createSolutionBuilderWithWatchHost } from 'typescript';

interface Props {
    name: string
}

const ButtonStart: FC<{ name: string }> = ({ name }: Props) => {

    const [levelName, setLevelName] = useState<string>("Start");

    const addTask = (): void => {
             
    }

    return (
        <>
            <button className="btnElement" onClick={addTask}>{levelName}</button>
        </>
    )
}

export default ButtonStart
