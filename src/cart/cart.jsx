import { useContext } from "react"
import { allProducts } from "../products"
import { ShopContext } from "../context/context"
import CartItem from "./cart-item"
import cross from "../assets/cart/cross.svg"
import "../css/cart/cart.css"

{/* Во гайд по якому я все це робив
    https://www.youtube.com/watch?v=tEMrD9t85v4&ab_channel=PedroTech
    Скоріше всього проблеми саме в css/scss файлах бо все робив +- по гайду 
*/}

export default function Cart(opened) {
    const { cartItems } = useContext(ShopContext)

    const cartClass = 'cart'
    const cartImage = `${cartClass}__img`
    const headindClass = `${cartClass}__heading`
    var price = 20

    return (
        <>
        {/* тут постарався зробити як в тебе але не робить */}
        <div className={`${cartClass}  ${opened ? 'opened' : ''}`}>
            <div className={cartImage}>
                <h1 className={headindClass}>Корзина</h1>
                <img src={cross}></img>
            </div>
            <div>
                {allProducts.map((product) => {
                    if (cartItems[product.id] != 1) {
                        return <CartItem data={product}></CartItem>
                    }
                })}
            </div>
            <div>
                <div>
                    <h3>
                        Доставка
                    </h3>
                    <h2>
                        50 ₴
                    </h2>
                </div>
                <button>
                    Оформити за {price} ₴
                </button>
            </div>
        </div>
        </>
    )
};