import PropTypes from "prop-types";
import Button from './button.jsx'

export default function Item({ i, img, name, weight, price,
                             frequentOffers}){

    const item = `${frequentOffers}__item`
    return(
        <article className={item}>
            <img src={img} alt="Item image" className={`${item}__image`}></img>
            <h2 className={`${item}__name`}>Yumbox <br/>{name}</h2>
            <p className={`${item}__weight`}>{weight} гр</p>
            <Button btnClass={`${item}__button`} price={price}></Button>
        </article>
    );
}

Item.propTypes = {
    i: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.number,
    price: PropTypes.number,
    frequentOffers: PropTypes.string,
}

