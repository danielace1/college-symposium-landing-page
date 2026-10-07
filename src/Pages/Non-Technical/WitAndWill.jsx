import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Eye,
  Lightbulb,
  Puzzle,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

import eventsData from "../../data/eventsData.json";
import GenoraBackground from "../../components/GenoraBackground";
import RegisterBtn from "../../components/RegisterBtn";

const WitAndWill = () => {
  const event = eventsData["wit-and-will"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const challengeIcons = [Puzzle, Eye, Target, Brain, Lightbulb, Zap];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <GenoraBackground />

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.045] blur-[140px]" />

        <div className="absolute right-[5%] top-[38%] h-[360px] w-[360px] rounded-full bg-indigo-500/[0.035] blur-[130px]" />

        <div className="absolute bottom-[5%] left-[30%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-6 sm:px-8 md:px-12 lg:px-16">
        {/* TOP NAV */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-white/35 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span className="font-mono text-[14px] uppercase tracking-[0.08em]">
              All Events
            </span>
          </Link>

          <span className="font-mono text-[16px] tracking-[0.2em] text-violet-300/70">
            GENORA&apos;26
          </span>
        </motion.div>

        {/* HERO */}
        <section className="pt-12">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-violet-400/70" />

                <span className="font-mono text-[12px] uppercase tracking-[0.34em] text-violet-300/70">
                  Beyond Code · 02
                </span>
              </div>

              {/* TITLE */}
              <h1 className="max-w-5xl text-[3.5rem] font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
                Wit
                <span className="block text-white/35">&amp; Will.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-white/40 sm:text-[15px]">
                {event.description}
              </p>

              {/* REGISTER */}
              <div className="mt-7 flex items-center gap-4">
                <RegisterBtn />
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.event_name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-white/60">
                      Wit · Strategy · Will
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
                  <Snapshot
                    icon={<Users size={14} />}
                    label="Team"
                    value={event.team_size}
                  />

                  <Snapshot
                    icon={<Zap size={14} />}
                    label="Format"
                    value="2 Rounds"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PARTICIPATION */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-violet-400/[0.12] bg-violet-500/[0.035] px-6 py-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/[0.08] blur-[80px]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/[0.12] bg-violet-400/[0.06] text-violet-300">
                  <Users size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/60">
                    Participation
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    {event.participation} · {event.team_size}
                  </p>
                </div>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                Think · Observe · Execute
              </span>
            </div>
          </div>
        </motion.section>

        {/* EVENT FLOW */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="01 / Event Flow"
            title="Two rounds."
            subtitle="Think fast. Work together. Turn every challenge into points."
          />

          <div className="mt-7 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
            {event.rounds.map((round, index) => (
              <RoundCard
                key={round.round_name}
                number={String(index + 1).padStart(2, "0")}
                round={round}
              />
            ))}
          </div>
        </section>

        {/* WIT */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="02 / WIT"
            title="Think. Decode. Connect."
            subtitle="A collection of puzzles, riddles, patterns and observation challenges built to test your team's mental agility."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {event.rounds[0].challenges.map((challenge, index) => (
              <ChallengeCard
                key={challenge.challenge_name}
                number={String(index + 1).padStart(2, "0")}
                challenge={challenge}
                icon={challengeIcons[index]}
              />
            ))}
          </div>
        </section>

        {/* WILL */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#09090d] p-7 md:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-[100px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-violet-400/60" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/60">
                      03 / Will
                    </span>
                  </div>

                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                    Will decides the winner.
                    <span className="text-white/35">
                      {" "}
                      Strategy meets action.
                    </span>
                  </h2>
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/25 sm:flex">
                  <Zap size={17} strokeWidth={1.4} />
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-6 text-white/40">
                {event.rounds[1].description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <WillCard icon={<Target size={15} />} title="Strategy" />

                <WillCard icon={<Users size={15} />} title="Teamwork" />

                <WillCard icon={<Zap size={15} />} title="Adaptability" />

                <WillCard icon={<Trophy size={15} />} title="Determination" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* EVALUATION */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="04 / Evaluation"
            title="Every move counts."
            subtitle="Performance is measured across accuracy, strategy, teamwork, creativity and execution."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {event.evaluation.map((criteria, index) => (
              <EvaluationCard
                key={criteria}
                number={String(index + 1).padStart(2, "0")}
                criteria={criteria}
              />
            ))}
          </div>
        </section>

        {/* WINNER */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-400/[0.12] bg-violet-500/[0.035] p-7 md:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.08] blur-[90px]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/[0.12] bg-violet-400/[0.06] text-violet-300">
                <Trophy size={18} strokeWidth={1.5} />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/60">
                  The Winner
                </p>

                <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                  One team takes it all.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/40">
                  {event.winner}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* BOTTOM NAV */}
        <div className="mt-12 border-t border-white/[0.06] pt-7 md:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.19em] text-white/40 transition-colors hover:text-white/60"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to events
            </Link>

            <span className="font-mono text-[10px] uppercase tracking-[0.19em] text-white/40">
              GENORA&apos;26 · Wit &amp; Will
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

// Snapshot Component
const Snapshot = ({ icon, label, value }) => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 text-violet-300/60">
        {icon}

        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          {label}
        </span>
      </div>

      <p className="mt-1 text-[11px] leading-4 text-white/45">{value}</p>
    </div>
  );
};

// Section intro component
const SectionIntro = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-violet-400/60" />

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/60">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-2 text-sm text-white/30">{subtitle}</p>
    </div>
  );
};

// Round card component
const RoundCard = ({ number, round }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#0d0d13" }}
      transition={{ duration: 0.25 }}
      className="group relative bg-[#0a0a0f] p-6"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/55">
          {number}
        </span>

        {number === "01" ? (
          <Brain
            size={15}
            strokeWidth={1.4}
            className="text-white/30 transition-colors duration-300 group-hover:text-violet-300/70"
          />
        ) : (
          <Zap
            size={15}
            strokeWidth={1.4}
            className="text-white/30 transition-colors duration-300 group-hover:text-violet-300/70"
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium tracking-[-0.025em] text-white/85">
          {round.round_name}
        </h3>

        <p className="mt-2 text-[13px] leading-5.5 text-white/40">
          {round.description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className="h-px w-5 bg-violet-400/50" />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
          Round {number}
        </span>
      </div>
    </motion.div>
  );
};

// Challenge card component
const ChallengeCard = ({ number, challenge, icon: Icon }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/50">
          {number}
        </span>

        <Icon
          size={15}
          strokeWidth={1.4}
          className="text-white/20 transition-colors duration-300 group-hover:text-violet-300/70"
        />
      </div>

      <h3 className="mt-4 text-[14px] font-medium tracking-[-0.02em] text-white/70">
        {challenge.challenge_name}
      </h3>

      <p className="mt-2 text-[12px] leading-5 text-white/35">
        {challenge.description}
      </p>

      {challenge.example && (
        <div className="mt-4 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300/45">
            Example
          </span>

          <p className="mt-1 text-[11px] text-white/45">{challenge.example}</p>
        </div>
      )}
    </div>
  );
};

// Will card component
const WillCard = ({ icon, title }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-4 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-white/25 transition-colors duration-300 group-hover:border-violet-300/[0.15] group-hover:text-violet-300/70">
          {icon}
        </div>

        <span className="text-[12px] text-white/50">{title}</span>
      </div>
    </div>
  );
};

// Evaluation card component
const EvaluationCard = ({ number, criteria }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/50">
        {number}
      </span>

      <h3 className="mt-4 text-[14px] font-medium text-white/70">{criteria}</h3>
    </div>
  );
};

Snapshot.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.string,
};

SectionIntro.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

RoundCard.propTypes = {
  number: PropTypes.string,
  round: PropTypes.shape({
    round_name: PropTypes.string,
    description: PropTypes.string,
  }),
};

ChallengeCard.propTypes = {
  number: PropTypes.string,
  challenge: PropTypes.shape({
    challenge_name: PropTypes.string,
    description: PropTypes.string,
    example: PropTypes.string,
  }),
  icon: PropTypes.elementType,
};

WillCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

EvaluationCard.propTypes = {
  number: PropTypes.string,
  criteria: PropTypes.string,
};

export default WitAndWill;
