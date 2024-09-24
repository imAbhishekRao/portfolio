import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"; // Adjust the import path based on your folder structure
import { SparklesCore } from "./ui/sparkles";

// Example project data (replace with your actual project data)
const projectData = [
  {
    title: "Project One",
    description: "This is a description for Project One.",
    imageUrl: "https://my-portfolio-five-kohl-77.vercel.app/static/media/nyaysathi.ba7714c9a6af5c72490a.png",
    projectLink: "https://example.com/project-one",
    githubLink: "https://github.com/imAbhishekRao/legallink-2",
  },
  {
    title: "Project Two",
    description: "This is a description for Project Two.",
    imageUrl: "https://github.com/imAbhishekRao/vizionix/blob/master/src/image/Screenshot%202024-09-22%20202959.png?raw=true",
    projectLink: "https://example.com/project-two",
    githubLink: "https://github.com/imAbhishekRao/vizionix",
  },
  {
    title: "Project Three",
    description: "This is a description for Project Three.",
    imageUrl: "https://github.com/imAbhishekRao/portfolio/blob/master/src/assets/WhatsApp%20Image%202024-09-22%20at%2020.53.16.jpeg?raw=true",
    projectLink: "https://example.com/project-three",
    githubLink: "https://github.com/imAbhishekRao/AlgoArena",
  },
  {
    title: "Project Four",
    description: "This is a description for Project Four.",
    imageUrl: "https://github.com/imAbhishekRao/portfolio/blob/master/src/assets/Screenshot%202024-09-22%20194630.png?raw=true",
    projectLink: "https://example.com/project-four",
    githubLink: "Built with Shopify so no github link",
  },
  {
    title: "Project Five",
    description: "This is a description for Project Five.",
    imageUrl: "https://github.com/imAbhishekRao/portfolio/blob/master/src/assets/Screenshot%202024-09-23%20073455.png?raw=true",
    projectLink: "https://example.com/project-five",
    githubLink: "https://github.com/imAbhishekRao/webcosmic",
  },
  {
    title: "Project Six",
    description: "This is a description for Project Six.",
    imageUrl: "https://github.com/imAbhishekRao/portfolio/blob/master/src/assets/Screenshot%202024-09-23%20074745.png?raw=true",
    projectLink: "https://example.com/project-six",
    githubLink: "Built with Wordpress so no github link",
  },
];

export function Projects() {
  return (
  
    <div className="bg-black text-white p-0">
      <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20 mb-0">
        Explore My Projects
      </h1>
      
      {/* Core component - Sparkles effect */}
      <div className="w-[40rem] h-40 relative mx-auto mt-2">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core Sparkles Component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-0">
        {projectData.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.3] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                  as="a"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  View Project →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
