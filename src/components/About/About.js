import React, { useEffect, useState } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json"; // Import particles options from particles.json
import { about } from '../../portfolio';

const About = () => {
  const { name, role, description, resume, social } = about;
  const [firstName, lastName] = name.split(' ');
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
        {name && (
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
          {role && <h2 className='mt-4 text-2xl md:text-4xl font-bold'>{role}</h2>}
          <p className='mt-4 text-lg max-w-2xl'>{description && description}</p>

          {/* Centered container for buttons and social icons */}
          <div className='mt-6 flex justify-center'>
            {resume && (
              <a href={resume}>
                <button type="button" className="btn btn-outline mr-4">Resume</button>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a href={social.github} aria-label='github' className='link link-icon mr-2'>
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a href={social.linkedin} aria-label='linkedin' className='link link-icon'>
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
