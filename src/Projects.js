
import React from "react";

const Projects = () => {
  const projects = JSON.parse("[{name: 'Portfolio', url: 'https://example.com'}]"); // Missing quotes around keys

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            <a href={proj.url}>{proj.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
