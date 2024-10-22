import React from 'react';
import logo from '../assets/logo.png'; // Corrected import statement

const Header = () => {
  return (
    <div className='shadow-md'>
      <div className='max-w-[1200px] mx-4 md:mx-auto h-[80px] flex justify-between items-center'>
        <div>
          <p className='font-bold text-2xl md:text-3xl text-gray-600'>
            থৈরখোলা যুব সংগঠন
          </p>
          <p className='text-gray-500 text-sm md:text-base'>
            তারুণ্যের শক্তি, পরিবর্তনের অঙ্গীকার
          </p>
        </div>
        <div className='flex items-center'>
          {/* Add logo here */}
          <img src={logo} alt="Organization Logo" className='h-12 md:h-16 ml-4' /> {/* Adjust height as needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;
