import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/emre-aydogan.jpg";

const Hero = () => {
  // Sauts de ligne dans le rendu
  const formattedContent = HERO_CONTENT.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Contenu */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-7xl">
              Emre Aydogan
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Développeur Full Stack
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {formattedContent}
            </p>
          </div>
        </div>

        {/* Photo de profil */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="photo de profil de Emre Aydogan" className="rounded-full w-100 h-100 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
