import React , {useState} from 'react'
import './EditProduct.css'

const Index = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

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
        console.log(data);
    }

    return (
        <div className="AddProduct">
        <div className="AddProduct__body">
            <h1> Edit Product </h1>
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
                <button type="submit">Edit Product</button>
            </form>
        </div>
  </div>
    )
}

export default Index
