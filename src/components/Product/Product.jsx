import React from 'react';
import('./Product.css');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;
    const handelAddToCart = props.handelAddToCart;

       

    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>
                {/* (props) anle ()=> sign  */}
                Add-to-cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;