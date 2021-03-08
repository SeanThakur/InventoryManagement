import React, {useState} from 'react'
import './AddLocation.css';
import {useDispatch} from 'react-redux';
import {addLocation} from '../../store/feature/Location/actions';
import {useHistory} from 'react-router-dom'

const Index = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleFromChange = (e) => {
        setFrom(e.target.value)
    }

    const handleToChange = (e) => {
        setTo(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            from,
            to
        }
        dispatch(addLocation(data));
        history.push('/add_product_movement')
    }

    return (
        <div className="AddLocation">
            <div className="AddLocation__body">
                <h1> Location </h1>
                <form onSubmit={submitHandler}>   
                    <input 
                        type="text" 
                        value={from}
                        onChange={handleFromChange}
                        placeholder="From Location"
                        required
                    />
                    <input 
                        type="text"  
                        value={to}
                        onChange={handleToChange}
                        placeholder="To Location"
                        required
                    />
                    <button type="submit">Add Location</button>
                </form>
            </div>
      </div>
    )
}

export default Index
