import React from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import me from '../icons/me.svg';



function Projects(){
    return (
        <div className="flex justify-center relative top-14s text-gray-200 bg-stone-700 text-5xl p-20" id="projects">
            <h1 className="font-semibold">Мои проекты</h1>
            <div>
                <button className="block pb-1 rounded-full bg-stone-200 bg-opacity-50 size-20 text-thin">&#5171;</button>
                <button className="block pb-1 rounded-full bg-stone-200 bg-opacity-50 size-20 text-thin">&#5176;</button>
            </div>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide><img src={me}/></SwiperSlide>
      <SwiperSlide><img src={me}/></SwiperSlide>
      <SwiperSlide><img src={me}/></SwiperSlide>
      <SwiperSlide><img src={me}/></SwiperSlide>
      ...
    </Swiper>
        </div>
    );
}

export default Projects;
