import React, { useState } from "react";
import main from '../icons/icons8-главная-96.svg';
import NavItem from "./NavItem.tsx";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-stone-950 bg-opacity-50 backdrop-blur-lg text-gray-200 h-20 flex justify-between items-center px-8 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center w-full">
                <Link to='/'>
                    <img
                        src={main}
                        className="block h-10 w-10 hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                        alt="logo"
                    />
                </Link>

                {/* Tablet Menu */}
                <nav className="hidden md:flex space-x-8 ml-auto hover:cursor-pointer">
                    <NavItem href="about_me">{'Обо мне'}</NavItem>
                    <NavItem href="projects">{'Проекты'}</NavItem>
                    <NavItem href="skills">{'Навыки'}</NavItem>
                    <NavItem href="resume">{'Резюме'}</NavItem>
                    <button className="flex place-items-center justify-center text-lg bg-amber-500 text-stone-900 rounded-lg w-44 h-10 hover:bg-amber-600 transition-transform duration-300 hover:scale-105 shadow-md">
                        Написать мне
                    </button>
                </nav>

                <div onClick={handleNav} className="md:hidden z-50 cursor-pointer">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-stone-950 text-gray-200 z-40 transform ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-12 text-3xl">
                    <li onClick={handleNav}>
                        <NavItem href="about_me">{'Обо мне'}</NavItem>
                    </li>
                    <li onClick={handleNav}>
                        <NavItem href="projects">{'Проекты'}</NavItem>
                    </li>
                    <li onClick={handleNav}>
                        <NavItem href="skills">{'Навыки'}</NavItem>
                    </li>
                    <li onClick={handleNav}>
                        <NavItem href="resume">{'Резюме'}</NavItem>
                    </li>
                    <li>
                        <button onClick={handleNav} className="flex place-items-center justify-center text-lg bg-amber-500 text-stone-900 rounded-lg w-44 h-10 hover:bg-amber-600 transition-transform duration-300 hover:scale-105 shadow-md">
                            Написать мне
                        </button>
                    </li>
                </ul>
            </div>

            {nav && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={handleNav}
                ></div>
            )}
        </div>
    );
}

export default Navbar;
