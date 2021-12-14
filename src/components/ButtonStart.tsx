import React, { FC, useState } from 'react'

interface Props {
    name: string;
    handleButtonStart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonStart = ({ name, handleButtonStart }: Props) => {

    const addTask = (): void => {

    }

    return (
        <>
            <button className="btnElement" onClick={handleButtonStart}>{name}</button>
            {/* <button className="btnElement" onClick={() => {
                handleButtonStart();
            }}>x</button> */}
        </>
    )
}

export default ButtonStart
