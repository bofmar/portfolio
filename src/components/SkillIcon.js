import React from "react";

export default function SkillIcon({ path, desc }) {
  return (
    <div className='skill'>
      <img src={path} className='skill-icon' alt='' />
      <h4 className='skill-description'>{desc.toUpperCase()}</h4>
    </div>
  );
}
