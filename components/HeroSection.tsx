"use client" // this is a client component kkklll
import React from "react"
import Image from "next/image"
import { Link as OriginalLink } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"

const Link = OriginalLink as any; // Type assertion to avoid TypeScript error

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-38 md:flex-row md:space-x-4 md:text-left" style={{ marginBottom: '-66px' }}>
        <div className="md:mt-2 md:w-1/2">
          <Image  
            src="/tosha.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
      
         <div className="md:mt-2 md:w-3/5">
  <div className="flex items-center">
    <span className="inline-block align-middle" style={{ fontSize: '2.8em', marginRight: '0.5em' }}>👋</span>
    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-4xl">Hi, I&#39;m TOUFIK!</h1>
  </div>
         
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-teal-300">
              Computer science{" "}
            </span>
            graduate from Concordia University, located in Montreal, Canada. Additionally, I hold a Bachelor of Economics degree with a specialization in 
            <span className="font-semibold text-teal-300">
            {" "}Marketing{" "}
            </span>
            
          . Currently, I am  employed as a Senior Software Analyst at Telus Health since July 2021.

             

          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Certificates
          </Link>
          <span className="mx-2"></span>
          <a
            href="/Toufik Rabahie Resume CA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Resume
          </a>
          <span className="mx-2"></span>
          <a
            href="https://www.linkedin.com/in/toufik-rabahie-474832187/  "
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce hidden md:inline-block" />


        </Link>
      </div>
    </section>
  )
}

export default HeroSection;
