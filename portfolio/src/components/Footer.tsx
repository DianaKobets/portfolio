import React from "react";
import git from '../icons/git.svg';
import tg from '../icons/tg.svg';
import mail from '../icons/mail.png';

function Footer() {
    return (
        <div className="flex lg:flex-row flex-col lg:h-28 h-fit max-w-full bg-stone-950 text-gray-200 justify-evenly p-4 font-semibold leading-relaxed tracking-wider gap-5">
            <div className="flex flex-col lg:gap-2 gap-3">
                <h6>Контакты</h6>
                <div className="flex flex-row lg:gap-1.5 gap-2 lg:size-32">
                    <a href="https://t.me/skidiko" target="_blank" rel="noopener noreferrer">
                        <img src={tg} className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer" alt="Telegram" />
                    </a>
                    <a href="https://github.com/DianaKobets" target="_blank" rel="noopener noreferrer">
                        <img src={git} className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer" alt="GitHub" />
                    </a>
                    <a href="mailto:dianacobets@yandex.ru" className=" size-8 bg-neutral-400 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer">
                        <img src={mail} className="p-1" alt="Email" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:gap-2 gap-3">
                <h6 className="">Резюме</h6>
                <button className="font-thin border-gray-200 border-[1px] px-3 py-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-60">
                    <a href="https://reutov.hh.ru/resume/f8aa82adff0cad767d0039ed1f4b6f71574e38" target="_blank" rel="noopener noreferrer">
                        Открыть резюме &#x2192;
                    </a>
                </button>
            </div>
            <span className="copyright lg:my-auto lg:mr-5 mx-auto pt-5">&#169;skidiko 2024</span>
        </div>
    );
}

export default Footer;
