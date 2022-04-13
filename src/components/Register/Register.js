import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../src/firebase.init';
import googleIcon from '../../images/google.png';


const Register = () => {
    // Getting Auth from react firebase hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    // Hooks for navigationn 
    const navigate = useNavigate();
    
    // Ref hooks for getting input 
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // Handle form submit 
    const handleFormSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='form-container'>
            <div className='form-box'>
                <h1 className='form-heading'>Signup</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-group'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" ref={nameRef} name='name' placeholder='type your full name' required />
                    </div>
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
                    <button>Signup</button>
                    <p>Already Have An Account? <Link to="/login" className='emajhon-link'>Login</Link></p>
                </form>
                <div className='ej-divider'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button>
                    <img src={googleIcon} alt="" />
                    Signup With Google
                </button>
            </div>
        </div>
    );
};

export default Register;