import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/context";

import check_circle from '../assets/check-circle.svg';

const getQuantity = (getCartItem, id) => {
    const cartItem = getCartItem(id);
    return cartItem ? cartItem.quantity : 0;
}

export default function Button({ id, btnClass, price }){
    const [buttonText, setButtonText] = useState(price + " грн");
    const [added, setAdded] = useState(false);

    const {addToCart, removeFromCart, getCartItem, cartChange } = useContext(ShopContext);

    let cartItemQuantity = getQuantity(getCartItem, id);

    const handleClick = () =>{
        if (!added){
            addToCart(id)
            setAdded(true)
        } else {
            removeFromCart(id);
            setAdded(false);
        }
    }

    // для автоматичного оновлення кнопки при зміні кількості товару в кошику
    useEffect(() => {
        if (cartItemQuantity > 0) {
            setButtonText(
                DOMPurify.sanitize(
                    `<img src='${check_circle}' alt=''>` +
                    "В кошику <b>" + cartItemQuantity + " шт</b> за <b>" + price * cartItemQuantity + " грн</b>"
                ))
            setAdded(true)
        } else {
            setButtonText(price + " грн");
            setAdded(false);
        }
    }, [cartItemQuantity, price, cartChange]);

    const handleMouseEnter = () => {
        if (!added) {
            setButtonText("Добавити в кошик");
        }
    }

    const handleMouseLeave = () => {
        if (!added) {
            setButtonText(price + " грн");
        }
    }

    return(
        <button
            className={`${btnClass} ${added ? 'added' : ''}`} // другий клас додається, якщо added === true
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            dangerouslySetInnerHTML={{__html: buttonText}} // юзається разом з DOMPurify.sanitize
        >
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.number.isRequired,
    btnClass: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};