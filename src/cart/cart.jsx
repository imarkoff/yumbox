import { useContext, useEffect, useRef } from "react"
import { allProducts } from "../products"
import { ShopContext } from "../context/context"
import CartItem from "./cart-item"
import cross from "../assets/cart/cross.svg"
import "../css/cart/cart.css"

export default function Cart() {
    const { getCartItems, isCartOpen, reverseVisibility, closeCart, totalPrice, delivery } = useContext(ShopContext)

    const cartClass = 'cart'
    const cartImage = `${cartClass}__img`
    const headingClass = `${cartClass}__heading`

    const cartItems = getCartItems() // return array : id, quantity

    const ref = useRef(null);

    // close cart when click outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref?.current?.contains(e.target)) {
            closeCart()
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    });

    // output cart items in console
    const getConsoleOrder = () => {
        let order = getCartItems()
        let i = 1

        console.clear()
        console.log("Замовлення: ")
        order.map((product) => {
            const item = allProducts.find(item => item.id === product.id)

            console.log(`${i}) ${item.name} | ${product.quantity}шт * ${item.price}грн | ${product.quantity * item.price}грн`)
            i++
        })
        console.log(`Сума: ${totalPrice}грн`)
    }

    const myStyle1 = {
        backgroundColor: "#222222",
        marginTop: "30px",
        marginLeft: "-30px",
        marginRight: "-30px",
        padding: "30px",
        borderTopRightRadius: "30px",
        borderTopLeftRadius: "30px",
        position: "relative",
        bottom: "0px",
    }
    const myStyle2 = {
        display: "flex",
        justifyContent: "space-between",
    }
    const myStyle3 = {
        width: "100%",
        height: "66px",
        borderRadius: "63px",
        backgroundColor: "#FCB852",
        color: "black",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer"
    }

    return (
        <>
            <div
                className={`blur ${isCartOpen ? "opened" : " "}`}
            ></div>
            <div className={`${cartClass}  ${isCartOpen ? 'opened' : ''}`} ref={ref}>
                <div className={cartImage}>
                    <h1 className={headingClass}>Корзина</h1>
                    <button
                        onClick={() => {
                            reverseVisibility()
                        }}
                    >
                        <img src={cross} alt=""></img>
                    </button>
                </div>
                <div className={`${cartClass}__items`}>
                    {cartItems.map((product, i) => {
                        const item = allProducts.find(item => item.id === product.id)

                        return (<CartItem key={i} quantity={product.quantity} product={item}></CartItem>)
                    })}
                </div>
                <div className={`${cartClass}__delivery`} style={myStyle1}>
                    <div className={`${cartClass}__delivery-inner`} style={myStyle2}>
                        <h3>Доставка</h3>
                        <h2>{delivery} ₴</h2>
                    </div>
                    <button
                        style={myStyle3}
                        onClick={() => getConsoleOrder()}
                    >
                        Оформити за {totalPrice} ₴
                    </button>
                </div>
            </div>
        </>
    )
}