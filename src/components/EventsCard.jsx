import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const accentStyles = {
  "Paper Presentation": {
    dot: "bg-amber-400",
    line: "from-amber-400/80 via-amber-400/30",
    text: "text-amber-200/70",
    glow: "bg-amber-400/[0.06]",
  },

  CodeVolt: {
    dot: "bg-cyan-400",
    line: "from-cyan-400/80 via-cyan-400/30",
    text: "text-cyan-200/70",
    glow: "bg-cyan-400/[0.06]",
  },

  "Prompt Paradox": {
    dot: "bg-fuchsia-400",
    line: "from-fuchsia-400/80 via-fuchsia-400/30",
    text: "text-fuchsia-200/70",
    glow: "bg-fuchsia-400/[0.06]",
  },

  "AI Verse": {
    dot: "bg-violet-400",
    line: "from-violet-400/80 via-violet-400/30",
    text: "text-violet-200/70",
    glow: "bg-violet-400/[0.06]",
  },

  "Player Auction": {
    dot: "bg-emerald-400",
    line: "from-emerald-400/80 via-emerald-400/30",
    text: "text-emerald-200/70",
    glow: "bg-emerald-400/[0.06]",
  },

  "Reel & Rhythm": {
    dot: "bg-pink-400",
    line: "from-pink-400/80 via-pink-400/30",
    text: "text-pink-200/70",
    glow: "bg-pink-400/[0.06]",
  },

  "Wit & Will": {
    dot: "bg-orange-400",
    line: "from-orange-400/80 via-orange-400/30",
    text: "text-orange-200/70",
    glow: "bg-orange-400/[0.06]",
  },
};

const defaultAccent = {
  dot: "bg-violet-400",
  line: "from-violet-400/80 via-violet-400/30",
  text: "text-violet-200/70",
  glow: "bg-violet-400/[0.06]",
};

const EventsCard = ({ event_name, image, type, number, path }) => {
  const accent = accentStyles[event_name] || defaultAccent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Link
        to={path}
        className="group relative block h-full overflow-hidden rounded-[18px] border border-white/[0.075] bg-[#09090c] outline-none transition-[transform,border-color,box-shadow] duration-400 ease-out hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d11]">
          <img
            src={image}
            alt={event_name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />

          {/* Cinematic bottom fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/10 to-transparent" />

          <div
            className={`pointer-events-none absolute inset-0 ${accent.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* TOP NUMBER */}
          <div className="absolute left-4 top-4">
            <span
              className="
                font-mono
                text-[9px]
                font-medium
                tracking-[0.18em]
                text-white/65
              "
            >
              {number}
            </span>
          </div>

          <div className="absolute right-4 top-4">
            <span className="font-mono text-[9px] font-medium tracking-[0.18em] text-white/65">
              {type}
            </span>
          </div>

          <div
            className={`absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r ${accent.line} opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
          />
        </div>

        {/*CONTENT */}
        <div className="relative px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          <div className="flex items-end justify-between gap-5">
            {/* Title */}
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${accent.dot} opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100`}
                />

                <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/25">
                  GENORA&apos;26
                </span>
              </div>

              <h3 className="truncate text-[1.25rem] font-medium leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-white sm:text-[1.5rem]">
                {event_name}
              </h3>
            </div>

            {/* Arrow */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/25 transition-all duration-400 group-hover:border-white/[0.16] group-hover:bg-white/[0.04] group-hover:text-white/75">
              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`h-px w-5 bg-gradient-to-r ${accent.line} transition-all duration-400 group-hover:w-9`}
              />

              <span
                className={`font-mono text-[8px] uppercase tracking-[0.24em] text-white/20 transition-colors duration-300 group-hover:${accent.text}`}
              >
                Explore
              </span>
            </div>

            <span className="font-mono text-[7px] tracking-[0.18em] text-white/15">
              {number}
            </span>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r ${accent.line} to-transparent transition-all duration-500 group-hover:w-full`}
        />
      </Link>
    </motion.div>
  );
};

EventsCard.propTypes = {
  event_name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  path: PropTypes.string,
};

export default EventsCard;
