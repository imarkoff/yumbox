import { createContext, useState, useEffect } from "react";
import { allProducts } from "../products"
import PropTypes from "prop-types";

export const ShopContext = createContext(null);

//Цей файл для того щоб могти глобально знати які ітеми в корзині

// Клас для товарів в корзині
class CartItems {
    constructor() {
        this.items = []
    }

    // додає товар в корзину
    add(itemId) {
        this.items.push({
            id: itemId,
            quantity: 1
        })
    }

    // видаляє товар з корзини
    remove(itemId) {
        this.items = this.items.filter(item => item.id !== itemId)
    }

    // перевіряє чи є товар в корзині
    checkIfItemExists(itemId) {
        return this.items.some(item => item.id === itemId)
    }

    // повертає товар по id
    get(itemId) {
        return this.items.find(item => item.id === itemId)
    }

    // повертає всі товари в корзині
    getAll() {
        return this.items
    }

    // збільшує кількість товару в корзині
    increase(itemId) {
        if (this.checkIfItemExists(itemId)) {
            this.items.forEach(item => {
                if (item.id === itemId) {
                    item.quantity += 1;
                }
            })
        }
    }

    // зменшує кількість товару в корзині. Якщо кількість товару стане 0, то видаляємо товар з корзини
    decrease(itemId) {
        if (this.checkIfItemExists(itemId)) {
            const item = this.get(itemId);

            if (item.quantity === 1) {
                this.remove(itemId);
                return;
            }

            this.items.forEach(item => {
                if (item.id === itemId) {
                    item.quantity -= 1;
                }
            })
        }
    }
}

export default function ShopContextProvider(props) {
    const [cartItems] = useState(new CartItems());
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartChange, setCartChange] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const delivery = 50;

    useEffect(() => {
        let cartItems = getCartItems();
        let tempTotalPrice = 0;

        // підрахунок загальної ціни
        cartItems.forEach((item) => {
            const product = allProducts.find(product => product.id === item.id);
            tempTotalPrice += product.price * item.quantity;
        });

        // додаткова знижка
        if (tempTotalPrice > 1000) {
            tempTotalPrice = tempTotalPrice * 0.9
        }

        // сума доставки
        tempTotalPrice += delivery;

        // заокруглення до 0 знаків після коми
        tempTotalPrice = tempTotalPrice.toFixed(0)

        setTotalPrice(tempTotalPrice)
    }, [cartItems, cartChange]);

    useEffect(() => {
        let cartItems = getCartItems();
        let Quantity = 0;

        cartItems.forEach((item) => {
            Quantity += item.quantity;
        });

        setTotalQuantity(Quantity);
    }, [cartItems, cartChange])

    // для зміни стану cartChange (оновлення кошика)
    const handleCartChange = () => {
        setCartChange(prevState => prevState + 1);
    }

    const addToCart = (itemId) => {
        cartItems.add(itemId);
        handleCartChange()
    }

    const removeFromCart = (itemId) => {
        cartItems.remove(itemId);
        handleCartChange()
    }

    const increaseQuantity = (itemId) => {
        cartItems.increase(itemId);
        handleCartChange()
    }

    const decreaseQuantity = (itemId) => {
        cartItems.decrease(itemId);
        handleCartChange()
    }

    const reverseVisibility = () => {
        setIsCartOpen(!isCartOpen)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }

    const getCartItem = (itemId) => {
        return cartItems.get(itemId)
    }

    const getCartItems = () => {
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
        closeCart,
        cartChange,
        isCartOpen,
        totalPrice,
        totalQuantity,
        delivery
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

ShopContextProvider.propTypes = {
    children: PropTypes.node
}