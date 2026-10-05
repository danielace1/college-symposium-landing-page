import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const contacts = [
  {
    role: "Student Coordinator",
    phone: "+91 94894 81520",
  },
  {
    role: "Association Head",
    phone: "+91 80122 60400",
  },
];

const socials = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/genora_offl/",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gcetirunelveli",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:genora.cseofficial@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050507] text-white">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.035] blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/[0.15] to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-10 md:py-14 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-5 border-b border-white/[0.06] pb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400/70" />

              <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-violet-300/60">
                Association of CSE
              </span>
            </div>

            {/* title */}
            <h2 className="text-[3.2rem] font-semibold leading-none tracking-[-0.07em] sm:text-6xl md:text-7xl">
              GENORA
              <span className="text-violet-400/80">&apos;26</span>
            </h2>

            <p className="mt-3 max-w-lg text-[15px] leading-6 text-white/35 sm:text-sm">
              Where ideas take shape, skills are tested, and new possibilities
              begin.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] text-white/35 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.07] hover:text-violet-200"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* INFORMATION GRID */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-14">
          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <FooterLabel>Direct Line</FooterLabel>

            <div className="mt-5 space-y-2">
              {contacts.map((contact) => (
                <a
                  key={contact.role}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.035]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-white/30 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-300">
                      <Phone size={15} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-white/25">
                        {contact.role}
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                        {contact.phone}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300/70"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CAMPUS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            className="lg:col-span-4"
          >
            <FooterLabel>Campus</FooterLabel>

            <a
              href="https://maps.app.goo.gl/a9wpVN5MEG37b7q58"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 block rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.035]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-white/30 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-300">
                  <MapPin size={15} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[13px] font-medium leading-5 text-white/70 transition-colors duration-300 group-hover:text-white">
                    Government College of Engineering
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-white/30">
                    Tirunelveli - 627007
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-violet-300/60">
                  Open in Maps
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.4}
                  className="text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </a>
          </motion.div>

          {/* OFFICIAL WEBSITE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.16,
            }}
            className="lg:col-span-3"
          >
            <FooterLabel>Institution</FooterLabel>

            <a
              href="https://gcetly.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex min-h-[130px] flex-col justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.035]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-white/30 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-300">
                  <Globe size={15} strokeWidth={1.5} />
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </div>

              <div>
                <p className="mt-1 text-[13px] font-medium text-white/65 transition-colors group-hover:text-white">
                  Government College of Engineering, Tirunelveli
                </p>

                <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
                  Official Website
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/[0.06] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              © 2026 Association of Computer Science & Engineering
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-violet-400/70 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Government College of Engineering · Tirunelveli
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-[-0.08em] text-white/[0.012]">
        GENORA
      </div>
    </footer>
  );
};

// Footer label component
const FooterLabel = ({ children }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-violet-400/50" />

      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-violet-300/60">
        {children}
      </span>
    </div>
  );
};

export default Footer;

FooterLabel.propTypes = {
  children: PropTypes.node,
};
