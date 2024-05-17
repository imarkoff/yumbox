import PropTypes from "prop-types";
import { useState } from "react";

export default function Button({btnClass, price }){
    const [buttonText, setButtonText] = useState(price + " грн");
    const [added, setAdded] = useState(false);

    const handleClick = () =>{
        if (!added){
            setButtonText("✅ В кошику 1 шт за " + price + " грн")
            setAdded(true)

        } else {
            setButtonText(" " + price + " грн");
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
        >
            {buttonText}
        </button>
    );
}

Button.propTypes = {
    btnClass: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};