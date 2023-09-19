// "use client" // this is a client component
// import React from "react"
// import Image from "next/image"
// import { Link } from "react-scroll/modules"
// import { HiArrowDown } from "react-icons/hi"

// const HeroSection = () => {
//   return (
//     <section id="home">
//       <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-20 py-16 sm:py-28 md:py-11 md:flex-row md:space-x-4 md:text-left">
//         <div className="md:mt-2 md:w-1/2">
//           <Image  
//             src="/sami2.jpg"
//             alt=""
//             width={325}
//             height={325}
//             className="rounded-full shadow-2xl"
//           />
//         </div>
//         <div className="md:mt-2 md:w-3/5">
//           <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m SAMI!</h1>
//           <p className="text-lg mt-4 mb-6 md:text-2xl">
//             I&#39;m a{" "}
//             <span className="font-semibold text-teal-300">
//               Computer science{" "}
//             </span>
//             graduate based in Montreal, QC. Working towards creating software that
//             makes life easier and more meaningful.
//           </p>
//           <Link
//             to="projects"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//           >
//            Projects

//           </Link>
//           <span className="mx-2"></span>
// <a
//   href="/Sami_Ibrahim_Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
// >
//   Resume
// </a>
// <span className="mx-2"></span>
// <a
//   href="https://www.linkedin.com/in/sami-23-ibrahim/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
// >
//   LinkedIn
// </a>

//         </div>
//       </div>

// <div className="flex flex-row items-center text-center justify-center ">
        
//         <Link
//           to="about"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//         >
//          <h1 className="text-center font-bold text-3xl mb-4 cursor-pointer">
          
//           Jump to About Me
//         </h1>
      
//         </Link>
//       </div>


//       <div className="flex flex-row items-center text-center justify-center ">
        
//         <Link
//           to="about"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//         >
//           <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
//********************************************************************************************************************** */



// "use client" // this is a client component
// import React from "react"
// import Image from "next/image"
// import { Link } from "react-scroll/modules"
// import { HiArrowDown } from "react-icons/hi"

// const HeroSection = () => {
//   return (
//     <section id="home">
//       <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-38 md:flex-row md:space-x-4 md:text-left">
//         <div className="md:mt-2 md:w-1/2">
//           <Image  
//             src="/sami2.jpg"
//             alt=""
//             width={325}
//             height={325}
//             className="rounded-full shadow-2xl"
//           />
//         </div>
//         <div className="md:mt-2 md:w-3/5">
//           <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m SAMI!</h1>
//           <p className="text-lg mt-4 mb-6 md:text-2xl">
//             I&#39;m a{" "}
//             <span className="font-semibold text-teal-300">
//               Computer science{" "}
//             </span>
//             graduate based in Montreal, QC. Working towards creating software that
//             makes life easier and more meaningful.
//           </p>
//           <Link
//             to="projects"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 "
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//           >
//            Projects

//           </Link>
//           <span className="mx-2"></span>
//           {/* <Link
//             to="Resume"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
            
//           >
//            Resume
//           </Link> */}
// <a
//   href="/Sami_Ibrahim_Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
// >
//   Resume
// </a>
// <span className="mx-2"></span>
// <a
//   href="https://www.linkedin.com/in/sami-23-ibrahim/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
// >
//   LinkedIn
// </a>

//         </div>
//       </div>
//       <div className="flex flex-row items-center text-center justify-center ">
//         <Link
//           to="about"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//         >
//           <HiArrowDown size={35} className="animate-bounce" />
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default HeroSection






"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link as OriginalLink } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"

const Link = OriginalLink as any; // Type assertion to avoid TypeScript error

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-38 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image  
            src="/sami2.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m SAMI!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-300">
              Computer science{" "}
            </span>
            graduate based in Montreal, QC. Working towards creating software that
            makes life easier and more meaningful.
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
            Projects
          </Link>
          <span className="mx-2"></span>
          <a
            href="/Sami_Ibrahim_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Resume
          </a>
          <span className="mx-2"></span>
          <a
            href="https://www.linkedin.com/in/sami-23-ibrahim/"
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
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection;
