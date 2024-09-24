import React from "react";
import AnimatedTooltip from "./ui/AnimatedTooltip"; // Use default import
import { SparklesCore } from "./ui/sparkles"; // Use named import
export const people = [
  {
    id: 1,
    name: "Tailwind CSS",
    designation: "For Styling",
    image: "https://files.raycast.com/50kq86d4gic47z6jp02htuxx2s4u",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "Product Manager",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 3,
    name: "React JS",
    designation: "Data Scientist",
    image: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg",
  },
  {
    id: 4,
    name: "Next JS",
    designation: "UX Designer",
    image: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  },
  {
    id: 5,
    name: "Node JS",
    designation: "Soap Developer",
    image: "https://banner2.cleanpng.com/20180410/qgw/avf4qeujo.webp",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",},
    
    {id:7,
        name: "Dora",
        designation: "The Explorer",
        image: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
      },
      {
        id: 8,
        name: "Dora",
        designation: "The Explorer",
        image: "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
      },
      {
        id:    9,
        name: "Dora",
        designation: "The Explorer",
        image: "https://ph-files.imgix.net/0e9ab899-883b-45fa-927a-1565d8af2e42.png?auto=format",
      },
      {
        id: 10,
        name: "Dora",
        designation: "The Explorer",
        image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
      },


];

export function AnimatedTooltipPreview () {
  return (
        
        <div className="bg-black text-white p-0">
      <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20 mb-0">
      The Cool Stuff I Play With
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

    <div className="flex flex-row items-center justify-center p w-full bg-black">
      <AnimatedTooltip items={people} />
    </div>
        </div>
   
  );

}

export default AnimatedTooltipPreview;
