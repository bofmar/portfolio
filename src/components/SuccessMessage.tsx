interface ISuccessMessage {
	firstName: string;
}

export default function SuccessMessage({ firstName }: ISuccessMessage) {
  return (
    <div className='success-message'>
      <h3>Thank you for reaching out <span>{firstName}!</span></h3>
      <p>I'll be in contact with you as soon as possible.</p>
    </div>
  );
}
