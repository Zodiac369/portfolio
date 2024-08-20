import React from 'react';
import aboutImg from "../assets/a-propos.png";
import { ABOUT_TEXT } from "../constants";
import { motion }  from "framer-motion";

const About = () => {
  // Formatage du contenu avec des sauts de ligne
  const formattedContent = ABOUT_TEXT.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <div className="border-bottom border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        Qui suis-<span className="text-neutral-500">je ?</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="image à propos" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl py-2'>{formattedContent}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
