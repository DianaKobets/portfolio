import React from "react";
import OneSkill from "./OneSkill.tsx";
import bootstrap from '../icons/bootstrap.svg';
import css from '../icons/css.svg';
import html from '../icons/html.svg';
import node from '../icons/node.svg';
import react from '../icons/react.svg';
import swiper from '../icons/swiper.svg';
import tailwind from '../icons/tailwind.svg';
import ts from '../icons/ts.svg';

function Skills(){
    return (
        <div className="flex flex-col items-center lg:mt-16" id='skills'>
            <h1 className="text-5xl text-gray-200 font-bold">Мои навыки</h1>
            <div className="md:columns-4 columns-2 gap-8 my-16">
                <OneSkill src={bootstrap} alt="bootstrap-icon" />
                <OneSkill src={css} alt="css-icon" />
                <OneSkill src={html} alt="html-icon"/>
                <OneSkill src={node} alt="node-js-icon"/>
                <OneSkill src={react} alt="react-icon"/>
                <OneSkill src={swiper} alt="swiper-icon"/>
                <OneSkill src={tailwind} alt="tailwind-icon"/>
                <OneSkill src={ts} alt="type-script-icon"/>
            </div>
        </div>
    );
}

export default Skills;