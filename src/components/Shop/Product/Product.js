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
                <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', marginRight: '5px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>
                     Add to Cart
                </p>
            </button>
        </div>
    );
};

export default Product;