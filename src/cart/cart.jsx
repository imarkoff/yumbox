import {useContext, useEffect, useState} from "react"
import { allProducts } from "../products"
import { ShopContext } from "../context/context"
import CartItem from "./cart-item"
import cross from "../assets/cart/cross.svg"
import "../css/cart/cart.css"

{/* Во гайд по якому я все це робив
    https://www.youtube.com/watch?v=tEMrD9t85v4&ab_channel=PedroTech
    Скоріше всього проблеми саме в css/scss файлах бо все робив +- по гайду 
*/}

export default function Cart() {
    const { getCartItems, isCartOpen, reverseVisibility, cartChange } = useContext(ShopContext)

    const cartClass = 'cart'
    const cartImage = `${cartClass}__img`
    const headingClass = `${cartClass}__heading`

    const cartItems = getCartItems() // return array : id, quantity

    const [totalPrice, setTotalPrice] = useState(0);
    const delivery = 50;

    // TODO варто перевести це до context
    useEffect(() => {
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

        // заокруглення до 2 знаків після коми
        tempTotalPrice = tempTotalPrice.toFixed(2)

        setTotalPrice(tempTotalPrice)
    }, [cartItems, cartChange]);

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
            <div>
                <div>
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