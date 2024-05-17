import { Navigation , Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sliderImg from './assets/img_slider.png'

export default function Slider(){
    return(
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            
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
        </Swiper>
    );
}
