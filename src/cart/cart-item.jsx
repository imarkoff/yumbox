import "../css/cart/cart.css"

import { useContext } from "react"
import { ShopContext } from "../context/context"

import bin from "../assets/cart/bin.svg"
import minus from "../assets/cart/minus.svg"
import plus from "../assets/cart/plus.svg"
import PropTypes from "prop-types";

export default function CartItem({ quantity, product }) {
    const { id, name, img, weight, price } = product;
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ShopContext);

    const cartItemClass = 'cart-item'
    const cartItemImage = `${cartItemClass}__img`
    const cartItemName = `${cartItemClass}__name`
    const cartItemWeight = `${cartItemClass}__weight`
    const cartItemPrice = `${cartItemClass}__price`
    const cartItemQuantity = `${cartItemClass}__quantity`
    const cartItemBin = `${cartItemClass}__bin`

    return (
        <>
            <div className={cartItemClass}>
                <div className="section0">
                    <img src={img} alt="Product img" className={cartItemImage}></img>
                    <div className="section2">
                        <div className={cartItemName}>{name}</div>
                        <div className={cartItemWeight}>{weight} гр</div>
                    </div>
                    <button onClick={() => { removeFromCart(id) }}>
                        <img src={bin} className={cartItemBin} alt="remove"></img>
                    </button>
                </div>

                <hr></hr>
                <div className="section3">
                    <h1 className={cartItemPrice}>{price * quantity} ₴</h1>
                    <div className="section4">
                        <button onClick={() => { decreaseQuantity(id) }}><img src={minus} alt="decrease"></img></button>
                        <span className={cartItemQuantity}>{quantity}</span>
                        <button onClick={() => { increaseQuantity(id) }}><img src={plus} alt="increase"></img></button>
                    </div>
                </div>
            </div>
        </>
    )
}

CartItem.propTypes = {
    quantity: PropTypes.number,
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        weight: PropTypes.number,
        price: PropTypes.number
    })
}