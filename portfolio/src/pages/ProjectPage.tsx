import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import Projects from "../components/Projects.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import projectData from '../data/projects.json';

function ProjectPage() {
    const { id } = useParams<{ id: string }>(); 
    const project = projectData.find(p => p.id === parseInt(id || "", 10)); 

    if (!project) return <span>Проект не найден</span>;

    return (
        <div className="flex lg:flex-row flex-col w-full justify-between text-gray-200 bg-stone-900 lg:py-10 px-10">
            <div className="relative lg:w-1/2 h-full mt-10">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    pagination={{el: '.swiper-pagination', clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-full rounded-xl"
                >
                    {Array.isArray(project.image)
                        ? project.image.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={project.name} />
                            </SwiperSlide>
                        ))
                        : (
                            <SwiperSlide>
                                <img src={project.image} alt={project.name} />
                            </SwiperSlide>
                        )}
                        
                </Swiper>
                <div className="swiper-pagination"/>
            </div>

            <div className="lg:w-1/2 pl-10">
                <h1 className="text-5xl font-bold tracking-wide drop-shadow-md text-center my-6">{project.name}</h1>
                <p className="text-xl mb-4">{project.description}</p>

                <div className="mx-auto items-center flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Стек</h2>
                    <div className="flex space-x-4">
                        {Array.isArray(project["photos of technologies"])
                            ? project["photos of technologies"].map((tech, index) => (
                                <img key={index} src={tech} alt={`Technology ${index}`} className="size-12" />
                            ))
                            : <img src={project["photos of technologies"]} alt="Technology" className="size-12" />}
                    </div>

                    <a href={project["link to repos"]} className="my-8 px-8 py-4 bg-transparent text-gray-200 border-2 border-gray-200 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-600">
                        Репозиторий на GitHub
                    </a>


                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
