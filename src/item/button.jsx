import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useState, useContext } from "react";
import { ShopContext } from "../context/context";

import check_circle from '../assets/check-circle.svg';

export default function Button({ btnClass, price, id}){
    const [buttonText, setButtonText] = useState(price + " грн");
    const [added, setAdded] = useState(false);

    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    const handleClick = () =>{
        if (!added){
            {/* Тут добавив щоб відображалося загальна кількість замовлених ітемів + ціна в залежності від цього */}
            setButtonText(
                DOMPurify.sanitize(
                    `<img src='${check_circle}' alt=''>` +
                    "В кошику <b>" + cartItemAmount + " шт</b> за <b>" + price * cartItemAmount + " грн</b>"
                ))
            setAdded(true)
            addToCart(id)
        } else {
            setButtonText(price + " грн");
            setAdded(false);
            removeFromCart(id);
        }
    }

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
    btnClass: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};