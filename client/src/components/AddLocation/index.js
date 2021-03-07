import React from 'react'
import './AddLocation.css';

const Index = () => {
    return (
        <div className="AddLocation">
            <div className="AddLocation__body">
                <h1> Location </h1>
                <form>   
                    <input type="text" placeholder="From Location"/>
                    <input type="text"  placeholder="To Location"/>
                </form>
                <button type="submit">Add Location</button>
            </div>
      </div>
    )
}

export default Index
