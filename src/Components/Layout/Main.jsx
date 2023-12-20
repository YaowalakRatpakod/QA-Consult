import React from 'react'
import Header from './Header/Header'

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Main
