import React from 'react'

export default function Mode({ mode, changeMode }) {
    let changeModeText = mode.current === "day" ? "перейти на ночной режим" : "перейти на дневной режим" 

    const buttonHandler = () => {
        const newValue = mode.current === "day" ? "night" : "day"
        changeMode({ current: newValue })
    }
    return (
        <button style={{ border: 'transparent',border:"2px", borderRadius: '10px' }} onClick={buttonHandler}>{changeModeText}</button>
    )
}
