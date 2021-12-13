import React from 'react'

const ButtonElements = () => {

    const addTask = (): void => {
        console.log("xxx");
    }

    return (
        <>
            <button onClick={addTask}>Level1</button>
        </>
    )
}

export default ButtonElements
