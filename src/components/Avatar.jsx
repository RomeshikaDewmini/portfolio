import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assests/profile.jpg';

const Avatar = ({ image = profileImage, alt = "Profile" }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150 animate-pulse" />

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 6,
        }}
        className="relative group cursor-pointer"
      >
        {/* Rotating Ring Effect on Hover */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
        
        {/* Inner gap */}
        <div className="absolute -inset-1 rounded-full bg-white dark:bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Avatar with Image */}
        <div className={`
          relative flex items-center justify-center
          w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 
          rounded-full 
          bg-gradient-to-br from-purple-500 to-blue-500
          shadow-xl shadow-purple-500/30 
          group-hover:shadow-2xl group-hover:shadow-purple-500/50
          transition-all duration-300
          overflow-hidden
        `}>
          <img 
            src={image} 
            alt={alt}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Avatar;