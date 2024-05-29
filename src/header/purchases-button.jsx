import { useContext } from "react"
import { ShopContext } from "../context/context"
import Cart from "../cart/cart"

export default function PurchasesButton() {
    const purchasesClass = 'purchases'
    const {cartItems, reverseVisibility, isCartOpen} = useContext(ShopContext)

    return (
        <>
        <button 
            className={`${purchasesClass}`}
            onClick={() => {reverseVisibility()}}
        >
            <span className={`${purchasesClass}__quantity`}>0</span>
            <span className={`${purchasesClass}__price`}>0 грн</span>
        </button>
        {/* Я задокументовав Cart бо через криві стилі сайту погано чуть */}
        {/* <Cart
            opened = {isCartOpen}
        >
        </Cart> */}
        </>
    )
}