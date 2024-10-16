import "../fonts/stylesheet.css";
import { useState, useEffect, useMemo } from "react";

import { Link as Scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Modal from "react-modal";

import EventsCard from "../components/EventsCard";
import ConfettiEl from "../util/Confetti";

Modal.setAppElement("#root");

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = useMemo(() => new Date("2024-10-16T10:00:00"), []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(
    () => {
      const hasSeenModal = localStorage.getItem("hasSeenModal");

      if (!hasSeenModal) {
        setIsModalOpen(true);
        setShowConfetti(true);

        localStorage.setItem("hasSeenModal", "true");
      }

      const interval = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          alert("The event has started!");
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      }, 1000);

      return () => clearInterval(interval);
    },
    [targetDate],
    []
  );

  // Clear the modal flag when the component unmounts or the window is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasSeenModal");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const splitDigits = (num) => String(num).padStart(2, "0").split("");

  const dayDigits = splitDigits(timeLeft.days);
  const hourDigits = splitDigits(timeLeft.hours);
  const minuteDigits = splitDigits(timeLeft.minutes);
  const secondDigits = splitDigits(timeLeft.seconds);

  return (
    <div className="">
      {/* Banner */}
      {showConfetti && <ConfettiEl />}

      <section className="bg-[url('/home-bg.jpeg')] bg-cover object-cover bg-center min-h-screen bg-no-repeat flex justify-center items-center text-center px-3 relative pb-5 md:pb-10">
        <div className="">
          <h1 className="text-7xl md:text-8xl lg:text-9xl mb-2 md:mb-3 jersey-10-regular tracking-wide text-border-cyan text-shadow-cyan">
            SPARZO’24
          </h1>
          <h2
            className="text-white text-xl md:text-3xl lg:text-4xl mb-7 md:mb-12"
            style={{
              fontFamily: "Porter Sans Block",
            }}
          >
            LET’S VIBE WITH US
          </h2>
          <h3 className="text-white text-xl md:text-4xl font-bold tracking-widest text-shadow ">
            THE GREAT EVENTS STARTS IN
          </h3>

          {/* TIME LEFT */}
          <div className="mt-5 md:mt-10 flex items-center justify-center space-x-4 md:space-x-10">
            <div className="text-center">
              <label
                htmlFor="days"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow"
              >
                DAYS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {dayDigits.map((digit, index) => (
                  <input
                    key={`day-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="hrs"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                HRS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {hourDigits.map((digit, index) => (
                  <input
                    key={`hour-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="mins"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                MINS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {minuteDigits.map((digit, index) => (
                  <input
                    key={`minute-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="secs"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                SECS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {secondDigits.map((digit, index) => (
                  <input
                    key={`second-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20 flex items-center justify-center space-x-4 md:space-x-10">
            <div>
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-bold px-5 py-2.5 md:px-6 md:py-3.5 text-white md:text-2xl lg:text-2xl border-2 border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover">
                  Register Now
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://linktr.ee/sparzo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-bold px-5 py-2.5 md:px-6 md:py-3.5 text-white md:text-2xl lg:text-2xl border-2 border-cse-cyan hover:bg-cse-violet over:shadow-glow transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover">
                  Contact Us
                </button>
              </a>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-3xl font-semibold mb-2">
              Win Exciting Cash Prices
            </h1>
            <h2 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-3xl font-semibold mb-4">
              Food & Accommodation Available
            </h2>
            <h3 className="text-white text-shadow-dark-violet text-stroke-0-cse-violet font-semibold md:text-xl">
              Guaranteed Participant Certificate
            </h3>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        className="relative w-11/12 md:w-2/3 lg:w-2/5 mx-auto my-10 bg-[url('/modal-bg.png')] bg-cover bg-no-repeat bg-center bg-white px-5 py-6 md:py-8 lg:py-10 rounded-lg shadow-lg border border-cse-cyan outline-none text-center"
      >
        <span
          className="absolute -right-3 -top-3.5 bg-cse-violet rounded-full p-0.5 hover:cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
          </svg>
        </span>

        <h1 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-xl md:text-3xl font-semibold mb-2">
          💸 Win Exciting Cash Prices 💸
        </h1>
        <h2 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-2xl font-semibold mb-4">
          Food & Accommodation Available
        </h2>
        <h3 className="text-white text-shadow-dark-violet text-stroke-0-cse-violet font-semibold md:text-xl">
          Guaranteed Participant Certificate
        </h3>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-5 text-white text-shadow px-5 py-1.5 rounded border border-cse-cyan font-semibold hover:bg-cse-violet transition-all hover:transition-all"
        >
          Close
        </button>
      </Modal>

      {/* College Name */}
      <section className="bg-[url('/ellipse.png')] bg-cse-main bg-cover bg-no-repeat bg-center">
        <div className="space-y-6 md:space-y-12 px-1 text-center py-16 md:py-20 lg:py-20">
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-white text-lg md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Department of
            </h3>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Computer Science & Engineering
            </h1>
            <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Government College of Engineering, Tiruneveli
            </h2>
          </div>

          <div className="space-y-3">
            <h1 className="text-white text-3xl md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Proudly Presents
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl jersey-10-regular tracking-wider text-shadow-violet">
              SPARZO’24
            </h1>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-cse-main py-10 md:pt-10 md:pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-RubikDoodle text-white tracking-widest text-shadow-violet">
          HAPPENINGS
        </h1>

        <div className="mt-10 flex-col flex items-center justify-center space-y-8 md:space-y-9">
          <Scroll to="technical-events" spy={true} smooth={true} duration={500}>
            <button className="happenings-btns">Technical Events</button>
          </Scroll>
          <Scroll
            to="non-technical-events"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="happenings-btns">Non-Technical Events</button>
          </Scroll>
          <Scroll to="online-events" spy={true} smooth={true} duration={500}>
            <button className="happenings-btns">Online Events</button>
          </Scroll>
        </div>
      </section>

      {/* Event details */}
      <section className="bg-[url('/events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
        <div className="bg-cse-main bg-opacity-50 w-full py-16">
          <h1 className="text-white font-bold text-4xl md:text-5xl text-shadow text-center text-shadow-violet tracking-wider">
            EVENTS
          </h1>

          <div
            id="technical-events"
            className="container px-7 md:px-12 lg:px-32 mt-10"
          >
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-12 md:gap-y-7 md:gap-x-7 lg:gap-x-10 lg:gap-y-10">
              <RouterLink to="/paper-presentation">
                <EventsCard
                  name={"Paper Presentation 📃"}
                  img={"/paperpresentation.png"}
                  details={
                    "Showcase and present a topic related to computer science."
                  }
                />
              </RouterLink>

              <RouterLink to="/code-hunt">
                <EventsCard
                  name={"Code Hunt 💻"}
                  img={"/code-hunt.png"}
                  details={
                    " Code Hunt,an intense multi-round coding competition designed to test your programming"
                  }
                />
              </RouterLink>

              <RouterLink to="/webcraft">
                <EventsCard
                  name={"WebCraft 🎨"}
                  img={"/webcraft.png"}
                  details={
                    "Design an invitation, banner, logo, or thumbnail using Canva or similar tools."
                  }
                />
              </RouterLink>

              <RouterLink to={"sympai"}>
                <EventsCard
                  name={"SympAI 🤖"}
                  img={"/sympai.png"}
                  details={
                    "Symp AI, a cutting edge technical challenge crafted for AI pioneers!"
                  }
                />
              </RouterLink>
            </div>
          </div>

          <div
            id="non-technical-events"
            className="container px-7 md:px-12 lg:px-32 mt-14"
          >
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              NON-TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-12 md:gap-y-7 lg:gap-y-0 md:gap-x-7 lg:gap-x-10">
              <RouterLink to={"/adzap"}>
                <EventsCard
                  name={"Adzap 🎭"}
                  img={"/adzap.png"}
                  details={
                    "Create funny advertisements for imaginary products!"
                  }
                />
              </RouterLink>

              <RouterLink to={"/clueclash"}>
                <EventsCard
                  name={"Clue Clash 🧩"}
                  img={"/clue-clash.png"}
                  details={
                    "Clue Clash competition designed to test participant's problem-solving, decoding, and quick-thinking skills"
                  }
                />
              </RouterLink>

              <RouterLink to={"/fusionary"}>
                <EventsCard
                  name={"Fusionary 💡"}
                  img={"/fusionary.png"}
                  details={
                    "Connect the dots, decode the clues—where sharp minds and teamwork spark victory!"
                  }
                />
              </RouterLink>
            </div>
          </div>

          <div
            id="online-events"
            className="container px-7 md:px-12 lg:px-32 mt-14"
          >
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              ONLINE EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-12 md:gap-y-7 lg:gap-y-0 md:gap-x-7 lg:gap-x-10">
              <RouterLink to={"/cinewhiz"}>
                <EventsCard
                  name={"Cinewhiz 🎬"}
                  img={"/cinewhiz.png"}
                  details={
                    "Showcase your storytelling creativity and cinematic skills."
                  }
                />
              </RouterLink>

              <RouterLink to={"/shutterstories"}>
                <EventsCard
                  name={"Shutter Stories 📸"}
                  img={"/shutter-stories.png"}
                  details={"Submit your best photograph based on a theme!"}
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
