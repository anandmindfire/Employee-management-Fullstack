import React from 'react';
import DropdownProfile from './DropdownProfile';

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded shadow-lg dark:bg-gray-800 w-auto'>
      <div className='container'>

        {/* Desktop Profile Dropdown */}
        <div className='flex justify-end'>
          <DropdownProfile />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
