import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './OrderReviewItem.css';

const OrderReviewItem = (props) => {
    const { handleCartDelete } = props;
    const { name, img, price, shipping, quantity } = props.item;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details">
                <div className='review-item-info'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>QTY: {quantity}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
                <div className='review-item-button'>
                    
                    <button onClick={ () => {handleCartDelete(props.item)}}><TrashIcon className='trash-btn'></TrashIcon></button>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewItem;