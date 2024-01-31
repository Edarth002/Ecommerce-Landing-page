import React, { useState } from "react";

export const Gallery = () => {
  const [lightBox, setlightBox] = useState(false);

  function handlelightBox() {
    setlightBox((prev) => {
      return !prev;
    });
  }
  const [selected, setSelected] = useState(null);
  const Image = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];
  return (
    <div>
      {lightBox && (
        <div className="bg-black bg-opacity-50 h-screen w-full fixed z-50 md:block hidden">
          <div className="imageGallery absolute items-start inset-0 md:flex flex-col hidden w-1/3 mx-auto justify-center">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fill-rule="evenodd"
                className="cursor-pointer"
                onClick={handlelightBox}
              />
            </svg>
            <img
              src="/image-product-1.jpg"
              alt=""
              className="rounded-xl my-5"
            />
          </div>
          <div className="flex space-x-5 w-1/6 justify-center mx-auto">
            {Image.map((Image, index) => (
              <img
                src={Image}
                alt=""
                key={index}
                onClick={() => setSelected(Image)}
                className="rounded-lg cursor-pointer hover:opacity-70 "
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
