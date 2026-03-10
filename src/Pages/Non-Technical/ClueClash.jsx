import { useEffect } from "react";
import { motion } from "framer-motion";
import eventsData from "../../data/eventsData.json";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";
import { Clock, ShieldCheck, Award, Users, Search, Map } from "lucide-react";

const ClueClash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = eventsData["clue-cracker"];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#020202] flex items-center justify-center text-white">
        <p className="text-xl font-bold tracking-widest uppercase opacity-50">
          Event Logic Not Found
        </p>
      </div>
    );
  }

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-yellow-500/30 overflow-x-hidden font-['Plus_Jakarta_Sans']">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[50vw] h-[50vw] bg-yellow-600/[0.04] blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-yellow-900/[0.06] blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20 pb-16">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-20">
            <motion.div
              variants={itemVars}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#eab308]" />
              <span className="text-yellow-500 text-[10px] font-black tracking-[0.6em] uppercase pl-[0.6em]">
                Non-Technical Zone
              </span>
            </motion.div>
            <motion.h1
              variants={itemVars}
              className="text-6xl md:text-9xl font-[900] tracking-tighter uppercase leading-none italic"
            >
              {data.event_name}
              <span className="text-yellow-500">.</span>
            </motion.h1>
            <motion.div
              variants={itemVars}
              className="h-px w-24 bg-yellow-500/30 mx-auto my-8 md:mt-10 md:mb-10"
            />
            <motion.p
              variants={itemVars}
              className="text-white/40 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-medium italic px-4"
            >
              "{data.description}"
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                variants={itemVars}
                className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={data.image}
                  alt={data.event_name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-3 md:left-10 flex items-center gap-3">
                  <div className="p-2 md:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-4xl shadow-2xl">
                    {data.icon}
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white/90">
                    Mystery Decoded
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={itemVars}
                className="glass-card p-8 md:p-10 rounded-[3rem] border-white/5 bg-white/[0.01]"
              >
                <h3 className="text-white font-black uppercase tracking-[0.4em] text-[11px] mb-10 md:mb-12 flex items-center gap-3">
                  <Clock size={20} className="text-yellow-500" /> Challenge
                  Phases
                </h3>
                <div className="space-y-12">
                  {data.rounds.map((round, i) => (
                    <div
                      key={i}
                      className="relative pl-10 border-l border-white/10 group"
                    >
                      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_15px_#eab308] group-hover:scale-150 transition-transform" />

                      <span className="text-yellow-500/60 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                        Phase 0{i + 1}
                      </span>

                      <h4 className="font-bold text-white uppercase text-xl tracking-tight group-hover:text-yellow-500 transition-colors">
                        {round.round_name}
                      </h4>
                      <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xl">
                        {round.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mt-4 md:mt-6 text-[10px] font-black text-yellow-500 uppercase tracking-widest">
                        ⏱ {round.time_allotted}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <motion.div
                variants={itemVars}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-yellow-500/20 transition-all">
                  <Users
                    size={24}
                    className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">
                    Format
                  </span>
                  <p className="text-sm font-black uppercase">Team Based</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-yellow-500/20 transition-all">
                  <Map
                    size={24}
                    className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">
                    Nature
                  </span>
                  <p className="text-sm font-black uppercase">Hunt & Solve</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVars}
                className="glass-card p-8 md:p-10 rounded-[3rem]"
              >
                <h3 className="text-white font-black uppercase tracking-[0.4em] text-[11px] mb-8 flex items-center gap-3">
                  <Award size={20} className="text-yellow-500" /> Decipher
                  Metrics
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {data.judging_criteria.map((j, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-[1.5rem] border border-white/5 bg-white/[0.01] hover:border-yellow-500/30 transition-all group"
                    >
                      <p className="text-xs font-black text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                        {j.criteria}
                        <Search
                          size={12}
                          className="text-white/10 group-hover:text-yellow-500 transition-colors"
                        />
                      </p>
                      <p className="text-[11px] text-white/30 leading-relaxed font-medium">
                        {j.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVars}
                className="glass-card p-8 md:p-10 rounded-[3rem] bg-yellow-500/[0.01] border-yellow-500/10"
              >
                <h3 className="text-white font-black uppercase tracking-[0.4em] text-[11px] mb-8 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-yellow-500" /> Field
                  Rules
                </h3>
                <ul className="space-y-6">
                  {Object.entries(data.rules_and_regulations).map(
                    ([key, value], i) => (
                      <li key={i} className="group">
                        <p className="text-[9px] text-yellow-500/60 uppercase font-black tracking-widest mb-1">
                          {key.replace("_", " ")}
                        </p>
                        <p className="text-xs text-white/50 leading-relaxed group-hover:text-white transition-colors">
                          {value}
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={itemVars}
            className="mt-5 md:mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-12"
          >
            <BackToHome />
            <div className="scale-125 hover:scale-[1.3] transition-transform duration-500">
              <RegisterBtn />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClueClash;
