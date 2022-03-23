import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, totalPrice, totalShipping, tax} = props;
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: ${totalPrice+totalShipping+tax}</h3>
        </div>
    );
};

export default Cart;