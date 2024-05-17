import { useState } from "react";

export default function Button(props){
    let total = document.getElementById("total");
    const [buttonText, setButtonText] = useState(props.price + " грн");
    const [added, setAdded] = useState(false);
    
    const handleClick = () =>{
        if (added == false){
            setButtonText("✅ В кошику 1 шт за " + props.price + " грн")
            setAdded(true);
        } else {
            setButtonText(" " + props.price + " грн");
            setAdded(false);
        }
    }

    return(
        <button id="item_button" onClick={handleClick}>{buttonText}</button>
    );
}
