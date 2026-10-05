import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import PropTypes from "prop-types";
import EventsCard from "../components/EventsCard";
import eventsData from "../data/eventsData.json";

const EventsSection = () => {
  const events = Object.entries(eventsData).map(([slug, event]) => ({
    ...event,
    slug,
    path: `/${slug}`,
  }));

  const technicalEvents = events.filter((event) =>
    ["ai-verse", "code-volt", "paper-presentation", "prompt-paradox"].includes(
      event.slug,
    ),
  );

  const nonTechnicalEvents = events.filter((event) =>
    ["player-auction", "reel-and-rhythm", "wit-and-will"].includes(event.slug),
  );

  return (
    <section
      id="events"
      className="relative overflow-hidden px-5 py-14 text-white sm:px-8 md:px-12 lg:px-16"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[18%] h-64 w-64 rounded-full bg-violet-500/[0.025] blur-[110px]" />

        <div className="absolute bottom-[15%] right-[10%] h-72 w-72 rounded-full bg-violet-500/[0.02] blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-5 md:grid-cols-[1fr_320px] md:items-end lg:grid-cols-[1fr_380px]"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-violet-400/60" />

              <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-violet-300/65">
                The Arena
              </span>
            </div>

            <h2 className="max-w-3xl text-[2.9rem] font-medium leading-[0.92] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              Find your
              <span className="block text-white/30">way to stand out.</span>
            </h2>
          </div>

          <div className="md:pb-1">
            <p className="max-w-sm text-[14px] leading-6 text-white/35 sm:text-[15px]">
              Ideas, skill, creativity and instinct come together across
              technical challenges and unconventional experiences.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400/40" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Choose your challenge
              </span>
            </div>
          </div>
        </motion.div>

        {/* TECHNICAL */}
        <div className="mt-14">
          <SectionHeader
            icon={<Code2 size={22} strokeWidth={1.5} />}
            label="Technical"
            description="Build. Solve. Compete."
          />

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {technicalEvents.map((event, index) => (
              <EventsCard
                key={event.slug}
                {...event}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10">
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="h-1 w-1 rounded-full bg-violet-400/50" />

            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </div>

        {/* NON TECHNICAL */}
        <div>
          <SectionHeader
            icon={<Sparkles size={14} strokeWidth={1.5} />}
            label="Beyond Code"
            description="Play. Create. Connect."
          />

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nonTechnicalEvents.map((event, index) => (
              <EventsCard
                key={event.slug}
                {...event}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-white/[0.06] pt-6 sm:mt-24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/30">
              GENORA&apos;26
            </p>

            <p className="text-[12px] text-white/30">
              Your idea deserves an arena.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section Header Component
const SectionHeader = ({ icon, label, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-between border-b border-white/[0.06] pb-4"
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-violet-300/70">
          {icon}
        </div>

        {/* Text */}
        <div className="flex items-baseline gap-3">
          <h3 className="text-2xl font-medium tracking-[-0.01em] text-white/80">
            {label}
          </h3>

          <span className="text-white/30 inline text-[13px] sm:text-[16px]">
            {description}
          </span>
        </div>
      </div>

      {/* right marker */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          Phase {label === "Technical" ? "I" : "II"}
        </span>

        <span className="h-1 w-1 rounded-full bg-violet-400/50" />
      </div>
    </motion.div>
  );
};

export default EventsSection;

SectionHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
