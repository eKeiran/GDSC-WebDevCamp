import uniqid from "uniqid";

import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div
    className="project"
    style={{ backgroundImage: `url(${project.backgroundImage})` }}
  >
    <div className="project-overlay">
      <h3>{project.name}</h3>
      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
        ></a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
