import React from "react";
import main from '../icons/icons8-главная-96.svg';
import NavItem from "./NavItem.tsx";
import { Route, Routes } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-stone-950 bg-opacity-50 backdrop-blur-lg text-gray-200 h-20 flex w-full items-center px-8 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
            <div className="img-container">
                <img src={main} className="block h-10 w-10 hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out" alt="logo" />
            </div>
                <Routes>
                <nav className="flex space-x-8 ml-auto">
                   <Route> <NavItem href="#about_me">{'Обо мне'}</NavItem></Route>
                   <Route> <NavItem href="#projects">{'Проекты'}</NavItem></Route>
                   <Route><NavItem href="#skills">{'Навыки'}</NavItem></Route>
                   <Route> <NavItem href="#resume">{'Резюме'}</NavItem></Route>
                   <Route><NavItem href="#contacts">{'Контакты'}</NavItem></Route>
                    <button className="flex place-items-center justify-center text-lg bg-amber-500 text-stone-900 rounded-full w-44 h-10 hover:bg-amber-600 transition-transform duration-300 hover:scale-105 shadow-md">
                        Написать мне
                    </button>
                </nav>
                </Routes>
        </div>
    );
}

export default Navbar;
