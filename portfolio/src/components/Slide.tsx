import React from "react";

function Slide({ src, alt }) {
    return (
        <div className="md:w-[32rem] w-60 h-max lg:mx-auto mx-[6rem] mt-20"> 
            <img 
                src={src} 
                alt={alt} 
                className=" w-full h-full rounded-lg mx-auto" 
            /> 
        </div>
    );
}

export default Slide;
