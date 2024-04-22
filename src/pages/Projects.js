import React, { useEffect, useState } from "react";
import uniqid from 'uniqid';
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import particlesOptions from "../particles3.json";
import { projects } from '../portfolio';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';

const Projects = () => {
  // const [particlesVisible, setParticlesVisible] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine);
  //   }).then(() => {
  //     setParticlesVisible(true);
  //   });
  // }, []);

  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='max-w-[1200px] mt-[-rem] grid gap-8 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>

      {/* <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div> */}
    </section>
  );
}

export default Projects;
