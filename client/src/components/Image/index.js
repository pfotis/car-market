import React from "react";

function Image({ images }) {
    if(!images) {
        return null;
    }
    console.log(images);
    return (
        <div>
            {images.map(image => (
                <div>
                    <img src={image} className="img" alt={image}/>
                </div>
          ))}
        </div>
    );
};

export default Image;