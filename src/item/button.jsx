import PropTypes from "prop-types";
import { useState } from "react";

export default function Button({ price }){
    const [buttonText, setButtonText] = useState(price + " грн");
    const [added, setAdded] = useState(false);

    const handleClick = () =>{
        if (!added){
            setButtonText("✅ В кошику 1 шт за " + price + " грн")
            setAdded(true);
        } else {
            setButtonText(" " + price + " грн");
            setAdded(false);
        }
    }

    return(
        <button id="item_button" onClick={handleClick}>{buttonText}</button>
    );
}

Button.propTypes = {
  price: PropTypes.number.isRequired,
};