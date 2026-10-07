import { ArrowUpRight } from "lucide-react";

const RegisterBtn = () => {
  return (
    <div className="group relative inline-flex">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-2 rounded-full bg-violet-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <a
        href="https://forms.gle/n1bCvPxmY8U5Dh318"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-violet-300/25 bg-violet-500 text-sm font-semibold tracking-[-0.01em] text-white shadow-[0_10px_40px_rgba(139,92,246,0.18)] transition-all duration-500 hover:-translate-y-0.5 hover:border-violet-200/40 hover:bg-violet-400 hover:shadow-[0_16px_50px_rgba(139,92,246,0.28)] active:translate-y-0 px-4 sm:px-6 py-2 sm:py-3"
      >
        {/* Shine sweep */}
        <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[120%]" />

        <span className="relative">Register Now</span>

        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-white/15">
          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </a>
    </div>
  );
};

export default RegisterBtn;
