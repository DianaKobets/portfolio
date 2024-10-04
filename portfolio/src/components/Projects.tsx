import React, { useState, useEffect, useRef } from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide.tsx';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';
import { useLocation } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper/types';


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
    const location = useLocation();
    const swiperRef = useRef<SwiperClass | null>(null)

    useEffect(() => {
        setProjects(projectData);
    }, []);

    useEffect(() => {
        if (swiperRef.current && projects.length > 0) {
          swiperRef.current.update();
        }
      }, [projects]);
      

      const handleNextSlide = () => {
        if (swiperRef.current)
            swiperRef.current.slideNext();
      };

      const handlePrevSlide = () => {
        if (swiperRef.current)
            swiperRef.current.slidePrev();
      };


    return (
        <div className="flex flex-col w-full justify-center relative text-gray-200 bg-stone-900 text-5xl p-8" id="projects">
            <h1 className="inline-block text-5xl font-bold tracking-wide text-center pb-24">Мои проекты</h1>

            <button className="custom-prev-button bg-amber-500 bg-opacity-80 px-4 py-2 absolute left-48 top-1/2 rounded-full z-10 bg-blend"
                onClick={handlePrevSlide}
            >
                &#5176;
            </button>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Pagination, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className=" -top-12 w-[32rem]"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <Link to={`/ProjectPage/${project.id}`}>
                            <Slide src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
                    
            <button
                className="custom-prev-button bg-amber-500 bg-opacity-70 px-4 py-2 absolute right-48 top-1/2 rounded-full"
                onClick={handleNextSlide}
            >
                &#5171;
            </button>

            
        </div>
    );
}

export default Projects;
