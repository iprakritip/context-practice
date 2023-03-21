import React, { createContext } from "react"

export const themes = {
    dark: {
        color: 'white',
        background: 'black',
        padding: '5px'
    },
    light: {
        color: 'black',
        background: 'white',
        padding: '5px'
    }
}

const ThemeContext = createContext(themes);
export default ThemeContext;