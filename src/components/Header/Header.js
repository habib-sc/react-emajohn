import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-container'>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menus">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;