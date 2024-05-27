import PropTypes from "prop-types";

import sticker from '../assets/slider/sticker.svg'

export default function Slide({ id, name, img, price }) {
    const sliderDiv = 'swiper-slide'
    const sliderDesription = `${sliderDiv}__description`
    return (
        <>
            <input type="hidden" value={id} className={`${sliderDiv}__id`}/>
            <img src={img} alt={name} className={`${sliderDiv}__image`}/>
            <div className={sliderDesription}>
                <p className={`${sliderDesription}__name`}>{name}</p>
                <p className={`${sliderDesription}__price`}>{price} грн</p>
            </div>
            <img src={sticker} alt="Найсмачніші бокси" className={`${sliderDiv}__sticker`}/>
        </>
    );
}

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};