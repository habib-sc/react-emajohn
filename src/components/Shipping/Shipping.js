import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {

    const [user] = useAuthState(auth);

    //hooks for getting input
    const nameRef = useRef(''); 
    const phoneRef = useRef('');
    const addressRef = useRef('');

    const handleShipping = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
    }
    return (
        <div className='form-container'>
            <div className='form-box'>
                <h1 className='form-heading'>Shipping</h1>
                <form onSubmit={handleShipping}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={nameRef} name='name' placeholder='type your name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={user?.email} name='email' placeholder='type your email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" ref={phoneRef} name='phone' placeholder='type your phone' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input type="text" ref={addressRef} name='address' placeholder='type your address' required />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Shipping;