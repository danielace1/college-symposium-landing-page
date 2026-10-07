import { motion } from "framer-motion";

import {
  ArrowLeft,
  BarChart3,
  Coins,
  Gavel,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

import eventsData from "../../data/eventsData.json";
import GenoraBackground from "../../components/GenoraBackground";
import RegisterBtn from "../../components/RegisterBtn";

const PlayerAuction = () => {
  const event = eventsData["player-auction"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
                  Beyond Code · 03
                </span>
              </div>

              {/* TITLE */}
              <h1 className="max-w-5xl text-[3.5rem] font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
                Player
                <span className="block text-white/35">Auction.</span>
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
                      Bid · Build · Win
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
                    icon={<Trophy size={14} />}
                    label="Squad"
                    value={`${event.final_squad_size} Players`}
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

              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-white/50">
                Max {event.maximum_teams} Teams
              </span>
            </div>
          </div>
        </motion.section>

        {/* EVENT FLOW */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="01 / Event Flow"
            title="Two stages."
            subtitle="Build your squad. Then prove its strength."
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

        {/* PLAYER AUCTION */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="02 / Player Auction"
            title="Bid with purpose."
            subtitle="Every player has value. Every bid shapes your final squad."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AuctionCard
              number="01"
              icon={<BarChart3 size={15} />}
              title="Player Statistics"
              description="Players will be introduced one by one along with their statistics and performance details."
            />

            <AuctionCard
              number="02"
              icon={<Gavel size={15} />}
              title="Live Bidding"
              description="Teams can compete by placing bids for players based on their strategy and squad requirements."
            />

            <AuctionCard
              number="03"
              icon={<Target size={15} />}
              title="Smart Selection"
              description="Choose players carefully based on performance, role, value, and the requirements of your final squad."
            />
          </div>
        </section>

        {/* AUCTION STRATEGY */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#09090d] p-7">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-[100px]" />

            <div className="relative max-w-3xl">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/[0.12] bg-violet-400/[0.05] text-violet-300">
                <WalletCards size={18} strokeWidth={1.5} />
              </div>

              <h2 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                Build the right squad.
                <span className="text-white/35">
                  {" "}
                  Not just the biggest one.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                Teams must manage their resources strategically while building a
                balanced squad of {event.final_squad_size} players.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <StrategyPoint
                  icon={<Target size={15} />}
                  title="Balance"
                  description="Build a squad with the right combination of players."
                />

                <StrategyPoint
                  icon={<Coins size={15} />}
                  title="Resource Management"
                  description="Make every bidding decision count."
                />

                <StrategyPoint
                  icon={<BarChart3 size={15} />}
                  title="Player Value"
                  description="Use player performance and statistics to guide your choices."
                />

                <StrategyPoint
                  icon={<ShieldCheck size={15} />}
                  title="Squad Strength"
                  description="Create a competitive final squad capable of winning."
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* SQUAD EVALUATION */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="03 / Squad Evaluation"
            title="The auction ends."
            subtitle="The real test begins with the squad you built."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {event.judging_criteria.map((criteria, index) => (
              <EvaluationCard
                key={criteria.criteria}
                number={String(index + 1).padStart(2, "0")}
                criteria={criteria}
              />
            ))}
          </div>
        </section>

        {/* RULES */}
        <section className="mt-12 md:mt-16">
          <SectionIntro
            eyebrow="04 / Guidelines"
            title="Know the rules."
            subtitle="Plan your squad, manage your resources, and play the auction strategically."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {Object.entries(event.rules_and_regulations).map(
              ([key, value], index) => (
                <RuleCard
                  key={key}
                  number={String(index + 1).padStart(2, "0")}
                  value={value}
                />
              ),
            )}
          </div>
        </section>

        {/* FINAL SQUAD */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard
              icon={<Users size={17} />}
              label="Final Squad"
              value={`Every team must build a final squad of ${event.final_squad_size} players.`}
            />

            <InfoCard
              icon={<Trophy size={17} />}
              label="Winner"
              value={event.winner}
            />
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
              GENORA&apos;26 · Player Auction
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

// Snapshot component
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
          <Gavel
            size={15}
            strokeWidth={1.4}
            className="text-white/30 transition-colors duration-300 group-hover:text-violet-300/70"
          />
        ) : (
          <Trophy
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

// Auction card component
const AuctionCard = ({ number, icon, title, description }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/50">
          {number}
        </span>

        <div className="text-white/20 transition-colors duration-300 group-hover:text-violet-300/70">
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-[14px] font-medium tracking-[-0.02em] text-white/70">
        {title}
      </h3>

      <p className="mt-2 text-[12px] leading-5 text-white/35">{description}</p>
    </div>
  );
};

// Strategy point component
const StrategyPoint = ({ icon, title, description }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-white/25 transition-colors duration-300 group-hover:border-violet-300/[0.15] group-hover:text-violet-300/70">
          {icon}
        </div>

        <h3 className="text-[13px] font-medium text-white/65">{title}</h3>
      </div>

      <p className="mt-3 text-[11px] leading-5 text-white/30">{description}</p>
    </div>
  );
};

// Evaluation Card component
const EvaluationCard = ({ number, criteria }) => {
  return (
    <div className="group rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/50">
        {number}
      </span>

      <h3 className="mt-4 text-[14px] font-medium text-white/70">
        {criteria.criteria}
      </h3>

      <p className="mt-2 text-[11px] leading-5 text-white/30">
        {criteria.description}
      </p>
    </div>
  );
};

// Rule Card component
const RuleCard = ({ number, value }) => {
  return (
    <div className="group flex gap-4 rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300/50">
        {number}
      </span>

      <p className="text-[12px] leading-5 text-white/50">{value}</p>
    </div>
  );
};

// Info card component
const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="group rounded-[1.25rem] border border-white/[0.07] bg-white/[0.018] p-6 transition-all duration-300 hover:border-violet-300/[0.15] hover:bg-violet-500/[0.025]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/30 transition-colors duration-300 group-hover:border-violet-300/[0.15] group-hover:text-violet-300/70">
          {icon}
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          {label}
        </span>
      </div>

      <p className="mt-4 text-[12px] leading-5 text-white/45">{value}</p>
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

AuctionCard.propTypes = {
  number: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

StrategyPoint.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

EvaluationCard.propTypes = {
  number: PropTypes.string,
  criteria: PropTypes.shape({
    criteria: PropTypes.string,
    description: PropTypes.string,
  }),
};

RuleCard.propTypes = {
  number: PropTypes.string,
  value: PropTypes.string,
};

InfoCard.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default PlayerAuction;
