import React from "react";

const Image = ({ images }) => {
  return (
    <>
      {images.map((src, key) => (
        <img key={key} src={src} alt={`image ${key + 1}`}/>
      ))}
    </>
  );
};

export default Image;