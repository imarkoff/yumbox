import { useRef } from 'react';
import { Navigation , Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sliderImg from './assets/img_slider.png'

export default function Slider(){
    const swiperRef = useRef(null);

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
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src={sliderImg} alt='slider image'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg} alt='slider image'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg} alt='slider image'></img>
                </SwiperSlide>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            <div className="swiper-controls">
                <div className="swiper-button-prev" onClick={onPrev}></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next" onClick={onNext}></div>
            </div>
        </>
    );
}