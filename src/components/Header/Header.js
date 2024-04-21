import React from 'react';
import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="flex items-center justify-between max-w-screen-lg w-95 mx-auto h-20">
      <h3 className="text-xxl font-bold">
        {homepage ? (
          <a
            href={homepage}
            className="text-blue-300 hover:text-blue-700 hover:underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
