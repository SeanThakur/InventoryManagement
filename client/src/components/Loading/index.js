import React from 'react'
import './Loading.css'
import Loader from './loader.gif'

const Index = () => {
    return (
        <div className="loading">
            <img src={Loader} alt="Loading" />
        </div>
    )
}

export default Index
