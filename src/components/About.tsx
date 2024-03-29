import SkillIcon from './SkillIcon';
import TechnologyData from '../data/TechnologyData';

export default function About() {
  return (
    <section className='about-section' id='about'>
      <h3 className='section-title'>About</h3>
      <div className='about-wrapper'>
        <div className='about-left'>
          <p>Hey there! I am <span>Mario</span>, a Web Developer who speciallizes in modern, performant, and responsive web apps.</p>
          <p>I had a serious <span>passion for technology</span> ever since I was a wee lad, and instantly fell in love with programming ever since I wrote my first 'hello world'. After being introduced to Javascript, I became enthralled with all the posibilities web applications present to us, and now I am always on the look out for more oportunities to create new experiences, implement eye pleasing designs and make them pop with animations.</p>
          <p>I am a person who firmly believes in <span>continuous growth</span>, and I constantly challenge my self with new technologies and ideas. I see myself as someone who is well organised, a problem solver who thrives under pressure, and with a good eye for detail. On my time off, I can be found gaming, listening to music or watching movies.</p>
        </div>
        <div className='about-right'>
          {TechnologyData.map(tech => <SkillIcon key={tech.name} path={tech.url} desc={tech.name} />)}
        </div>
      </div>
    </section>
  );
}
