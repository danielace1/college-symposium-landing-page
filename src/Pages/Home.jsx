import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const EVENT_DATE = new Date("2026-10-14T00:00:00+05:30").getTime();

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = EVENT_DATE - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base atmosphere */}
        <div className="absolute inset-0 bg-[#050507]" />

        {/* Large ambient purple bloom */}
        <motion.div
          className="absolute left-[28%] top-[18%] h-[700px] w-[700px] rounded-full bg-violet-600/[0.14] blur-[140px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo-side atmosphere */}
        <motion.div
          className="absolute right-[8%] top-[12%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.11] blur-[120px]"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom atmosphere */}
        <div className="absolute -bottom-[250px] left-[15%] h-[600px] w-[800px] rounded-full bg-indigo-500/[0.08] blur-[150px]" />

        {/* Architectural grid */}
        <div className="genora-grid absolute inset-0" />

        <div className="absolute inset-y-0 left-[35%] w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />

        <div className="absolute inset-y-0 left-[60%] w-px bg-gradient-to-b from-transparent via-violet-400/[0.025] to-transparent" />

        <div className="absolute inset-y-0 right-[18%] w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

        <div className="absolute left-0 right-0 top-[32%] h-px bg-gradient-to-r from-transparent via-white/[0.025] to-transparent" />

        <div className="absolute left-0 right-0 top-[72%] h-px bg-gradient-to-r from-transparent via-violet-400/[0.025] to-transparent" />

        {/* Moving light */}
        <motion.div
          className="absolute -left-[15%] top-[20%] h-px w-[55%] bg-gradient-to-r from-transparent via-violet-400/[0.12] to-transparent"
          animate={{
            x: ["0%", "240%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Tiny atmospheric particles */}
        <div className="genora-particles absolute inset-0" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.38)_100%)]" />

        {/* Noise */}
        <div className="genora-noise absolute inset-0 opacity-[0.018]" />
      </div>

      {/* HEADER */}

      <header className="relative z-50 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-xl sm:h-12 sm:w-12">
            <div className="absolute inset-0 bg-violet-500/10" />

            <img
              src="/genora-26-logo.ico"
              alt="GENORA 2026"
              className="relative h-full w-full object-cover p-0.5 rounded-full"
            />
          </div>

          <div className="hidden sm:block">
            <p className="font-mono text-[8px] tracking-[0.35em] text-white/35">
              GCE TIRUNELVELI
            </p>

            <p className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/75">
              CSE ASSOCIATION
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white"
        >
          Explore
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] transition-all duration-500 group-hover:rotate-45 group-hover:bg-violet-500/20">
            <ArrowDownRight size={12} />
          </span>
        </motion.button>
      </header>

      {/* HERO */}

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-[1500px] flex-col justify-center px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-violet-400 sm:w-12" />

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.38em] text-violet-300/80 sm:text-[9px]">
                National Level Technical Symposium
              </span>
            </motion.div>

            {/* Main title */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="select-none font-['Syncopate'] text-[17vw] font-bold leading-[0.78] tracking-[-0.09em] text-white sm:text-[15vw] lg:text-[9.5vw] xl:text-[9rem]"
              >
                GENORA
              </motion.h1>

              {/* Animated light sweep */}
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex items-end gap-5 sm:mt-10"
            >
              <span className="font-['Syncopate'] text-5xl font-bold leading-none tracking-[-0.08em] text-violet-300 sm:text-7xl">
                ’26
              </span>

              <div className="mb-1 h-10 w-px bg-white/10" />

              <div className="mb-1">
                <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
                  One day
                </p>

                <p className="mt-1 text-xs font-medium text-white/60 sm:text-sm">
                  Infinite possibilities.
                </p>
              </div>
            </motion.div>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/40 sm:mt-9 sm:text-base sm:leading-8"
            >
              Where technology meets imagination. A day of code, intelligence,
              creativity and competition built for the next generation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button className="group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-violet-500 px-6 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-500 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-[0_15px_45px_rgba(139,92,246,0.35)]">
                <span className="relative z-10">Register Now</span>

                <ArrowUpRight
                  size={14}
                  className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <button className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
                Explore Events
                <ArrowDown
                  size={13}
                  className="transition-transform duration-500 group-hover:translate-y-1"
                />
              </button>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
          >
            {/* Ambient glow */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-5">
              {/* Top status */}
              <div className="relative z-20 flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/35">
                    System active
                  </span>
                </div>

                <Sparkles size={14} className="text-violet-300/50" />
              </div>

              {/* Logo visual */}
              <div className="relative flex min-h-[260px] items-center justify-center sm:min-h-[310px]">
                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-violet-400/15 sm:h-[280px] sm:w-[280px]"
                >
                  <span className="absolute right-[8%] top-[12%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_#a78bfa]" />
                </motion.div>

                {/* Inner ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[190px] w-[190px] rounded-full border border-violet-400/10 sm:h-[230px] sm:w-[230px]"
                />

                {/* Logo */}
                <motion.img
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/genora-26-logo.png"
                  alt="GENORA 2026"
                  className="relative z-10 w-[60%] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] rounded-full"
                />
              </div>

              {/* Date */}
              <div className="relative grid grid-cols-[1fr_auto] items-end gap-5 border-t border-white/[0.07] pt-5">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
                    The day
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="font-['Syncopate'] text-5xl font-bold leading-none tracking-[-0.08em] text-white sm:text-6xl">
                      14
                    </span>

                    <div className="mb-1">
                      <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-violet-300">
                        OCT
                      </p>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.2em] text-white/25">
                        2026
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30">
                  <CalendarDays size={14} />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-4 rounded-full border border-white/10 bg-[#0b0b10]/90 px-4 py-2 font-mono text-[7px] uppercase tracking-[0.25em] text-white/40 shadow-xl backdrop-blur-xl sm:left-8"
            >
              One day · Infinite possibilities
            </motion.div>
          </motion.div>
        </div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] backdrop-blur-xl"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/[0.08] blur-[90px]" />

          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>

              <span className="genora-label">The countdown begins</span>
            </div>

            <span className="hidden font-mono text-[8px] tracking-[0.25em] text-white/20 sm:block">
              GENORA / 26
            </span>
          </div>

          {/* Numbers */}
          <div className="relative grid grid-cols-4">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`relative flex min-h-[125px] flex-col justify-center px-3 py-6 sm:min-h-[155px] sm:px-6 lg:min-h-[175px] ${
                  index !== 0 ? "border-l border-white/[0.07]" : ""
                }`}
              >
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0.25, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[2.8rem] font-medium leading-none tracking-[-0.08em] text-white sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.3rem]"
                >
                  {String(item.value).padStart(2, "0")}
                </motion.div>

                <span className="mt-4 font-mono text-[7px] font-medium uppercase tracking-[0.3em] text-white/30 sm:text-[8px]">
                  {item.label}
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-violet-400"
                  initial={{ width: 0 }}
                  animate={{ width: "35%" }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.8,
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-between px-1">
          <p className="genora-label">Until the gates of Genora ’26 open</p>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden text-white/20 sm:block"
          >
            →
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[7px] uppercase tracking-[0.3em] text-white/20 lg:flex"
        >
          Scroll to explore
          <ArrowDown size={12} />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
