import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/85 px-4 py-10 dark:border-slate-800 dark:bg-slate-900/90 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="grid h-10 w-10 place-content-center rounded-full border border-slate-300 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="grid h-10 w-10 place-content-center rounded-full border border-slate-300 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
          >
            <FaLinkedin />
          </a>
        </div>

        <p>Copyright {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-medium transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
        >
          <FaArrowUp />
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
