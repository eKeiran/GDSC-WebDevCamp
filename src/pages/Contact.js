import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles4.json";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);


  return (
  
    <section className='flex z-[2] justify-center mt-48 mb-52 items-center h-full' id='contact'>
      <div className='p-10 max-w-md'>
        <h2 className='text-xl font-bold mb-4 text-center'>Contact</h2>
        <form className="contact-form  border-solid border-2 border-primary rounded-xl p-4">
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className="mb-4">
              <label htmlFor={field} className="block font-semibold">{field}:</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                className="w-full border bg-white border-gray-300 rounded-md py-1 px-1 mb-2"
                required
              />
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
        </form>
        <div className="absolute inset-0 z-[-1]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>
      </div>
    </section>
  );
};

export default Contact;
