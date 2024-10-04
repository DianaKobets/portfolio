import React from "react";
import git from '../icons/git.svg';
import tg from '../icons/tg.svg';
import phone from '../icons/phone.svg'

function Footer(){
    return(
        <div className="flex flex-row h-32 bg-stone-950 text-gray-200 justify-evenly p-6 font-semibold leading-relaxed tracking-wider">
           <div className="flex flex-col gap-2">
                <h6>Контакты</h6>
                <div className="flex flex-row size-8 gap-1.5 ">
                    <img src={tg} className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer"/>
                    <img src={git} className="transition-transform duration-300 ease-in-out transform hover:scale-110  hover:cursor-pointer"/>
                    <img src={phone} className="transition-transform duration-300 ease-in-out transform hover:scale-110  hover:cursor-pointer"/>
                </div>
            </div>
            <div className="flex flex-col px-80 gap-2">
                <h6 className="">Резюме</h6>
                <button className=" font-thin border-gray-200 border-[1px] px-3 py-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-60">Открыть резюме    &#x2192;</button>
            </div>
            <span className="copyright my-auto">&#169;skidiko 2024</span>
        </div>
    );
}

export default Footer;