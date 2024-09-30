import React from "react";

function Slide({src, alt}){
    return(
        <div className="mx-auto">
            <img src={src} alt={alt} className=" mx-auto w-80"/>
        </div>
    );
}

export default Slide;