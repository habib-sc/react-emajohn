import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google.png';
import './Login.css';

const Login = () => {

    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    let from = location.state?.from?.pathname || "/";

    // Hooks for navigationn 
    const navigate = useNavigate();
    
    // Ref hooks for getting input 
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // Handle form submit 
    const handleLogin = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }
    
    return (
        <div className='form-container'>
            <div className='form-box'>
                <h1 className='form-heading'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} name='email' placeholder='type your email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordRef} name='password' placeholder='type your password' required />
                    </div>
                    {loading &&
                    <p style={{"text-align": 'center', 'margin-bottom': '15px'}}>Loading...</p>
                    }
                    {error &&
                    <p style={{"text-align": 'center', 'margin-bottom': '15px', 'color': 'red'}}>{error.message}</p>
                    }
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