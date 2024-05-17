import PropTypes from "prop-types";
import Button from './button.jsx'

export default function Item({ i, img, name, weight, price }){
    return(
        <article id="item">
            <img src={img} alt="Item image" id="item_image"></img>
            <h2 id="item_name">Yumbox <br/>{name}</h2>
            <p id="item_weight">{weight} гр</p>
            <Button id="item_button" price={price}></Button>
        </article>
    );
}

Item.propTypes = {
    i: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.number,
    price: PropTypes.number
}

