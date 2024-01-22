import CountDownFunction from "./countdownFunction";
const Hero = () => {
  return (
    <div className="absolute w-full justify-center mx-auto flex flex-col p-10 top-28 z-10 text-white">
      <h1 className="my-20 tracking-wide text-center">WE'RE LAUNCHING SOON</h1>
      <CountDownFunction />
      <div className="flex space-x-10 mt-52 mx-auto">
        <img
          src="/icon-facebook.svg"
          alt=""
          className="hover:scale-110 cursor-pointer"
        />
        <img
          src="/icon-instagram.svg"
          alt=""
          className="hover:scale-110 cursor-pointer"
        />
        <img
          src="/icon-pinterest.svg"
          alt=""
          className="hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;
