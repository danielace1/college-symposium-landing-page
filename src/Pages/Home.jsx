import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Modal from "react-modal";
import { Rocket, Calendar, Trophy, Award, ChevronDown } from "lucide-react";
import EventsCard from "../components/EventsCard";
import HeroParticles from "../components/HeroParticles";

Modal.setAppElement("#root");

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const targetDate = useMemo(() => new Date("2026-03-24T09:00:00"), []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setIsModalOpen(true);
      localStorage.setItem("hasSeenModal", "true");
    }

    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="">
      {/* Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202] px-4 pt-1 pb-2">
        <HeroParticles />

        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[50vw] h-[30vw] bg-yellow-600/10 blur-[100px] rounded-full"
          />
        </div>

        <motion.div
          style={{ y: y1, opacity }}
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-[1200px] mx-auto text-center flex flex-col items-center min-h-[80vh] justify-center"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:mb-2"
          >
            <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full" />
            <img
              src="/sparzo26-logo.png"
              alt="SPARZO Phoenix"
              className="w-28 h-28 md:w-36 md:h-36 object-contain logo-glow relative z-10"
            />
          </motion.div>

          <motion.div
            variants={itemVars}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-yellow-500/20 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#eab308]" />
            <span className="text-[8px] md:text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em]">
              National Technical Symposium • 2026
            </span>
          </motion.div>

          <motion.div variants={itemVars} className="relative mb-2 md:mb-4">
            <h1 className="metallic-text whitespace-nowrap text-[12vw] sm:text-[80px] md:text-[110px] lg:text-[140px] font-[900] leading-none tracking-[0.05em] uppercase font-['Plus_Jakarta_Sans']">
              GENORA
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] ml-4">
                ’26
              </span>
            </h1>
          </motion.div>

          {/* Date & Venue Badge */}
          <motion.div
            variants={itemVars}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4"
          >
            <div className="flex flex-col items-center md:items-end">
              <span className="text-yellow-500 font-black text-sm md:text-lg uppercase tracking-[0.2em]">
                March 24, 2026
              </span>
              <span className="text-white/30 text-[8px] uppercase tracking-[0.4em] font-bold">
                The Grand Arena
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent" />

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-white/60 text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-medium">
                Government College of Engineering
              </p>
              <p className="text-white/30 text-[8px] tracking-[0.3em] uppercase mt-1">
                Tirunelveli, Tamil Nadu
              </p>
            </div>
          </motion.div>

          {/* Countdown Section */}
          <motion.div
            variants={itemVars}
            className="mt-10 md:mt-12 grid grid-cols-4 gap-2 md:gap-4 w-full max-w-3xl"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="relative group">
                <div className="relative overflow-hidden flex flex-col items-center justify-center py-6 md:py-8 rounded-2xl glass-card border-white/5 transition-all duration-500 group-hover:border-yellow-500/30">
                  <span className="text-3xl md:text-5xl font-bold text-white tabular-nums tracking-tighter">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-yellow-500 mt-1 font-black">
                    {unit}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVars}
            className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center"
          >
            <a
              href="https://forms.gle/AzkYc3tMdCnkBrVn6"
              target="_blank"
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-yellow-500 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <button className="relative flex items-center gap-3 px-10 py-4 bg-yellow-500 text-black font-black text-xs tracking-[0.2em] uppercase rounded-full hover:scale-105 active:scale-95 transition-all">
                <Rocket
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Register Now
              </button>
            </a>

            <Scroll
              to="technical-events"
              smooth={true}
              duration={500}
              className="group cursor-pointer"
            >
              <button className="flex items-center gap-3 px-10 py-4 glass-card border-white/10 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all">
                <Calendar size={16} className="text-yellow-500" />
                View Events
              </button>
            </Scroll>
          </motion.div>

          {/* Perks */}
          <div className="mt-8 flex justify-center gap-6 opacity-20">
            <div className="flex items-center gap-2 text-[8px] font-bold tracking-widest uppercase">
              <Trophy size={12} /> 50K Prizes
            </div>
            <div className="flex items-center gap-2 text-[8px] font-bold tracking-widest uppercase">
              <Award size={12} /> Certificates
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 flex flex-col items-center gap-1 opacity-20 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-6 bg-gradient-to-b from-yellow-500 to-transparent" />
        </motion.div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/70"
        className="relative w-[85%] max-w-[320px] outline-none overflow-visible"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full rounded-[2rem] border border-yellow-500/20 bg-[#0A0A0A] p-7 overflow-hidden shadow-2xl"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src="/sparzo26-logo.png"
            alt="sparzo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 opacity-[0.08] pointer-events-none"
          />

          <div className="relative z-10 text-center">
            {/* Icon Header */}
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Trophy size={20} className="text-yellow-500" />
            </div>

            <h2 className="text-xl font-[900] text-white uppercase tracking-tighter">
              Exclusive <span className="text-yellow-500">Perks</span>
            </h2>

            <div className="h-px w-8 bg-white/10 mx-auto mt-3 mb-6" />

            {/* Perks List */}
            <div className="space-y-3">
              {[
                { icon: "💸", title: "Mega Prize Pool" },
                { icon: "📜", title: "Global Certification" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-lg">{item.icon}</span>
                  <h4 className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Primary Action */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-8 w-full py-4 bg-yellow-500 text-black font-[900] text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-yellow-400 transition-all active:scale-95 shadow-xl shadow-yellow-500/10"
            >
              Enter Arena
            </button>
          </div>

          {/* Corner Details */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-yellow-500/20 rounded-tl-[2rem]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-yellow-500/20 rounded-br-[2rem]" />
        </motion.div>
      </Modal>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#070707] py-14 md:py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVars}
          className="container relative z-10 mx-auto px-6 text-center"
        >
          <motion.div variants={itemVars} className="space-y-4">
            <h3 className="text-yellow-500/80 text-xs md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
              Government College of Engineering, Tirunelveli
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
              <p className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium">
                Affiliated to Anna University
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="mt-10 mb-12 relative inline-block p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm"
          >
            <h4 className="text-white/40 text-[9px] md:text-xs tracking-[0.5em] uppercase mb-3 pl-[0.8em]">
              Department of
            </h4>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Computer Science <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500">
                & Engineering
              </span>
            </h2>

            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500/30 rounded-br-3xl" />
          </motion.div>

          <motion.div variants={itemVars} className="space-y-8 w-full">
            <div className="flex flex-col items-center">
              <span className="text-white/30 text-[10px] md:text-[12px] tracking-[0.6em] md:tracking-[1em] uppercase mb-4 md:mb-6 pl-[0.6em] md:pl-[1em]">
                Proudly Presents
              </span>

              <div className="relative group w-full max-w-full px-4 flex justify-center items-center">
                <h1 className="jersey-10-regular text-[15vw] min-[450px]:text-7xl md:text-9xl lg:text-[10rem] text-white tracking-wider md:tracking-widest transition-all duration-700 md:group-hover:tracking-[0.2em] group-hover:text-yellow-500 leading-none whitespace-nowrap">
                  GENORA<span className="text-yellow-500">’26</span>
                </h1>

                <h1 className="jersey-10-regular absolute top-0 left-0 w-full text-center hidden md:block md:text-9xl lg:text-[10rem] text-yellow-500 tracking-widest opacity-20 blur-xl pointer-events-none group-hover:tracking-[0.2em] leading-none whitespace-nowrap">
                  GENORA’26
                </h1>

                <div className="absolute -bottom-2 w-1/2 h-1 bg-yellow-500/20 blur-md md:hidden group-hover:bg-yellow-500/50 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Events */}
      <section className="relative bg-[#020202] py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.03),transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-yellow-500/60 text-[10px] tracking-[1em] uppercase mb-4 pl-[1em]"
            >
              Choose Your Path
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-[900] text-white tracking-tighter uppercase font-['Plus_Jakarta_Sans']">
              HAPPENINGS
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="h-[2px] bg-yellow-500 mt-4 shadow-[0_0_20px_rgba(234,179,8,0.6)]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {[
              {
                id: "technical-events",
                label: "Technical",
                sub: "Logic & Code",
                icon: <Rocket size={24} />,
                phase: "Phase 01",
              },
              {
                id: "non-technical-events",
                label: "Non-Technical",
                sub: "Creativity & Fun",
                icon: <Trophy size={24} />,
                phase: "Phase 02",
              },
            ].map((tab) => (
              <Scroll
                key={tab.id}
                to={tab.id}
                spy={true}
                smooth={true}
                offset={-80}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(234, 179, 8, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex flex-col p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 group overflow-hidden"
                >
                  {/* Subtle card glow */}
                  <div className="absolute -inset-20 bg-yellow-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between relative z-10 mb-8">
                    <div className="p-3 rounded-2xl bg-white/[0.03] text-white/40 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-500">
                      {tab.icon}
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest pt-2">
                      {tab.phase}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                      {tab.label}
                    </h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-1 font-medium">
                      {tab.sub}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[9px] font-bold text-yellow-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Jump to Section{" "}
                    <ChevronDown size={14} className="animate-bounce" />
                  </div>
                </motion.div>
              </Scroll>
            ))}
          </div>
        </div>
      </section>

      {/* Event details */}
      <section className="relative bg-[#020202] pb-40 overflow-hidden md:px-8">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.05),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* TECHNICAL ARENA */}
          <div id="technical-events" className="pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-yellow-500 text-[10px] tracking-[0.5em] uppercase font-black"
                >
                  Phase 01
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-[900] text-white uppercase tracking-tighter mt-2 font-['Plus_Jakarta_Sans']">
                  Technical{" "}
                  <span className="metallic-text italic text-white/90">
                    Arena
                  </span>
                </h3>
              </div>
              <div className="h-[1px] hidden md:block flex-grow mx-10 bg-gradient-to-r from-yellow-500/30 to-transparent mb-4" />
              <p className="text-white/30 text-xs uppercase tracking-widest max-w-[200px] leading-relaxed">
                Where code meets pure innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  to: "/paper-presentation",
                  name: "Paper Presentation",
                  img: "/paperpresentation.png",
                  desc: "The ultimate stage for research and innovation in Computer Science.",
                },
                {
                  to: "/duo-debug",
                  name: "Duo Debug",
                  img: "/code-hunt.png",
                  desc: "Solve or be solved. An intense multi-round coding marathon.",
                },
                {
                  to: "/draftedge",
                  name: "Draft Edge",
                  img: "/webcraft.png",
                  desc: "Designing the future of the web with high-end UI/UX logic.",
                },
                {
                  to: "/prompt-paradox",
                  name: "Prompt Paradox",
                  img: "/sympai.png",
                  desc: "AI Pioneers only. Face the cutting-edge neural challenge.",
                },
              ].map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <RouterLink to={event.to}>
                    <EventsCard
                      name={event.name}
                      img={event.img}
                      details={event.desc}
                    />
                  </RouterLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FUN ZONE (NON-TECHNICAL) */}
          <div id="non-technical-events" className="pt-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="md:order-2 text-right">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-yellow-500 text-[10px] tracking-[0.5em] uppercase font-black"
                >
                  Phase 02
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-[900] text-white uppercase tracking-tighter mt-2 font-['Plus_Jakarta_Sans'] px-2">
                  Fun{" "}
                  <span className="metallic-text italic pr-4 inline-block text-white/90">
                    Zone
                  </span>
                </h3>
              </div>
              <div className="h-[1px] hidden md:block flex-grow mx-10 bg-gradient-to-l from-yellow-500/30 to-transparent mb-4 md:order-1" />
              <p className="text-white/30 text-xs uppercase tracking-widest max-w-[200px] leading-relaxed md:order-0">
                Where creativity takes flight beyond the screen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  to: "/cluecracker",
                  name: "Clue Cracker",
                  img: "/clue-clash.png",
                  desc: "Decode the mysteries and solve riddles under extreme pressure.",
                },
                {
                  to: "/fusionary",
                  name: "Fusionary",
                  img: "/fusionary.png",
                  desc: "Connect the dots and spark victory in this battle of sharp minds.",
                },
              ].map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <RouterLink to={event.to}>
                    <EventsCard
                      name={event.name}
                      img={event.img}
                      details={event.desc}
                    />
                  </RouterLink>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
