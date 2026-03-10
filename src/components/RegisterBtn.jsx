import { Rocket } from "lucide-react";

const RegisterBtn = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

      <a
        href="https://forms.gle/AzkYc3tMdCnkBrVn6"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        <button className="flex items-center gap-3 px-8 py-4 bg-yellow-500 text-black font-[900] text-sm md:text-base uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform group-hover:scale-105 group-active:scale-95 shadow-xl">
          <Rocket
            size={20}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
          />
          Register Now
        </button>
      </a>
    </div>
  );
};

export default RegisterBtn;
