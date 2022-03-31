import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className="container-fluid">
            <div className='container'>
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
                    <Cart cart={cart}>
                        <Link to='/order'>
                            <button className='review-order-btn'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;