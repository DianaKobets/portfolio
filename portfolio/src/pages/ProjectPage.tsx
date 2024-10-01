import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import projectData from '../data/projects.json';
import css from '../icons/css.svg'; 

function ProjectPage() {
    const { id } = useParams<{ id: string }>(); 
    const project = projectData.find(p => p.id === parseInt(id || "", 10)); 

    if (!project) return <span>Проект не найден</span>;

    return (
        <div className="flex flex-row w-full justify-between items-center text-gray-200 bg-stone-900 py-10 px-10">
            <div className="relative w-1/2">
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
                    className="w-full h-full"
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

                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <button className="w-10 h-10 rounded-full bg-white bg-opacity-40 flex items-center justify-center text-2xl text-black hover:bg-opacity-70">
                        &#8249;
                    </button>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <button className="w-10 h-10 rounded-full bg-white bg-opacity-40 flex items-center justify-center text-2xl text-black hover:bg-opacity-70">
                        &#8250;
                    </button>
                </div>
            </div>

            <div className="w-1/2 pl-10">
                <h1 className="text-5xl font-bold tracking-wide drop-shadow-md text-center mb-6">{project.name}</h1>
                <p className="text-xl mb-6">{project.description}</p>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Стек</h2>
                    <div className="flex space-x-4">
                        {Array.isArray(project["photos of technologies"])
                            ? project["photos of technologies"].map((tech, index) => (
                                <img key={index} src={tech} alt={`Technology ${index}`} className="w-12 h-12" />
                            ))
                            : <img src={project["photos of technologies"]} alt="Technology" className="w-12 h-12" />}
                    </div>
                </div>

                <a href={project["link to repos"]} className="inline-block mt-8 px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 shadow-md">
                    Репозиторий на GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectPage;
