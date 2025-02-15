import React from 'react';
import Button from '@mui/material/Button';

const Contact: React.FC<unknown> = (_props) => {
  return (
    <div className="flex flex-col items-center p-20 ">
      <div className="flex flex-col gap-4 p-20 border border-black solid rounded-2xl w-[700px] shadow-lg">
        <div className="text-4xl text-center">Contact me</div>
        <div className="flex flex-col ">
          <label htmlFor="firstName">First name</label>
          <input className="border border-black rounded-l solid px-2 py-2 w-full" type="text" id="firstName" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="lastName">Last name</label>
          <input className="border border-black rounded-l solid px-2 py-2 w-full" type="text" id="lastName" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input className="border border-black rounded-l solid px-2 py-2 w-full" type="email" id="email" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="contact">Contact</label>
          <input className="border border-black rounded-l solid px-2 py-2 w-full" type="text" id="contact" />
        </div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
