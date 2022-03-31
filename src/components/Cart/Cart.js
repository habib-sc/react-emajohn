import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalQty = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalQty = totalQty + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));

    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items: {totalQty}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: ${totalPrice+totalShipping+tax}</h3>
            {props.children}
        </div>
    );
};

export default Cart;