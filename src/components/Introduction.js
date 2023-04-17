import React from "react";

export default function Introduction() {
  return (
    <section className='introduction-section' id='home'>
      <div className='introduction-left'>
        <div className='typewritter'>
          <p>{'>'}hello_there.md</p>
          <h1>I'm <span>Marios Mpofilakis</span></h1>
          <h2>Web Developer</h2>
          <button>Let's work together</button>
        </div>
      </div>
      <div className='introduction-right'>
        <img className='introduction-image' src='https://images.pexels.com/photos/15074803/pexels-photo-15074803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <div className='introduction-image-decorator'></div>
      </div>
    </section>
  );
}
