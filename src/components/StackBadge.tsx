interface IStackBadge {
	tech: string;
}

export default function StackBadge({ tech }: IStackBadge) {
  return (
    <span className='stack-badge'>{tech}</span>
  );
}
