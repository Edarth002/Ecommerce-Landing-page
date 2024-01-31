"use client";

import React, { useState } from "react";
export const Landingpage = () => {
  const [click, setClick] = useState(0);
  function handleClickAdd() {
    setClick((prev) => {
      return (prev += 1);
    });
  }
  function handleClickSub() {
    setClick((prev) => {
      if (prev <= 0) {
        return (prev = 0);
      }
      return (prev -= 1);
    });
  }
  const [cart, setCart] = useState(false);
  function cartList() {
    setCart((prev) => {
      return !prev;
    });
  }
  const [cartValue, setCartValue] = useState([]);
  function handleCart() {
    setCartValue([
      {
        productName: "Fall Limited Edition Sneakers",
        id: 1,
        noOfProducts: click,
        price: Number(125 * click),
      },
    ]);
  }
  function handleCartDel() {
    return setCartValue([]);
  }
  const [slideIn, setslideIn] = useState(0);
  const [selected, setSelected] = useState("/image-product-1.jpg");
  const Image = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];
  function changeImage(step) {
    setslideIn((prev) => (prev + step + Image.length) % Image.length);
  }

  const [lightBox, setlightBox] = useState(false);

  function handlelightBox() {
    setlightBox((prev) => {
      return !prev;
    });
  }
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu((prev) => {
      return !prev;
    });
  }
  return (
    <div>
      {lightBox && (
        <div className="bg-black bg-opacity-60 h-screen fixed z-10 md:block hidden">
          <div className="w-1/2 flex flex-col justify-center mx-auto">
            <div className="flex flex-row-reverse items-start mt-10">
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  className="cursor-pointer mt-5"
                  onClick={handlelightBox}
                />
              </svg>
              <img
                src={selected}
                alt=""
                className="rounded-xl mb-5 w-[70%] mx-auto"
              />
            </div>
            <div className="flex items-center space-x-5 ml-10 w-[20%] ">
              {Image.map((Image, index) => (
                <img
                  src={Image}
                  alt=""
                  key={index}
                  onClick={() => setSelected(Image)}
                  className="rounded-lg cursor-pointer hover:opacity-70"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="md:px-16 md:pt-10">
        <nav className="flex items-center justify-between md:border-b md:pb-7 border-Grayishblue md:px-0 md:py-0 px-10 pt-5">
          <div className="flex space-x-7 items-center">
            <img
              src="/icon-menu.svg"
              alt=""
              className="md:hidden block"
              onClick={handleMenu}
            />
            <img src="/logo.svg" alt="" />
            <div className="items-center md:space-x-5 md:flex hidden">
              <a href="/">Collections</a>
              <a href="/">Men</a>
              <a href="/">Women</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-10">
            <div className="relative">
              <img src="/icon-cart.svg" alt="" className="cursor-pointer" />
              {cartValue.map((cartValue) => (
                <p className="bg-Orange px-2 py-1 -top-4 -right-4 text-white absolute rounded-lg">
                  {cartValue.noOfProducts}
                </p>
              ))}
            </div>

            <img
              src="/image-avatar.png"
              alt=""
              className="md:w-1/3 w-1/4 rounded-full border-2 border-Orange cursor-pointer hover:scale-110"
              onClick={cartList}
            />
          </div>
          {menu && (
            <div className="bg-white w-4/5 p-10 h-screen inset-0 fixed z-50">
              <img src="/icon-close.svg" alt="" onClick={handleMenu} />
              <div className="py-10 flex flex-col">
                <a href="/" className="text-xl py-5 font-bold">
                  Collections
                </a>
                <a href="/" className="text-xl py-5 font-bold">
                  Men
                </a>
                <a href="/" className="text-xl py-5 font-bold">
                  Women
                </a>
                <a href="/" className="text-xl py-5 font-bold">
                  About
                </a>
                <a href="/" className="text-xl py-5 font-bold">
                  Contact
                </a>
              </div>
            </div>
          )}

          {cart && (
            <div className="rounded-lg w-96 h-64 absolute md:right-16 z-30 bg-white md:top-32 top-20 shadow-md shadow-Darkgrayishblue">
              <p className="text-black p-5 font-bold">Cart</p>
              <div className="bg-Grayishblue h-1 w-full"></div>
              {cartValue.map((cartValue) => (
                <div key={cartValue.id}>
                  <div className="flex justify-between items-baseline p-5">
                    <div className="flex space-x-5 items-center">
                      <img
                        src="/image-product-1.jpg"
                        alt="could not get image"
                        className="w-[15%]"
                      />

                      <div className="text-Darkgrayishblue">
                        <p>{cartValue.productName}</p>
                        <p>
                          {`$125.00 x ${cartValue.noOfProducts}`}{" "}
                          <span className="font-bold text-black ml-3">
                            {`$ ${cartValue.price}.00`}
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      src="/icon-delete.svg"
                      className="w-1/12 cursor-pointer"
                      onClick={handleCartDel}
                    />
                  </div>
                  <div className="p-5">
                    <button
                      onClick={() => {
                        handleCartDel();
                        alert(
                          "You have succesfully made a purchase😉😉😉😉. We hope to see you back soon."
                        );
                      }}
                      className="bg-Orange hover:bg-orange-300 w-full p-4 rounded-lg text-white text-center"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
        <main className="flex md:flex-row flex-col justify-between items-center md:space-x-32 w-full mx-auto md:my-14 my-5">
          <div className="md:w-1/2 ">
            <img
              src={selected}
              alt=""
              className="rounded-xl my-5 w-[90%] cursor-pointer md:block hidden"
              onClick={handlelightBox}
            />
            <div className="flex md:hidden">
              <img
                src="/icon-previous.svg"
                alt=""
                onClick={() => changeImage(-1)}
                className="absolute bg-white rounded-full p-5 left-5 top-1/3 transform_50"
              />
              <img
                src="/icon-next.svg"
                alt=""
                onClick={() => changeImage(1)}
                className="absolute bg-white rounded-full p-5 right-5 top-1/3 transform_50"
              />
            </div>
            <img
              src={Image[slideIn]}
              alt=""
              className="my-5 cursor-pointer flex md:hidden"
            />

            <div className="space-x-7 md:flex hidden w-[17%]">
              {Image.map((Image, index) => (
                <img
                  src={Image}
                  alt=""
                  key={index}
                  onClick={() => setSelected(Image)}
                  className="rounded-lg cursor-pointer hover:opacity-70"
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 px-10 md:mt-0 mt-10">
            <p className="text-Orange font-bold text-xl cursor-pointer">
              SNEAKER COMPANY
            </p>
            <h1 className="md:text-5xl text-4xl font-extrabold my-5">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-Darkgrayishblue md:w-4/5 leading-7 md:my-10 my-5 text-lg md:text-base">
              These low profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outersole, they'll withstand everything
              the weather can offer.
            </p>
            <div className="md:flex-col flex-row justify-between flex">
              <p className="flex items-center text-4xl tracking-wide font-bold">
                $125.00
                <span className="bg-Paleorange py-1 px-2 font-bold rounded-md text-base ml-5 text-Orange">
                  50%
                </span>
              </p>
              <p className="text-Grayishblue my-3 text-lg font-semibold line-through">
                $250.00
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center my-14 justify-between">
              <div className="flex bg-Lightgrayishblue md:w-40 w-full p-3 rounded-lg">
                <button
                  className="py-2 px-3 font-bold text-Orange text-2xl"
                  onClick={handleClickSub}
                >
                  -
                </button>
                <input
                  type="text"
                  value={click}
                  id=""
                  className="outline-none p-2 w-1/3 mx-auto bg-transparent text-center text-xl font-semibold"
                />
                <button
                  className="py-2 px-3 font-bold text-Orange text-2xl"
                  onClick={handleClickAdd}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleCart}
                className="flex justify-center space-x-5 md:mt-0 mt-5 mx-auto items-center bg-Orange text-white text-xl fill-white font-semibold shadow-md hover:bg-orange-300 cursor-pointer shadow-Orange text-center md:w-[60%] w-full p-5 rounded-lg"
              >
                <img src="/icon-cart.svg" alt="" className="fill-white" />
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landingpage;
