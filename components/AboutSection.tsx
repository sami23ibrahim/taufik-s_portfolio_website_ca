
"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"


const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: "Unity" },
  { skill: "Davinci Resolve" },
  { skill: "C++" },
  { skill: "SQL" },
];

const AboutSection = () => {
  return (
    <section id="about">
     <div className="my-12 pb-8 md:pt-11 md:pb-14 ">
     {/*my-12 pb-12 md:pt-16 md:pb-48 */}
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-1 md:p-1 md:flex-row md:text-left">
         
         
          <div className="md:w-1/2">
 {/* Adding Education Section Here */}
 <h1 className="text-center text-xl font-bold mb-6 md:text-left">Education</h1>
            <div className="flex items-center mb-4 align-bottom mt-9">
              <Image
                //src="/ConcordiaLogo.png"
                src="/concordiaLogo.png"
                alt="Concordia University Icon"
                width={80}
                height={50}
                className="mr-6" 
              />
              <div>
                <h2 className="font-bold text-xl">Bachelor of Computer Science </h2>
                <p className="font-bold">Concordia University, Montreal, QC</p>
                <p>2020 - 2023</p>
              </div>
            </div>
            <div className="flex items-center mt-6 ">
              <Image
                src="/tishreen.webp" 
                alt="Tishreen University Icon"
                width={80}
                height={50}
                className="mr-6" 
              />
              <div>
                <h2 className="font-bold text-xl">Bachelor of Economics, Business Administration and Marketing</h2>
                <p className="font-bold">Tishreen University, Latakia, Syria</p>
                <p>2015 - 2018</p>
              </div>
            </div>
            {/* End of Education Section */}

          </div>
         {/********************************************* */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>


        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center  my-2 ">
        
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
         <h1 className="text-center font-bold text-3xl mb-4 cursor-pointer">
          
          Jump to my Projects
        </h1>
      
        </Link>
      </div>


      <div className="flex flex-row items-center text-center justify-center my-2  mb-10 ">
        
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>




    </section>
  );
};

export default AboutSection;


