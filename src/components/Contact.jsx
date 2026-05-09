import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import Reveal from './Reveal';

const fields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Let us collaborate on meaningful digital products and creative ideas.
            </p>

            <div className="mt-8 space-y-4">
              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/70 p-4 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/60">
                <FaEnvelope className="text-purple-600 dark:text-cyan-400" />
                <span className="text-sm text-slate-700 dark:text-slate-200">romeshikadewmini@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/70 p-4 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/60">
                <FaPhone className="text-purple-600 dark:text-cyan-400" />
                <span className="text-sm text-slate-700 dark:text-slate-200">+94 76 734 9126</span>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/70 p-4 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/60">
                <FaLocationDot className="text-purple-600 dark:text-cyan-400" />
                <span className="text-sm text-slate-700 dark:text-slate-200">Galle, Sri Lanka</span>
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/60 sm:p-8"
          >
            <div className="space-y-5">
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-300/60 bg-white/50 px-4 pb-3 pt-6 text-sm text-slate-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-400/30 dark:border-slate-500/60 dark:bg-slate-900/30 dark:text-slate-100"
                  />
                  <label
                    htmlFor={field.name}
                    className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:scale-90 peer-focus:text-purple-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-90 dark:text-slate-400"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full resize-none rounded-xl border border-slate-300/60 bg-white/50 px-4 pb-3 pt-6 text-sm text-slate-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-400/30 dark:border-slate-500/60 dark:bg-slate-900/30 dark:text-slate-100"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:scale-90 peer-focus:text-purple-600 dark:peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-90 dark:text-slate-400"
                >
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02, y: -2 }}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
