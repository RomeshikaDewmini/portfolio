import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from './Reveal';
import profileImage from '../assests/profile.jpg'; // ← Import image

const roles = ['IT Undergraduate', 'Web Developer', 'UI/UX Enthusiast'];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        id: index,
        size: (index % 4) + 4,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 17) % 100}%`,
        delay: (index % 5) * 0.4,
        duration: 5 + (index % 4),
      })),
    []
  );

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isDoneTyping = !isDeleting && charIndex === currentRole.length;
    const isDoneDeleting = isDeleting && charIndex === 0;

    let timeout = 90;

    if (isDoneTyping) {
      timeout = 1300;
    } else if (isDeleting) {
      timeout = 40;
    }

    const timer = setTimeout(() => {
      if (isDoneTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDoneDeleting) {
        setIsDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
        return;
      }

      const nextChar = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(nextChar);
      setDisplayText(currentRole.slice(0, nextChar));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-b-[2.5rem] px-4 pb-20 pt-32 text-white sm:px-8"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <style>{`
        @keyframes gradient { 
          0% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
          100% { background-position: 0% 50%; } 
        }
        @keyframes spin { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes ring-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-ring-spin {
          animation: ring-spin 4s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 opacity-25">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute -bottom-14 left-0 h-40 w-[140%] animate-wave rounded-[100%] bg-white/20 blur-2xl dark:bg-slate-900/30" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left side - Text Content */}
        <Reveal>
          <div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]">
                Romeshika Dewmini
              </span>
            </h1>
            <h2 className="mt-4 min-h-10 text-lg font-medium text-cyan-100 sm:text-2xl">
              {displayText}
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-100 align-middle" />
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              I build beautiful, scalable, and user-friendly web experiences with a focus on delightful interactions and solid engineering fundamentals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl border border-white/40 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40"
              >
                Contact
              </motion.a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="https://github.com/RomeshikaDewmini"
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-content-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="http://www.linkedin.com/in/romeshika-dewmini-87216530b"  
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-content-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Right side - Profile Image with Rotating Ring */}
        <Reveal>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative flex justify-center items-center"
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-3xl animate-pulse" />
            
            {/* Main Avatar Container */}
            <div className="relative z-10 group">
              {/* Rotating Gradient Border Ring */}
              <div className="absolute -inset-2 rounded-full bg-conic-gradient from-purple-500 via-cyan-400 to-purple-500 animate-ring-spin opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Inner white border */}
              <div className="absolute -inset-1 rounded-full bg-white/10" />
              
              {/* Avatar Image Circle */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
                style={{
                  transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)`,
                }}
              >
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-3 border-white/30 shadow-2xl shadow-purple-500/40 overflow-hidden bg-gradient-to-br from-purple-600 to-cyan-500">
                  <img 
                    src={profileImage} 
                    alt="Romeshika Dewmini"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Optional: Small ring indicator below */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white/90">
                    Full Stack Developer
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;