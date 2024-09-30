import React from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide.tsx'

import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';

import me from '../icons/me.svg';
import git from '../icons/git.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function Projects(){
    return (
        <div className="flex flex-col w-full justify-center relative text-gray-200 bg-stone-900 text-5xl p-8" id="projects">
            <h1 className="inline-block text-5xl font-bold tracking-wide text-white drop-shadow-md text-center pb-24">Мои проекты</h1>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth: 600,
                modifier: 2,
            }}
            spaceBetween={0}

            pagination={{el: '.swiper-pagination', clickable: true}}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container -top-12 mx-auto"
            >
                <SwiperSlide>
                    <Slide src={me} alt='me'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={git} alt='me'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={me} alt='me'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={me} alt='me'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={me} alt='me'/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Projects;
