import {useContext, useEffect, useState} from "react"
import { allProducts } from "../products"
import { ShopContext } from "../context/context"
import CartItem from "./cart-item"
import cross from "../assets/cart/cross.svg"
import "../css/cart/cart.css"

export default function Cart() {
    const { getCartItems, isCartOpen, reverseVisibility, totalPrice, delivery } = useContext(ShopContext)

    const cartClass = 'cart'
    const cartImage = `${cartClass}__img`
    const headingClass = `${cartClass}__heading`

    const cartItems = getCartItems() // return array : id, quantity

    return (
        <>
        <div className={`${cartClass}  ${isCartOpen ? 'opened' : ''}`}>
            <div className={cartImage}>
                <h1 className={headingClass}>Корзина</h1>
                <button
                    onClick={() => {reverseVisibility()}}
                >
                    <img src={cross} alt=""></img>
                </button>
            </div>
            <div>
                {cartItems.map((product, i) => {
                    const item = allProducts.find(item => item.id === product.id)

                    return ( <CartItem key={i} quantity={product.quantity} product={item}></CartItem> )
                })}
            </div>
            <div className="container1">
                <div className="container1-inner">
                    <h3>
                        Доставка
                    </h3>
                    <h2>
                        {delivery} ₴
                    </h2>
                </div>
                <button>
                    Оформити за {totalPrice} ₴
                </button>
            </div>
        </div>
        </>
    )
}