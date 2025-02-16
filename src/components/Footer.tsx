import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GithubURL, LinkedInURL } from '../constants/userLinks';
const Footer: React.FC<unknown> = () => {
  const date = new Date();
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-gray-300 p-4">
      <div>
        <h3>Created by Anurag Giddalur</h3>
      </div>
      <div>Copyright &copy; {date.getFullYear()}</div>
      <div className="flex gap-[20px]">
        <a href={GithubURL} target="_blank">
          <GitHubIcon />
        </a>
        <a href={LinkedInURL} target="_blank">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
