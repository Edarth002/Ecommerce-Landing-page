import React, { useState } from "react";

export const Slide = () => {
  const [slideIn, setslideIn] = useState(0);
  const gallery = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  return (
    <div className="flex relative">
      <img
        src="/icon-next.svg"
        alt=""
        onClick={() => changeImage(1)}
        className="bg-white p-10 shadow-md shadow-Orange absolute top-1/2 right-0"
      />
      <img src={gallery[slideIn]} alt="" />
      <img
        src="/icon-previous.svg"
        alt=""
        className="bg-white p-10 shadow-md shadow-Orange absolute top-1/2 left-0"
      />
    </div>
  );
};
export default Slide;
