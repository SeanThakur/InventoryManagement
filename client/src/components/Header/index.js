import React from 'react'
import './Header.css'

const Index = ({title}) => {
    return (
        <div className="Header">
            <div className="Header__title">
                <h2>{title}</h2>
            </div>
            <div className="Header__line"></div>
        </div>
    )
}

export default Index
