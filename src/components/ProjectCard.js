import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className='project-card-wrapper'>
      <h4 className='project-name'>{project.name}</h4>
      <p className='project-description'>{project.desc}</p>
      <img src={project.imgPath} alt='' className='project-image' />
      <a href={project.liveLink} target='_blank' className='project-link'>Live app</a>
      <a href={project.codeLink} target='_blank' className='project-link'>Code</a>
    </div>
  );
}
