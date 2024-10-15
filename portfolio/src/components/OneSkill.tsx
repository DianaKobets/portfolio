import React from "react";

function OneSkill({ src, alt }) {
    return (
        <div className=" flex justify-center items-center size-28 rounded-full bg-white bg-opacity-10 mb-8"> 
            <img 
                src={src} 
                alt={alt} 
                className="size-14" 
            /> 
        </div>
    );
}

export default OneSkill;