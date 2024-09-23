import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"; // Adjust the import path based on your folder structure

// Example project data (replace with your actual project data)
const projectData = [
  {
    title: "Project One",
    description: "This is a description for Project One.",
    imageUrl: "https://my-portfolio-five-kohl-77.vercel.app/static/media/nyaysathi.ba7714c9a6af5c72490a.png", // Use the correct path for your image
  },
  {
    title: "Project Two",
    description: "This is a description for Project Two.",
    imageUrl: "https://github.com/imAbhishekRao/vizionix/blob/master/src/image/Screenshot%202024-09-22%20202959.png?raw=true",
  },
  {
    title: "Project Three",
    description: "This is a description for Project Two.",
    imageUrl: "https://my-portfolio-five-kohl-77.vercel.app/static/media/algoarena.7aed35aa3dff0b93d359.png",
  },
  {
    title: "Project Three",
    description: "This is a description for Project Two.",
    imageUrl: "https://my-portfolio-five-kohl-77.vercel.app/static/media/algoarena.7aed35aa3dff0b93d359.png",
  },
  {
    title: "Project Three",
    description: "This is a description for Project Two.",
    imageUrl: "https://my-portfolio-five-kohl-77.vercel.app/static/media/algoarena.7aed35aa3dff0b93d359.png",
  },
];

export function Projects() {
  return (
    <div className="bg-black text-white py-10"> {/* Added bg-black and text-white */}
      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.3] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white">
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  View Project →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold">
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Projects;
