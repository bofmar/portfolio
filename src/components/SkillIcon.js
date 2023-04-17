import React from "react";

export default function SkillIcon({ path, desc }) {
  return (
    <div className='skill'>
      <img src={path} className='skill-icon' />
      <h4 className='skill-description'>{desc}</h4>
    </div>
  );
}
