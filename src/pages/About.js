import React, { useEffect, useState } from "react";
import { GitHub, LinkedIn } from '@mui/icons-material';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { about } from '../portfolio';
import Education from "../components/Education/Education";


const About = () => {
  const [firstName, lastName] = about.length > 0 ? about[0].name.split(' ') : ['', ''];
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);

  return (
    <div className='flex flex-col items-left mt-12 md:mt-8 relative z-[1]'>
      {/* Particles */}
      <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>
      <div className="grid grid-cols-3 gap-28 items-center z[1]">
        {/* Name column */}
        {about.length > 0 && (
          <div className="col-span-1 ">
            <h2 className='text-4xl font-bold mt-[-8rem]  '>
              <span className='text-primary leading-10'>{firstName}<br />{lastName}</span>
            </h2>
          </div>
        )}

        {/* Image column */}
        <div className="col-span-1 flex justify-center">
          <div className="w-100 h-100 rounded-full overflow-hidden">
            <img src="/developer-woman.png" alt="Developer Woman" />
          </div>
        </div>

        <div className="col-span-1 text-left">
          {about.length > 0 && about[0].role && <h2 className='mt-4 text-2xl md:text-4xl font-bold'>{about[0].role}</h2>}
          <p className='mt-4 text-lg max-w-2xl'>{about.length > 0 && about[0].description}</p>

          {/* Centered container for buttons and social icons */}
          <div className='mt-6 flex justify-center'>
            {about.length > 0 && about[0].resume && (
              <a href={about[0].resume}>
                <button type="button" className="btn btn-outline mr-4">Resume</button>
              </a>
            )}

            {about.length > 0 && about[0].social && (
              <>
                {about[0].social.github && (
                  <a href={about[0].social.github} aria-label='github' className='link link-icon mr-2'>
                    <GitHub />
                  </a>
                )}

                {about[0].social.linkedin && (
                  <a href={about[0].social.linkedin} aria-label='linkedin' className='link link-icon'>
                    <LinkedIn/>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Education />

    </div>
  );
};

export default About;
