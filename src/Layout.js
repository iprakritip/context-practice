import React, { useContext } from 'react'
import ThemeContext from './theme-context'

const Layout = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={theme}>
            <h1>Hello, k cha</h1>
        </div>
    )
}

export default Layout