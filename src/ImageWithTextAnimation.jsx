import React from 'react';
import { motion } from 'framer-motion';
import vehicles from "./assets/vehicles.jpg"

const ImageWithTextAnimation = () => {
  return (
    <div className="relative inline-block w-full">
      <img
        src={vehicles}
        alt="Sample"
        className="px-9 w-full h-[600px] object-cover block"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 flex flex-col items-start pl-4 pb-4 text-white"
      >
        
        <h1 className="text-4xl text-black py-6 px-10 hidden lg:block">
          Heavy Roads
        </h1>
        <h2 className="text-lg mt-2 px-10 hidden lg:block">
          Lorem ipsum dolor sit amet consectetur<br />
          adipisicing elit. Nihil quae doloremque molestias <br />
          adipisci vero error. Quo delectus quod velit unde magni<br />
          debitis nulla pariatur maxime totam, provident repellendus,
          fugiat animi!
        </h2>
      </motion.div>
    </div>
  );
};

export default ImageWithTextAnimation;
