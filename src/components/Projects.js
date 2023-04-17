import React from "react";
import ProjectCard from './ProjectCard';
import { ProjectsData } from "../data/ProjectsData";

export default function Projects() {
  return (
    <section className='projects-section' id='projects'>
      <h3>Projects</h3>
      <div className='projects-wrapper'>
        {ProjectsData.map(project => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>
  );
}
