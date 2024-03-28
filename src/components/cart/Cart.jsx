import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart =props.cart;
    // const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
           <h4>Order Summary:{cart.length}</h4> 
           <p>Price:{total}</p>
        </div>
    );
};

export default Cart;