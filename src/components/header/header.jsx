import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Logout } from '../index';
import { motion } from 'framer-motion';
import { FaHome, FaSignInAlt, FaUserPlus, FaPlus, FaUser, FaBars } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: 'Home', slug: '/', icon: <FaHome />, active: true },
    { name: 'Login', slug: '/login', icon: <FaSignInAlt />, active: !authStatus },
    { name: 'Signup', slug: '/signup', icon: <FaUserPlus />, active: !authStatus },
    { name: 'Add Post', slug: '/add-post', icon: <FaPlus />, active: authStatus },
    { name: 'Profile', slug: '/profile', icon: <FaUser />, active: authStatus },
  ];

  return (
    <header className="bg-white px-4 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between py-4 shadow-md w-full">
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center">
        {/* Logo */}
        <div className="flex items-start justify-start w-full lg:w-auto">
          <h1 className="font-bold text-4xl py-4 text-center lg:text-left truncate">
            <span className="font-roboto">Chronicle</span>
            <span className="font-alfa text-5xl">Cave</span>
          </h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button 
          className="lg:hidden text-black mr-4"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Navigation Menu */}
        <nav className={`w-full lg:w-auto mt-4 lg:mt-0 ${isNavOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row items-start lg:items-center text-base text-black space-y-4 lg:space-y-0 lg:space-x-6 mx-auto lg:mx-0 justify-start lg:justify-end">
            {navItems.map((item) => {
              if (item.active) {
                return (
                  <motion.li
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    className="transition-all duration-300 rounded-full p-3 hover:bg-gray-200 hover:text-black hover:font-semibold md:px-6 md:py-3"
                  >
                    <button
                      onClick={() => navigate(item.slug)}
                      className="flex items-center space-x-3"
                    >
                      <span className="block lg:hidden text-xl">{item.icon}</span>
                      <span className="hidden lg:block">{item.name}</span>
                    </button>
                  </motion.li>
                );
              }
              return null;
            })}
            {authStatus && (
              <li className="md:px-6 md:py-3">
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
