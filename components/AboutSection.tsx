"use client" // this is a client component
// toufiks version 
import React from "react";
import Image from "next/image";

const skills = [
  { skill: "CAPM" },
  { skill: "Agile" },
  { skill: "Project Management" },
  { skill: "Scrum" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "SAP" },
  { skill: "Python" },
  { skill: "Microsoft Office" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "QA" },
  { skill: "Java" },
  { skill: "JIRA" },
  { skill: "Azure DevOps" },
  { skill: "SQL" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-10 md:p-4 md:text-left">
          <div className="md:w-1/2">
            {/* Education Section */}
            <h1 className="text-center text-xl font-bold mb-6 md:text-left">Education</h1>
            <div className="flex items-center mb-4 align-bottom mt-9">
              <Image
                src="/concordiaLogo.png"
                alt="Concordia University Icon"
                width={80}
                height={50}
                className="mr-6" 
              />
              <div>
                <h2 className="font-bold text-xl">Bachelor of Computer Science </h2>
                <p className="font-bold">Concordia University, Montreal, QC</p>
                <p>2017 - 2021</p>
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
                <p>2011 - 2016</p>
              </div>
            </div>
            
            {/* My Skills Section */}
            <div className="mt-10">
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
          
         {/* Personalized Summary Section */}
         <div className="md:w-1/2">
  
  {/* <h2 className="text-xl font-bold mb-4">🎓 Educational Journey:</h2> */}
  <h2 className="text-xl font-bold mb-4">🎓 Educational Journey:</h2>
  <p className="mb-4">
  My academic journey in Computer Science has been a blend of learning and practical application. I delved deep into subjects like Data Structures, Algorithms, Artificial Intelligence, Game Development, and Software Engineering Methodologies, equipping myself with a versatile skill set in Java, Python, and JavaScript.
  </p>

  <h2 className="text-xl font-bold mb-4">💼 Professional Experience:</h2>
  <p className="mb-4">
    My career began in customer service at 
    <span className="font-semibold text-teal-300"> Teleperformance</span>, where I tackled technical issues for Apple users, laying a foundation in problem-solving and customer relations. This evolved into a sales role at <span className="font-semibold text-teal-300">Alorica</span> for the RBC Bank campaign. Stepping into the gaming world at <span className="font-semibold text-teal-300">Keywords Studios</span>, I embraced the role of a Quality Assurance Tester for Google Stadia, where precision and analytical skills were at the forefront.
  </p>
  
  {/* <h2 className="text-xl font-bold mb-4">💼 Professional Experience:</h2> */}
  <p className="mb-4">
    Transitioning into the tech industry I joined <span className="font-semibold text-teal-300">TELUS Health</span>, Starting as a Software Analyst, and later advancing to a Senior Software Analyst, my journey has been marked by continuous growth and diverse experiences, ranging from pension plan management to software process enhancement. In every role, from customer service to technology, my focus has been on driving excellence and innovation. 🚀
  </p>
  
  <h2 className="text-xl font-bold mb-4">🌟 Skills & Attributes:</h2>
  <p className="mb-4">
    I&apos;m a self-starter and <span className="font-semibold text-teal-300">analytical thinker</span>, with a knack for solving problems, Project Management and a drive to learn and innovate. My dual background in Computer Science and Economics positions me uniquely, enabling me to bring diverse perspectives to both individual and team environments.
  </p>
  
  <h2 className="text-xl font-bold mb-4">🔗 Connect With Me:</h2>
  <p>
    Toufik.Rabahie@gmail.com
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
