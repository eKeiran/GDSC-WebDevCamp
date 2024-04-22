import React, { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import particlesOptions from "../particles.json";
import { about } from '../portfolio';
import Education from "../components/Education/Education";


const About = () => {
  // const [particlesVisible, setParticlesVisible] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine);
  //   }).then(() => {
  //     setParticlesVisible(true);
  //   });
  // }, []);

  return (
    <div className='flex flex-col items-left mt-12 md:mt-8 relative z-[1]'>
      <div className="grid grid-cols-3 gap-28 items-center z-1">
        {/* Name column */}
        <div className="col-span-1 ">
          <h2 className='text-4xl font-bold mt-[-8rem]  '>
            <span className='text-primary leading-10'>{about.firstName}<br />{about.lastName}</span>
          </h2>
        </div>

        {/* Image column */}
        <div className="col-span-1 flex justify-center">
          <div className="w-100 h-100 rounded-full overflow-hidden">
            <img src="/developer-woman.png" alt="Developer Woman" />
          </div>
        </div>

        <div className="col-span-1 text-left">
          {about.role && <h2 className='mt-4 text-2xl md:text-4xl font-bold'>{about.role}</h2>}
          <p className='mt-4 text-lg max-w-2xl'>{about.description}</p>
        </div>
      </div>
          {/* Particles */}
          {/* <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div> */}
      <Education />

    </div>
  );
};

export default About;
