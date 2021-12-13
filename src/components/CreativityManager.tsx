import React from 'react'
import DropdownElements from './DropdownElements'
import ButtonElements from './ButtonElements'
import Feedback from './Feedback'

const CreativityManager = () => {
    return (
        <div>
            <div className="buttons">
                <ButtonElements />
                <ButtonElements />
            </div>
            <div className="Elements">
                <DropdownElements />
                <DropdownElements />
                <DropdownElements />
            </div>
            <div className="feedback">
                <Feedback />
            </div>
        </div>
    )
}

export default CreativityManager


