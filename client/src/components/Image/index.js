import React from "react";

function Image({images}) {
    return (
        <div>
            {images.map(image => (
                <img src={image} alt={image}/>
            ))};
        </div>
    );
};

export default Image;