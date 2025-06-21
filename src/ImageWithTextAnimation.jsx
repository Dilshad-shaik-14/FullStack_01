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
        className="absolute bottom-0 left-0 flex flex-col items-start w-full h-full justify-end"
      >
        <div className="bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-md rounded-xl p-10 m-10 max-w-3xl shadow-2xl border border-white/20">
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            On the Open Road
          </h1>
          <h2 className="text-xl text-gray-100 leading-relaxed font-medium drop-shadow">
            The open road has always symbolized freedom, opportunity, and the promise of new horizons. Whether it’s the daily commute or a cross-country adventure, every journey brings its own stories and discoveries. As vehicles glide along endless highways and scenic byways, we are reminded of the connections that roads create—linking people, places, and possibilities. Join us as we celebrate the spirit of travel, the marvels of modern transportation, and the adventures that await just beyond the next bend.
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageWithTextAnimation;
