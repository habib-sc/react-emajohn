import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div className="product-info-top">
                    <h4>{name}</h4>
                    <h4>Price: ${price}</h4>
                </div>
                <div className="product-info-bottom">
                    <p>Rating: {ratings} stars</p>
                    <p>Manufacturer: {seller}</p>
                </div>
            </div>
            <button onClick={ () => props.addToCart(props.product)} className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;