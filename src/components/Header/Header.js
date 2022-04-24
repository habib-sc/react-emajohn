import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

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
                    <Link to="/login">Login</Link>
                    {user &&
                    <small style={{'marginRight': '10px', 'color': 'gray'}}>{user.email}</small>
                    }
                    {user?
                        <button onClick={() => signOut(auth)}>Logout</button>
                        :
                        <Link to="/register">Register</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;