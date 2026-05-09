import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Timeline', href: '#timeline', id: 'timeline' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

function Navbar({ activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/30 bg-white/60 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/20 dark:bg-slate-900/40">


        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/50'
                    : 'text-slate-700 hover:bg-white/50 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300/60 bg-white/80 p-2.5 text-slate-700 transition hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Toggle theme"
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.span>
          </button>

          <button
            type="button"
            className="grid h-10 w-10 place-content-center rounded-full border border-slate-300/60 bg-white/80 md:hidden dark:border-slate-700 dark:bg-slate-900"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open menu"
          >
            <span className="relative h-4 w-5">
              <motion.span
                className="absolute left-0 top-0 block h-0.5 w-5 bg-slate-700 dark:bg-slate-200"
                animate={open ? { rotate: 45, top: 8 } : { rotate: 0, top: 0 }}
              />
              <motion.span
                className="absolute left-0 top-2 block h-0.5 w-5 bg-slate-700 dark:bg-slate-200"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute left-0 top-4 block h-0.5 w-5 bg-slate-700 dark:bg-slate-200"
                animate={open ? { rotate: -45, top: 8 } : { rotate: 0, top: 16 }}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            className="mx-auto mt-2 w-full max-w-6xl rounded-3xl border border-white/30 bg-white/60 p-3 shadow-2xl shadow-black/10 backdrop-blur-2xl md:hidden dark:border-white/20 dark:bg-slate-900/40"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`mb-1 block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/30'
                    : 'text-slate-700 hover:bg-white/50 dark:text-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
