import React from "react";
import me from '../icons/me.svg';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="w-full h-full -mt-20 pt-20 bg-stone-700 text-gray-200">
            <div className="wrapper relative flex flex-col lg:flex-row justify-between pt-16 pb-8 px-12" id="about_me">
                <div className="bg-black bg-opacity-40 rounded-[40px] flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold text-white pt-4">
                            Давайте познакомимся
                            <hr className="block ml-6 mt-4 mb-4 border-t-2 border-t-amber-500 w-[42rem]" />
                        </h1>
                        <span className="block text-xl text-justify font-thin text-white w-[42rem] pt-5 pl-3">
                            Добрый день! Меня зовут Диана Кобец. Я начинающий фронтенд-разработчик. Мой стек: TypeScript, React, SASS, Tailwind, Node.js. Обучаюсь в МГТУ им. Н. Э. Баумана на 3 курсе по направлению “Прикладная математика”. В свободное от учебы время уделяю внимание спорту и творчеству. Люблю учиться новому и умею принимать критику. Быстро нахожу общий язык с новыми людьми и вливаюсь в компании.
                        </span>
                        <a href="#projects">
                            <span className="block text-amber-500 text-6xl font-thin mt-8 w-16 ml-[19rem] arrow-button">&#709;</span>
                        </a>
                    </div>
                </div>

                <div className="flex-shrink-0 mt-12 lg:mt-0 lg:ml-12">
                    <div className="relative">
                        <div className="absolute top-0 right-0 bg-black opacity-40 rounded-[40px] h-[500px] w-[400px] left-1 blur-xl" />
                        <img src={me} alt="me" className="relative h-[450px] w-[350px] z-10" />
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
