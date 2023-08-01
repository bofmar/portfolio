import Project from '../data/Project';
import StackBadge from './StackBadge';

interface IProjectCard {
	project: Project;
}

export default function ProjectCard({ project }: IProjectCard) {
  return (
    <div className='project-card-wrapper'>
      <h4 className='project-name'>{project.name}</h4>
      <section className='stack-section'>
        {project.stack.map(tech => <StackBadge tech={tech} key={tech} />)}
      </section>
      <p className='project-description'>{project.desc}</p>
      <img src={project.imgPath} alt='' className='project-image' />
      <section className='project-links'>
        <a href={project.liveLink} target='_blank' className='project-link'>Live app</a>
        <a href={project.codeLink} target='_blank' className='project-link'>Code</a>
      </section>
    </div>
  );
}
