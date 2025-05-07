import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col justify-center max-w-7xl mx-auto">
      <div className="px-12 flex flex-col gap-4 md:w-10/16 p-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold space-x-4">
          <span className="text-amber-300">ENACTUS</span>
          <span>Ben m&apos;sik</span>
        </h1>
        <h2 className="text-xl sm:text-3xl font-extrabold">
          <span className="text-amber-300">EN</span>
          TREPRENEURIAT - <span className="text-amber-300">A</span>CTION -
          <span className="text-amber-300">US</span>
        </h2>
        <p className="md:text-xl font-bold">
          Plus de <span className="text-amber-300">50.000</span> jeunes
          entrepreneurs participent activement au développement durable au Maroc
          depuis 2003
        </p>
        <button className="text-black font-extrabold text-2xl bg-amber-300 w-fit rounded-2xl px-8 py-3">
          Rejoindre
        </button>
      </div>
    </div>
  );
};

export default Hero;
