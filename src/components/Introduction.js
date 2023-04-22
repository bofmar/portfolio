import React from "react";
import profile from '../assets/profilePic-removebg.png';

export default function Introduction() {
  const handleClick = () => {
    document.getElementById('first-name').focus();
  }
  return (
    <section className='introduction-section' id='home'>
      <div className='introduction-left'>
        <div className='typewritter'>
          <p>{'>'}hello_there.md</p>
          <h1>I'm <span>Marios Mpofilakis</span></h1>
          <h2>Web Developer</h2>
          <button onClick={handleClick}>Let's work together</button>
        </div>
      </div>
      <div className='introduction-right'>
        <img className='introduction-image' src={profile} />
        <div className='introduction-image-decorator'></div>
      </div>
    </section>
  );
}
