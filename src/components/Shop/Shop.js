import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>
            <div className="product-container">
                Total Products {products.length}
            </div>
            <div className="cart-container">
                Order Summary
            </div>
        </div>
    );
};

export default Shop;