import React from "react";

export default function SuccessMessage({ firstName }) {
  return (
    <div className='success-message'>
      <h3>Thank you for reaching out {firstName}!</h3>
      <p>I'll be in contact with you as soon as possible</p>
    </div>
  );
}
