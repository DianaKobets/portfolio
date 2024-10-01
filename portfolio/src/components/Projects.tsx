import React, { useState, useEffect } from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide.tsx';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';
import { useLocation } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper/types'; // Импортируем тип Swiper


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Project {
    id: number;
    name: string;
    image: string[];
    "link to repos": string;
    description: string;
    "photos of technologies": string[] | string;
    page: string;
}


function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const location = useLocation(); // используем для отслеживания изменений пути

    useEffect(() => {
        setProjects(projectData);
    }, []);

    useEffect(() => {
        // Принудительное обновление Swiper при изменении маршрута
        const swiperContainer = document.querySelector('.swiper-container') as HTMLDivElement;
        const swiperInstance = swiperContainer?.swiper as SwiperClass | undefined; // Кастинг к типу Swiper

        if (swiperInstance) {
            swiperInstance.update(); // вызываем метод update на инстансе Swiper
        }
    }, [location]); // обновляем Swiper при изменении маршрута

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
                    rotate: 0,
                    stretch: 0,
                    depth: 600,
                    modifier: 2,
                }}
                spaceBetween={0}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper-container -top-12 mx-auto"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <Link to={`/ProjectPage/${project.id}`}>
                            <Slide src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Projects;
