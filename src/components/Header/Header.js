import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;