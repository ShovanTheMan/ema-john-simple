import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get id
        for(const id in storedCart){
            // get product by id
            const addedProduct = products.find(product => product.id ===id);
            if(addedProduct){
                // add the quantity by id
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // add the added product in saved cart
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    } ,[products])


    const handelAddToCart = (product) => {
        const newCart = [...cart, product];

        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;