import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products => {
            console.log(products);
            for (const id in storedCart) {
                const addedProducts = products.find(product => product._id === id);
                if (addedProducts) {
                    const quantity = storedCart[id];
                    addedProducts.quantity = quantity;
                    savedCart.push(addedProducts);
                }
            }
            setCart(savedCart);
        })
        
    }, []);

    return [cart, setCart];
};

export default useCart;