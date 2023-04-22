import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/e9bc57a0-df47-11ed-8300-fd92f9e8911a';

export default function ContactForm() {
  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmited(true);
    }, 100);
  }

  return (
    <section className='form-section'>
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST' target='_blank'>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input type="text" placeholder="First name" id='first-name' name="first-name" value={data.firstName} required onChange={e => setData({ ...data, firstName: e.target.value })} />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input type="text" placeholder="Last name" id='last-name' name="last-name" value={data.lastName} required onChange={e => setData({ ...data, lastName: e.target.value })} />
        </div>
        <div className='span'>
          <label htmlFor='email'>Email</label>
          <input type="email" placeholder="Email" id='email' name="email" value={data.email} required onChange={e => setData({ ...data, email: e.target.value })} />
        </div>
        <div className='span'>
          <label htmlFor='message'>Message</label>
          <textarea placeholder="Your message" id='message' name="message" value={data.message} required onChange={e => setData({ ...data, message: e.target.value })} />
        </div>
        <div>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
      {submited ? <SuccessMessage firstName={data.firstName} /> : null}
    </section>
  );
}
