import React, {createContext, useState} from "react";
import {allProducts} from "../products"

export const ShopContext = createContext(null);

//Цей файл для того щоб могти глобально знати які ітеми в корзині

const getDefaultCart = () =>{
    let cart = {}
    for (let i = 1; i < allProducts.length + 1; i++){
        cart[i] = 1;
    }
    return cart;
}

export default function ShopContextProvider(props){
    const [cartItems, setCarItems] = useState(getDefaultCart());
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (itemId) =>{
        setCarItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) =>{
        setCarItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const removeFromCartTotally = (itemId) =>{
        setCarItems((prev) => ({...prev, [itemId]: 1}))
    }

    const reverseVisibility = () =>{
        setIsCartOpen(!(isCartOpen))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, reverseVisibility, isCartOpen}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};