import { Mail, Instagram, Linkedin, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-10 md:pt-16 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(circle_at_50%_100%,rgba(234,179,8,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="-ml-4 flex items-center justify-center lg:justify-start">
              <img
                src="/sparzo26-logo.png"
                alt="Sparzo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-3xl font-[900] tracking-tighter text-white">
                SPARZO<span className="text-yellow-500">’26</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              The flagship National Level Technical Symposium organized by the
              Association of Computer Science & Engineering, Government College
              of Engineering, Tirunelveli.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center lg:justify-start gap-6">
              {[
                {
                  icon: <Mail size={20} />,
                  href: "mailto:sparzo.cseofficial@gmail.com",
                },
                {
                  icon: <Instagram size={20} />,
                  href: "https://www.instagram.com/sparzo_offl/",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://www.linkedin.com/in/gcetirunelveli",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.03] border border-white/5 text-white/40 hover:text-yellow-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5 md:space-y-8">
            <h4 className="text-xs font-black text-yellow-500/60 uppercase tracking-[0.4em] text-center lg:text-left">
              Direct Line
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Student Coordinator",
                  name: "Allwin",
                  phone: "+91 9342435661",
                },
                {
                  label: "Association Head",
                  name: "Sharmila",
                  phone: "+91 8015527422",
                },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={`tel:${contact.phone}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 transition-all"
                >
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">
                      {contact.label}
                    </p>
                    <p className="text-sm font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 md:space-y-6 text-left">
            <h4 className="text-xs text-center md:text-left font-black text-yellow-500/60 uppercase tracking-[0.4em]">
              Campus
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/a9wpVN5MEG37b7q58"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-start gap-3 group cursor-pointer"
              >
                <MapPin
                  size={18}
                  className="text-yellow-500 shrink-0 mt-1.5 transition-transform duration-300 group-hover:scale-125"
                />
                <p className="text-sm text-white/50 leading-loose transition-colors duration-300 group-hover:text-white">
                  <span className="font-bold text-white/70 group-hover:text-yellow-500 transition-colors">
                    Government College of Engineering,
                  </span>
                  <br />
                  Palayamkottai, Tirunelveli - 627007,
                  <br />
                  Tamil Nadu, India.
                </p>
              </a>

              <a
                href="https://gcetly.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-bold text-yellow-500/80 hover:text-yellow-500 transition-colors uppercase tracking-widest"
              >
                <Globe size={14} /> Official Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            &copy; 2026 Association of Computer Science & Engineering.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-yellow-500 animate-pulse" />
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              GCE Tirunelveli Association
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
