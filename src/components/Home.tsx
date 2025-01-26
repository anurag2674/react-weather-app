import React from 'react';
import Button from '@mui/material/Button';
const Home: React.FC<unknown> = (_props) => {
  return (
    <div className="flex justify-center px-4 py-4">
      <div className="flex items-start ">
        <div className="flex gap-4 items-center">
          <div>
            <label htmlFor="location">Location: </label>
            <input className="border border-black solid px-2 py-2" type="text" name="location" id="location" />
          </div>
          <div>
            <Button variant="contained">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
