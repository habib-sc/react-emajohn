import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart 
                cart={cart}
                totalPrice={totalPrice}
                totalShipping={totalShipping}
                tax={tax}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;