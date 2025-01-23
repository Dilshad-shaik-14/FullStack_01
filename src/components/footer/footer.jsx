import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  const status = useSelector((state) => state.auth.status);
  let direction = status ? "/profile" : "/login";

  return (
    <section className="relative overflow-hidden py-10 bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap md:sm:-m-6">
          <div className="w-full md:sm:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4 inline-flex items-center text-xl md:sm:text-4xl lg:text-5xl ml-0 md:sm:ml-4">
                <span className="font-roboto">Chronicle</span> <span className="font-alfa ml-2">Cave</span>
              </div>
              <div>
                <p className="text-sm md:sm:text-base text-black">
                  &copy; Copyright 2025. All Rights Reserved by Dilshad Shaik.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:sm:w-1/2 lg:w-2/12 p-6 mt-4 md:sm:mt-0">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:sm:mb-9 text-xs font-semibold uppercase text-black">
                Company
              </h3>
              <ul>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/terms-and-conditions"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/contact-us"
                  >
                    Let's Meet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:sm:w-1/2 lg:w-2/12 p-6 mt-4 md:sm:mt-0">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:sm:mb-9 text-xs font-semibold uppercase text-black">
                Support
              </h3>
              <ul>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to={direction}
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/contact-us"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/contact-us"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:sm:w-1/2 lg:w-3/12 p-6 mt-4 md:sm:mt-0">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:sm:mb-9 text-xs font-semibold uppercase text-black">
                Legals
              </h3>
              <ul>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/terms-and-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2 md:sm:mb-4">
                  <Link
                    className="text-base font-medium text-black hover:text-gray-400 transition duration-300"
                    to="/terms-and-conditions"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
