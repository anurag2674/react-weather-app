import React from 'react';
import Button from '@mui/material/Button';

const Contact: React.FC<unknown> = (_props) => {
  return (
    <div className="w-full max-w-2xl p-4">
      <form className="flex flex-col gap-4 border border-black solid rounded-2xl shadow-lg max-w-lg w-full mx-auto sm:p-6 p-4">
        <div className="text-4xl text-center">Contact me</div>
        <div className="flex flex-col">
          <label htmlFor="firstName">First name</label>
          <input className="border border-black rounded-lg solid p-2" type="text" id="firstName" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="lastName">Last name</label>
          <input className="border border-black rounded-lg solid p-2" type="text" id="lastName" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input className="border border-black rounded-lg solid p-2" type="email" id="email" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="contact">Ph no:</label>
          <input className="border border-black rounded-lg solid p-2" type="text" id="contact" />
        </div>
        <div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
