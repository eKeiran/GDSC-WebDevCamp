import React, { useEffect, useState } from "react";
import uniqid from 'uniqid';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles2.json";
import { skills } from '../portfolio';

const SkillsPage = () => {
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);

  return (
    <section className='mt-[-5rem]' id='skills'>
      <h2 className='z-[2] text-center mt-5 mb-10'>Skills</h2>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={uniqid()} className='flex flex-col items-center p-10 rounded-lg bg-gray-900 hover:translate-y-[-7px] transition duration-500 ease-in-out '>
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <span className="mt-2 text-center text-white">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>
    </section>
  );
}

export default SkillsPage;
