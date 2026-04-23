import { ArrowUpRight } from 'lucide-react';
import { industries, industryStats } from '../../mock';

export default function Industries() {
  return (
    <section id="industries" className="relative w-full bg-[#fcfcfc] text-black py-24 md:py-32 overflow-hidden">
      {/* Decorative Text background */}
      <div className="absolute top-40 -left-20 font-display text-[200px] font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap">
        RELIABLE POWER
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center md:text-left mb-20 reveal-up">
          <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
            <span className="w-10 h-1 bg-primary" /> INDUSTRIES WE SERVE
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              POWERING <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-9xl">diverse</span><br />
              SECTORS.
            </h2>
            <p className="lg:max-w-md text-black/50 text-xl font-medium leading-relaxed">
              From high-rise construction to life-critical medical facilities, we provide specialized power solutions across 8+ major industry sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="reveal-up group relative bg-white border border-black/5 rounded-[40px] p-10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary group-hover:scale-[10] transition-transform duration-1000 opacity-0 group-hover:opacity-100 rounded-full translate-x-16 translate-y-16" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[24px] bg-black/5 group-hover:bg-white/20 flex items-center justify-center mb-10 transition-colors duration-500 overflow-hidden">
                  <img
                    alt={ind.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    src={ind.img}
                  />
                </div>
                
                <h4 className="font-display text-2xl font-black mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
                  {ind.name}
                </h4>
                <p className="text-sm font-medium text-black/40 group-hover:text-white/60 transition-colors duration-500 leading-relaxed mb-10">
                  {ind.desc}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors duration-500">
                  View Sector Details <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High Impact Metrics Bar */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {industryStats.map((s, i) => (
            <div
              key={s.label}
              className="reveal-up relative overflow-hidden bg-white border border-black/5 rounded-[40px] p-12 group hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-7xl md:text-8xl font-black text-black group-hover:text-primary transition-colors duration-500 tracking-tighter">
                  {s.value}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mt-4 group-hover:text-primary/50 transition-colors duration-500">
                  {s.label}
                </div>
                <div className="mt-8 h-1 w-12 bg-black/5 group-hover:bg-primary transition-all duration-700 group-hover:w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
