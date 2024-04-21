import React from "react";

const Education = () => (
  <section className="education" id="education">
    <h2 className="heading text-center mt-8">
      <i className="align-center flex flex-col" /> 
      <span className="text-primary">My Education</span>
    </h2>
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="box-container">
        <div className="box bg-gray-700 flex p-4">
          <div className="image flex-none mr-4">
            <img
              draggable="false"
              src="mit-adt.png"
              alt=""
              className="w-48 h-32"
            />
          </div>
          <div className="content">
            <h3>
              B. Tech in CSE
            </h3>
            <p className="mb-2">MIT ADT UNIVERSITY</p>
            <h4>&nbsp;</h4>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box bg-gray-700 flex p-4 mt-4 lg:mt-0">
          <div className="image flex-none mr-4">
            <img
              draggable="false"
              src="bishops-school.jpg"
              alt=""
              className="w-42 h-32"
            />
          </div>
          <div className="content">
            <h3>High School</h3>
            <p>The Bishop&apos;s School, Undri</p>
            <h4>2021 | 92%</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
