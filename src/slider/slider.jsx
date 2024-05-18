import { useRef } from 'react';
import { Navigation , Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sliderImg from '../assets/img_slider.png'
import Slide from "./slide.jsx";

const sliderProducts = [
    {
        id: 1,
        name: "сет 21",
        img: sliderImg,
        price: 934,
    },
    {
        id: 2,
        name: "сет 22",
        img: sliderImg,
        price: 934,
    },
    {
        id: 3,
        name: "сет 23",
        img: sliderImg,
        price: 934,
    },
]

export default function Slider(){
    const swiperRef = useRef(null);

    // ще один костиль, для продублюваних кнопок знизу слайдера
    const onNext = () => {
        swiperRef.current.swiper.slideNext();
    }

    const onPrev = () => {
        swiperRef.current.swiper.slidePrev();
    }

    return(
        <>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {sliderProducts.map(product => {
                    return <SwiperSlide key={product.id}>
                        <Slide id={product.id} name={product.name} img={product.img} price={product.price}/>
                    </SwiperSlide>
                })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
            <div className="swiper-controls">
                <div className="swiper-button-prev" onClick={onPrev}></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next" onClick={onNext}></div>
            </div>
        </>
    );
}