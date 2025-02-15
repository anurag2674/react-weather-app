import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router';
type Page = {
  name: string;
  isSelected: boolean;
  path: string;
};
const Header: React.FC<unknown> = () => {
  const [pages, setPages] = useState<Page[]>([
    { name: 'Home', isSelected: true, path: '/' },
    { name: 'About', isSelected: false, path: '/about' },
    { name: 'Contact', isSelected: false, path: '/contact' },
  ]);
  const [isOpen, setOpen] = useState<boolean | null>(null);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePageSelect = (pageName: string) => {
    const newPages = [...pages.map((page) => ({ ...page, isSelected: page.name === pageName }))];
    setPages(newPages);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-sky-600 px-3 py-3">
        <Link to={'/'} className="flex items-center gap-3 text-black font-bold p-2 rounded-3xl cursor-pointer">
          <span>
            <img width="50px" height="50px" src="weather.webp" alt="Weather logo" />
          </span>
          React Weather App
        </Link>
        <div className="hidden md:block">
          <div className="flex justify-between items-center gap-3 cursor-pointer">
            {pages.map((page, idx) => (
              <Link
                to={page.path}
                className={`px-3 py-2 font-bold ${
                  page.isSelected === true ? 'text-orange-200' : 'text-black'
                } rounded-sm  hover:underline`}
                key={idx}
                onClick={() => handlePageSelect(page.name)}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden cursor-pointer">
          {isOpen ? <CloseIcon onClick={handleClose} /> : <MenuIcon onClick={handleClick} />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-sky-600">
          {pages.map((page, idx) => (
            <Link
              to={page.path}
              className={`w-full block px-3 py-3 cursor-pointer font-bold ${
                page.isSelected === true ? 'text-orange-200' : 'text-black'
              }  hover:underline`}
              key={idx}
              onClick={() => handlePageSelect(page.name)}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Header;
