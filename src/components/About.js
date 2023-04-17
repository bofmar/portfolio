import React from "react";
import SkillIcon from './SkillIcon';

export default function About() {
  return (
    <section className='about-section' id='about'>
      <h3 className='section-title'>About</h3>
      <div className='about-left'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc id cursus. Auctor elit sed vulputate mi sit amet mauris. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Sodales neque sodales ut etiam. Erat nam at lectus urna duis. Parturient montes nascetur ridiculus mus mauris. Metus vulputate eu scelerisque felis. Semper risus in hendrerit gravida. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Urna id volutpat lacus laoreet non curabitur. Lectus quam id leo in vitae. Est ultricies integer quis auctor elit sed vulputate. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.</p>
      </div>
      <div className='about-right'>
        <SkillIcon path='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' desc='Linux' />
      </div>
    </section>
  );
}
