import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Reveal from './Reveal';

const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90, color: 'from-orange-500 to-orange-300' },
  { name: 'CSS', icon: FaCss3Alt, level: 85, color: 'from-blue-500 to-cyan-400' },
  { name: 'JavaScript', icon: FaJs, level: 88, color: 'from-yellow-400 to-amber-300' },
  { name: 'React', icon: FaReact, level: 80, color: 'from-cyan-500 to-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'from-sky-500 to-cyan-300' },
  { name: 'Python', icon: FaPython, level: 78, color: 'from-indigo-500 to-blue-400' },
  { name: 'Figma', icon: FaFigma, level: 75, color: 'from-pink-500 to-purple-400' },
  { name: 'Git', icon: FaGitAlt, level: 82, color: 'from-red-500 to-orange-400' },
];

function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Skills</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A blend of engineering, design, and modern frontend tooling.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.name}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-white/30 bg-white/60 p-6 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-content-center rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30">
                    <Icon className="text-xl text-purple-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</p>
                  </div>
                </div>

                <div className="mt-4 h-3 rounded-full bg-slate-200/60 dark:bg-slate-800/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg shadow-current/30`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
