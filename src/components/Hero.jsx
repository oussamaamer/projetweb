import React from "react";
import { Link } from "react-router-dom";
import PlayVideo from "./ui/PlayButton";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col justify-center max-w-7xl mx-auto">
      <div className="px-12 flex flex-col gap-4 md:w-10/16 p-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold space-x-4 font-[--font-heading]">
          <span className="text-amber-300">ENACTUS</span>
          <span>Ben Msik</span>
        </h1>
        <h2 className="text-xl sm:text-3xl font-extrabold font-[--font-heading]">
          <span className="text-amber-300">EN</span>
          TREPRENEURIAT - <span className="text-amber-300">A</span>CTION -
          <span className="text-amber-300">US</span>
        </h2>
        <p className="md:text-xl font-bold">
          Plus de <span className="text-amber-300">50.000</span> jeunes
          entrepreneurs participent activement au développement durable au Maroc
          depuis 2003
        </p>
        <Link className="w-fit" to="#">
          <button className="px-8 py-3 bg-amber-300 text-black font-extrabold text-xl rounded-2xl shadow-md hover:brightness-90 hover:shadow-xl hover:scale-105 hover:cursor-pointer transform transition-all duration-300 ease-in-out">
            Rejoindre
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
