import React , {useState} from 'react'
import './AddProduct.css';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../store/feature/Product/actions';
import {useHistory} from 'react-router-dom'

const Index = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value)
    } 

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    } 

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name,
            price
        }
        dispatch(addProduct(data));
        history.push('/all_products')
    }

    return (
        <div className="AddProduct">
            <div className="AddProduct__body">
                <h1> Product </h1>
                <form onSubmit={submitHandler}>   
                    <input 
                        type="text" 
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Product Name"
                        required
                    />
                    <input 
                        type="number" 
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Product Price"
                        required
                    />
                    <button type="submit">Add Product</button>
                </form>
            </div>
      </div>
    )
}

export default Index
