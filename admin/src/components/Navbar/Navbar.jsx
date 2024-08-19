/** @format */

import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className='navbar  shadow-md'>
      {/* <img className='logo' src={assets.logo} alt="" /> */}
      <p className='md:text-[2rem] sm:text-[1.4rem] italic text-orange-500 font-semibold'>
        Nayaab Foods.
      </p>
      <div className='flex gap-1 text-[0.8rem] sm:text-[0.7rem] items-center justify-center'>
        <img
          className='profile'
          src={assets.profile_image}
          title='Admin'
          alt=''
        />
        <div className=' leading-4 text-black/40 '>
          <p className='text-black/80'>Mutasim Sundke</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
