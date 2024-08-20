import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-t border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl">Projets Personnels</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img 
                        src={project.image} 
                        width={150} 
                        height={150} 
                        alt={project.title}
                        className="mb-6 rounded" 
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
  <h6 className="mb-2 font-medium text-purple-200">{project.title}</h6>
  <p className="mb-4 text-neutral-400">{project.description}</p>
  <div className="flex flex-wrap gap-2">
    {project.technologies.map((tech, index) => (
      <span
        key={index}
        className="px-2 py-1 bg-neutral-800 text-purple-600 rounded-md font-medium text-sm"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;