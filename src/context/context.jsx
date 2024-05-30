import {createContext, useState} from "react";
import {allProducts} from "../products"
import PropTypes from "prop-types";

export const ShopContext = createContext(null);

//Цей файл для того щоб могти глобально знати які ітеми в корзині

// Клас для товарів в корзині
class CarItems {
    constructor(){
        this.items = []
    }

    // додає товар в корзину
    add(itemId){
        this.items.push({
            id: itemId,
            quantity: 1
        })
    }

    // видаляє товар з корзини
    remove(itemId){
        this.items = this.items.filter(item => item.id !== itemId)
    }

    // перевіряє чи є товар в корзині
    checkIfItemExists(itemId){
        return this.items.some(item => item.id === itemId)
    }

    // повертає товар по id
    get(itemId){
        return this.items.find(item => item.id === itemId)
    }

    // повертає всі товари в корзині
    getAll(){
        return this.items
    }

    // збільшує кількість товару в корзині
    increase(itemId){
        if (this.checkIfItemExists(itemId)){
            this.items.forEach(item => {
                if (item.id === itemId){
                    item.quantity += 1;
                }
            })
        }
    }

    // зменшує кількість товару в корзині. Якщо кількість товару стане 0, то видаляємо товар з корзини
    decrease(itemId){
        if (this.checkIfItemExists(itemId)){
            const item = this.get(itemId);

            if (item.quantity === 1){
                this.remove(itemId);
                return;
            }

            this.items.forEach(item => {
                if (item.id === itemId){
                    item.quantity -= 1;
                }
            })
        }
    }
}

export default function ShopContextProvider(props){
    const [cartItems] = useState(new CarItems());
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartChange, setCartChange] = useState(0);

    // для зміни стану cartChange (оновлення кошика)
    const handleCartChange = () => {
        setCartChange(prevState => prevState + 1);
    }

    const addToCart = (itemId) => {
        cartItems.add(itemId);
        console.log(cartItems.getAll())
        handleCartChange()
    }

    const removeFromCart = (itemId) =>{
        cartItems.remove(itemId);
        console.log(cartItems.getAll())
        handleCartChange()
    }

    const increaseQuantity = (itemId) =>{
        cartItems.increase(itemId);
        console.log(cartItems.getAll())
        handleCartChange()
    }

    const decreaseQuantity = (itemId) =>{
        cartItems.decrease(itemId);
        console.log(cartItems.getAll())
        handleCartChange()
    }

    const reverseVisibility = () =>{
        setIsCartOpen(!isCartOpen)
    }

    const getCartItem = (itemId) =>{
        return cartItems.get(itemId)
    }

    const getCartItems = () =>{
        return cartItems.getAll()
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartItem,
        getCartItems,
        reverseVisibility,
        cartChange,
        isCartOpen
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

ShopContextProvider.propTypes = {
    children: PropTypes.node
}