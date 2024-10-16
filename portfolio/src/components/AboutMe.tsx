import React from "react";
import me from '../img/me.svg';
import git from '../icons/git.svg';
import tg from '../icons/tg.svg';

import './AboutMe.css';

function AboutMe() {

    return (
        <div className="w-full overflow-hidden bg-stone-900 text-gray-200 flex flex-col justify-center items-center" id='about_me'>
            <div className="wrapper lg:w-fit w-full max-w-7xl flex flex-col items-center lg:flex-row lg:items-center justify-between px-7">
                
                <div className="glassmorphism-card flex-1 flex flex-col items-center text-center justify-center lg:px-3 shadow-2xl lg:mr-12 z-20 bg-stone-900 relative lg:mt-10 mt-96">
                    <h1 className="lg:text-5xl text-4xl font-bold text-white drop-shadow-md text-center p-7 pb-5">
                        Давайте познакомимся
                    </h1>
                    <hr className="w-[40%] lg:w-[30%] mx-auto lg:my-4 mb-4 border-t-2 border-t-amber-500" />
                    <p className="lg:text-xl text-lg lg:leading-relaxed text-gray-300 lg:tracking-wide font-light w-full lg:w-[38rem] px-5 text-pretty">
                        Добрый день! Меня зовут Диана Кобец. Я начинающий фронтенд-разработчик. Мой стек: TypeScript, React, SASS, Tailwind, Node.js. Обучаюсь в МГТУ им. Н. Э. Баумана на 3 курсе по направлению “Прикладная математика”. В свободное от учебы время уделяю внимание спорту и творчеству. Люблю учиться новому и умею принимать критику. Быстро нахожу общий язык с новыми людьми и вливаюсь в компании.
                    </p>
                    <button onClick={()=>scrollToProjects('projects')} className="inline-block lg:mt-6 my-4 w-[4.5rem] bg-amber-500 rounded-full shadow-lg hover:bg-amber-600 transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <span className="text-white text-4xl font-thin">&#709;</span>
                    </button>
                </div>

                
                <div className=" lg:flex-shrink-0 mt-20 lg:mt-6 lg:ml-24 lg:relative overflow-hidden absolute mx-7 z-10 top-4">
                    <div className="photo-wrapper lg:h-[450px] lg:w-[350px] rounded-[40px] overflow-hidden">
                        <img src={me} alt="me" className="me h-full w-full object-cover rounded-[40px] shadow-xl" />
                        
                        <div className="hover-shadow absolute bottom-0 left-0 w-full h-1/3 opacity-0 transition-opacity duration-300"/>
                        
                        <div className="social-icons absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 flex space-x-4">
                            <a href="https://github.com/DianaKobets" target="_blank" rel="noopener noreferrer">
                                <img src={git} className="w-12 " alt="GitHub" />
                            </a>
                            <a href="https://t.me/skidiko" target="_blank" rel="noopener noreferrer">
                                <img src={tg} className="w-12" alt="Telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-transparent w-full h-16 font-medium text-5xl text-gray-200 border-amber-500 border-t-4 border-b-4 overflow-hidden mt-12">
                <span className="scroll-text">этот сайт создан с целью демонстрации имеющихся навыков</span>
            </div>
        </div>
    );
}

export default AboutMe;

export const scrollToProjects = (id: string) => {
    const projectsSection = document.getElementById(id);
    if (projectsSection)
        projectsSection.scrollIntoView({behavior: 'smooth'})
};