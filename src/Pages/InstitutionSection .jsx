import { motion } from "framer-motion";
import { Building2, MapPin, CalendarDays } from "lucide-react";

const InstitutionSection = () => {
  return (
    <section className="relative overflow-hidden px-5 text-white sm:px-8 md:px-12 lg:px-16 py-5">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[12%] top-0 h-px w-[28%] bg-gradient-to-l from-violet-500/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "auto" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-violet-400/60" />

          <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-white/30 sm:text-[9px]">
            The Institution Behind GENORA
          </span>
        </motion.div>

        <div className="mt-9 lg:grid lg:grid-cols-[210px_1fr_190px] lg:items-center lg:gap-14">
          <div className="flex items-center gap-5 sm:gap-7 lg:contents">
            <div className="relative shrink-0">
              <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/[0.1] bg-[#09090d] p-2 shadow-[0_16px_45px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28 sm:p-2.5 lg:h-40 lg:w-40 lg:p-3"
              >
                <div className="pointer-events-none absolute inset-1.5 rounded-full border border-dashed border-violet-400/[0.12] lg:inset-2" />

                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white">
                  <img
                    src="/gcelogo.jpg"
                    alt="Government College of Engineering Tirunelveli emblem"
                    className="h-[88%] w-[88%] object-contain"
                  />
                </div>

                <span className="absolute right-[7px] top-[7px] z-20 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,0.7)] lg:right-[10px] lg:top-[10px]" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0 flex-1 lg:col-start-2"
            >
              <div className="mb-2 flex items-center gap-2">
                <Building2
                  size={13}
                  strokeWidth={1.5}
                  className="shrink-0 text-violet-300/70"
                />

                <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-violet-300/70 sm:text-[8px]">
                  Hosted Institution
                </span>
              </div>

              {/* College name */}
              <h2 className="max-w-3xl text-[1.45rem] font-medium leading-[1] tracking-[-0.045em] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[3.25rem]">
                Government College of Engineering,
                <span className="block text-white/35">Tirunelveli</span>
              </h2>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/55 ">
                (An autonomous institution)
              </p>

              {/* Description */}
              <p className="mt-3 max-w-2xl text-[11px] leading-5 text-white/40 sm:text-sm sm:leading-6">
                The home of GENORA&apos;26 - bringing together engineering,
                creativity and innovation under one roof.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />

                  <div>
                    <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/40 sm:text-[7px]">
                      Department
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium text-white/60 sm:text-xs">
                      Computer Science & Engineering
                    </p>
                  </div>
                </div>

                <span className="hidden h-6 w-px bg-white/[0.08] sm:block" />

                {/* Location */}
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=8.6860755,77.725781"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  className="group flex items-center gap-2"
                >
                  <MapPin
                    size={13}
                    strokeWidth={1.5}
                    className="shrink-0 text-violet-300/70 transition-transform duration-300"
                  />

                  <div>
                    <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/40 sm:text-[7px]">
                      Location
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium text-white/60 transition-colors duration-300 group-hover:text-white sm:text-xs">
                      Tirunelveli
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="hidden lg:block"
          >
            <div className="border-l border-white/[0.08] pl-7">
              <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
                Event Venue
              </p>

              <p className="mt-3 text-sm font-medium text-white/65">
                GCE Tirunelveli
              </p>

              <div className="mt-7 flex items-center gap-2.5">
                <CalendarDays
                  size={13}
                  strokeWidth={1.5}
                  className="text-violet-300/60"
                />

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/20">
                    Event Date
                  </p>

                  <p className="mt-1 text-xs font-medium text-white/60">
                    14 October 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="mt-10 origin-left border-b border-white/[0.07]"
        >
          <div className="h-px w-16 bg-gradient-to-r from-violet-400/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionSection;
