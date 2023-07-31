interface ISkillIconProps {
	path: string;
	desc: string;
}

export default function SkillIcon({ path, desc }: ISkillIconProps) {
  return (
    <div className='skill'>
      <img src={path} className='skill-icon' alt='' />
      <h4 className='skill-description'>{desc.toUpperCase()}</h4>
    </div>
  );
}
