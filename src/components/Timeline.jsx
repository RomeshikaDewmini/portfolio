import { motion } from 'framer-motion';
import Reveal from './Reveal';

const timelineItems = [
{
  year: '2022 - Present',
  title: 'BSc in Information Technology',
  institution: 'Sri Lanka Institute of Information Technology',
  description: 'Undergraduate student studying software architecture, algorithms, and full-stack web development. Maintaining a strong academic record while building practical projects.',
},

  {
    year: '2025',
    title: 'Full Stack Internship',
    institution: 'SLT mobitel',
    description: 'Developed full-stack web applications using React, Tailwind CSS, and Node.js. Built reusable UI components and optimized responsive design for cross-device compatibility.',
  },

];

function Timeline() {
  return (
    <section id="timeline" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education and Experience</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A growing path of academics, practical projects, and hands-on industry learning.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-cyan-400 to-fuchsia-500 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-7">
            {timelineItems.map((item, index) => (
              <Reveal key={item.title}>
                <div className="relative">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                    className="absolute left-[9px] top-9 z-10 h-3 w-3 rounded-full bg-primary shadow-glow sm:left-1/2 sm:-translate-x-1/2"
                  />

                  <article
                    className={`rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/60 sm:w-[calc(50%-1.5rem)] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 ${
                      index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{item.year}</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.institution}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
