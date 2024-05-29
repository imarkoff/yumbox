import "../css/cart/cart.css"

import bin from "../assets/cart/bin.svg"
import minus from "../assets/cart/minus.svg"
import plus from "../assets/cart/plus.svg"

export default function cartItem(props){
    const { id, name, img, weight, price } = props.data;
    const { addToCart, removeFromCart, cartItems, removeFromCartTotally} = useContext(ShopContext);

    const cartItemClass = 'cart-item'
    const cartItemName = `${cartItemClass}__name`
    const cartItemWeight = `${cartItemClass}__weight`
    const cartItemPrice = `${cartItemClass}__price`
    const cartItemQuantity = `${cartItemClass}__quantity`
    const cartItemBin = `${cartItemClass}__bin`

    return (
        <>
            <div className={cartItemClass}>
                <div className="section1">
                    <img src={img} alt="Product img"></img>
                </div>
                <div className="section2">
                    <div className={cartItemName}>{name}</div>
                    <div className={cartItemWeight}>{weight}</div>
                    <button onClick={() => {removeFromCartTotally(id)}}>
                        <img src={bin} className={cartItemBin}></img>
                    </button>
                </div>
                <hr></hr>
                <div className="section3">
                    <h1 className={cartItemPrice}>{price} ₴</h1>
                    <div>
                        <button onClick={removeFromCart(id)}><img src={minus}></img></button>
                        <span className={cartItemQuantity}>{cartItems[id]}</span>
                        <button onClick={addToCart(id)}><img src={plus}></img></button>
                    </div>
                </div>
            </div>
        </>
    )
}