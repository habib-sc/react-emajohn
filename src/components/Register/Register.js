import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <div className='form-box'>
                <h1 className='form-heading'>Register</h1>
                <form>
                    <div className='input-group'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name='name' placeholder='type your full name' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='type your email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Email</label>
                        <input type="password" name='password' placeholder='type your password' />
                    </div>
                    <button>Register</button>
                    <p>Already Have An Account? <Link to="/login" className='emajhon-link'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;