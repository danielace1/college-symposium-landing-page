import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHome = () => {
  return (
    <div className="flex items-center justify-center group">
      <Link to="/">
        <button className="flex items-center gap-3 px-8 py-4 glass-card border-white/10 text-white font-bold text-sm md:text-base uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-95">
          <ArrowLeft
            size={18}
            className="text-yellow-500 group-hover:-translate-x-2 transition-transform duration-300"
          />
          Back to Arena
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
