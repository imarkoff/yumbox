import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useState } from "react";

import check_circle from '../assets/check-circle.svg';

export default function Button({btnClass, price }){
    const [buttonText, setButtonText] = useState(price + " грн");
    const [added, setAdded] = useState(false);

    const handleClick = () =>{
        if (!added){
            setButtonText(
                DOMPurify.sanitize(
                    `<img src='${check_circle}' alt=''>` +
                    "В кошику <b>1</b> шт за <b>" + price + " грн</b>"
                ))
            setAdded(true)

        } else {
            setButtonText(price + " грн");
            setAdded(false);
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