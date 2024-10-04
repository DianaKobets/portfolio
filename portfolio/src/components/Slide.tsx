import React from "react";

function Slide({ src, alt }) {
    return (
        <div className="w-[32rem] h-max  mx-auto"> 
            <img 
                src={src} 
                alt={alt} 
                className=" w-full h-full rounded-lg mx-auto" 
            /> 
        </div>
    );
}

export default Slide;
