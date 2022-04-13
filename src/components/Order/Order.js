import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Order.css';
import OrderReviewItem from './OrderReviewItem/OrderReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleCartDelete = item => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
        removeFromDb(item.id)
    }

    return (
        <div className="container-fluid">
            <div className='container'>
                <div className='review-item-container'>
                    {
                        cart.map(item => <OrderReviewItem
                            key={item.id}
                            item={item}
                            handleCartDelete={handleCartDelete}
                        ></OrderReviewItem>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/shipping'>
                            <button className='review-order-btn'>Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;