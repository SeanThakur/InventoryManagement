import React from 'react'
import './AddProduct.css';

const Index = () => {
    return (
        <div className="AddProduct">
            <div className="AddProduct__body">
                <h1> Product </h1>
                <form>   
                    <input type="text" placeholder="Product Name"/>
                </form>
                <button type="submit">Add Product</button>
            </div>
      </div>
    )
}

export default Index
