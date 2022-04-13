import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../images/google.png';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-box'>
                <h1 className='form-heading'>Login</h1>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='type your email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Email</label>
                        <input type="password" name='password' placeholder='type your password' />
                    </div>
                    <button>Login</button>
                    <p>New to Ema-Jhon? <Link to="/register" className='emajhon-link'>Create A New Account</Link></p>
                </form>

                <div className='ej-divider'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button>
                    <img src={googleIcon} alt="" />
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default Login;