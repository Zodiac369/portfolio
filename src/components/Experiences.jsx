import React from "react";
import { EXPERIENCES } from "../constants"; // Assure-toi que ce chemin est correct

const ExperienceList = () => {
  return (
    <div className="border-t border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl">Expériences | Formations</h2>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-2xl text-medium text-neutral-400">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {experience.role} - {" "}
              <span className="text-sm text-purple-300">
                {experience.company}
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-neutral-800 text-purple-800 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
