import { FC, useState } from 'react'
import { createSolutionBuilderWithWatchHost } from 'typescript';

interface Props {
    name: string
}

const ButtonElements: FC<{ name: string }> = ({ name }: Props) => {

    const [levelName, setLevelName] = useState<string>("Level1");
    const [counter, setCounter] = useState<number>(0); 

    const addTask = (): void => {
        if (counter === 0){
            setLevelName("Level 2");
            setCounter(1);
        }else if (counter ===1){
            setLevelName("Level 3");
            setCounter(2);
        }else if (counter === 2){
            setLevelName("Level 1");
            setCounter(0);
        }        
    }

    return (
        <>
            <button className="btnElement" onClick={addTask}>{levelName}</button>
        </>
    )
}

export default ButtonElements
