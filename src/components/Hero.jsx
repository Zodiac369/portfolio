import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/emre-aydogan.jpg";
import { motion } from "framer-motion";

const  container =  (delay)  => ({
  hidden: {x: -100, opacity: 0 },
    visible: {
    x:  0, 
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  },
});

const Hero = () => {
  // Sauts de ligne dans le rendu
  const formattedContent = HERO_CONTENT.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Contenu */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1  
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-7xl">
              Emre Aydogan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible" 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Développeur Full Stack
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {formattedContent}
            </motion.p>
          </div>
        </div>

        {/* Photo de profil */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100,  opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic} alt="photo de profil de Emre Aydogan" className="rounded-full w-100 h-100 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
