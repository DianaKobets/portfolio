import React from "react";
import main from '../icons/icons8-главная-96.svg'
import NavItem from "./NavItem.tsx";

function Navbar(){
    return(
        <div className="bg-stone-950 bg-opacity-40 backdrop-blur-md text-gray-200 h-20 flex w-full items-center p-8 sticky top-0 z-50 shadow-md">
            <div className="img-container">
                <img src={main} className="block size-10 hover:cursor-pointer" alt="logo" />
            </div>
            <nav className="flex space-x-4 ml-auto">
                <NavItem>{'Обо мне'}</NavItem>
                <NavItem>{'Проекты'}</NavItem>
                <NavItem>{'Навыки'}</NavItem>
                <NavItem>{'Резюме'}</NavItem>
                <NavItem>{'Контакты'}</NavItem>
                <button className="flex place-items-center justify-center text-lg bg-amber-500 text-stone-900 rounded-xl w-52 h-10 hover:bg-amber-600 duration-200">
                    Написать мне
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
