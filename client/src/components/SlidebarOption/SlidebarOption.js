import React from 'react'
import './SlidebarOption.css';
import {useHistory} from 'react-router-dom'

const SlidebarOption = ({name, Icon, path}) => {

    const history = useHistory();

    const handlePathHandler = (e) => {
        history.push(path)
    }

    return (
        <div className="SlidebarOption" onClick={handlePathHandler}>
            {Icon && <Icon className="SlidebarOption__Icon"/>}
            {name && (
                <h2>
                    {name}
                </h2>
            )}
        </div>
    )
}

export default SlidebarOption
