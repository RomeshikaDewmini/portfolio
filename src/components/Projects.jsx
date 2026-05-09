import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Neon Task Board',
    description: 'A kanban-style productivity app with drag-and-drop workflows and deadline analytics.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Uni Event Pulse',
    description: 'An event discovery platform for students with category filters and RSVP tracking.',
    tech: ['Vite', 'Firebase', 'JavaScript'],
  },
  {
    title: 'TravelSnap UI Kit',
    description: 'A reusable component and design system prototype for travel and lifestyle products.',
    tech: ['Figma', 'React', 'Storybook'],
  },
  {
    title: 'Budget Bloom',
    description: 'A personal finance dashboard for tracking income, expenses, and monthly goals.',
    tech: ['React', 'Python API', 'Charts'],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Selected work blending visual quality with practical functionality.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="group rounded-3xl bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-purple-500/30 p-[2px]">
                <div className="h-full rounded-3xl border border-white/40 bg-white/70 p-5 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/70">
                  <div className="overflow-hidden rounded-2xl">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="relative h-44 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
                      <p className="absolute bottom-3 right-3 rounded-full bg-black/25 px-3 py-1 text-xs text-white backdrop-blur">
                        Project {index + 1}
                      </p>
                    </motion.div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:border-primary/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-2 rounded-xl border border-purple-300 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 transition shadow-md shadow-purple-500/20 dark:border-purple-500/40 dark:bg-purple-900/20 dark:text-purple-300"
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition shadow-md shadow-cyan-500/20 dark:border-cyan-500/40 dark:bg-cyan-900/20 dark:text-cyan-300"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            View More on GitHub
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
