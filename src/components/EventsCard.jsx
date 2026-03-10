import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EventsCard = ({ name, img, details }) => {
  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation logic
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[450px] w-full rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 group cursor-pointer overflow-hidden transition-colors duration-500 hover:border-yellow-500/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 p-6 flex flex-col"
      >
        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <motion.img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="flex-grow">
          <h2 className="text-white font-bold text-2xl tracking-tighter uppercase mb-2 group-hover:text-yellow-500 transition-colors">
            {name}
          </h2>
          <p className="text-white/40 text-sm leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors">
            {details}
          </p>
        </div>

        <div
          style={{ transform: "translateZ(40px)" }}
          className="flex items-center gap-2 text-yellow-500 font-bold text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-all mt-4"
        >
          Explore Arena{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-2 transition-transform"
          />
        </div>
      </div>

      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-yellow-500/20 pointer-events-none transition-colors" />
    </motion.div>
  );
};

EventsCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  details: PropTypes.string,
};

export default EventsCard;
