import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState();
    const [pageCount, setPageCount] = useState(0); //total page
    const [page, setPage] = useState(0); //page number
    const [pageSize, setPageSize] = useState(10);

    useEffect( () => {
        fetch(`http://localhost:5000/products?page=${page}&size=${pageSize}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, pageSize]);

    useEffect( () => {
        fetch('http://localhost:5000/products-count')
        .then(res => res.json())
        .then(data => {
            const productCount = data.count;
            const pages = Math.ceil(productCount/10);
            setPageCount(pages);
        });
    }, []);

    const [cart, setCart] = useCart(products);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className="container-fluid">
            <div className='container'>
                <div className='product-container'>
                    {products &&
                        products.map(product => <Product 
                            key={product._id} 
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
            <div className='pagiganion-container'>
                {
                    [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} key={number} className={`pagination-button ${page === number ? 'selected' : ''}`}>{number}</button>)
                }
                <select onChange={ (e) => setPageSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;