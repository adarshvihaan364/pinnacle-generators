import { industries, industryStats } from '../../mock';

export default function Industries() {
  return (
    <section id="industries" className="relative w-full bg-[#fcfcfc] text-black py-24 md:py-32 overflow-hidden">
      {/* Decorative Text background */}
      <div className="absolute top-40 -left-20 font-display text-[200px] font-black text-[#DD3333]/[0.03] select-none pointer-events-none whitespace-nowrap">
        RELIABLE POWER
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center md:text-left mb-20 reveal-up">
          <div className="inline-flex items-center gap-3 text-[#DD3333] text-[11px] tracking-[0.3em] uppercase font-black mb-8">
            <span className="w-10 h-1 bg-[#DD3333]" /> INDUSTRIES WE SERVE
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              POWERING <br />
              <span className="text-[#DD3333]">DIVERSE</span><br />
              SECTORS.
            </h2>
            <p className="lg:max-w-md text-black/50 text-xl font-medium leading-relaxed border-l-2 border-[#DD3333]/30 pl-6">
              From high-rise construction to life-critical medical facilities, we provide specialized power solutions across 8+ major industry sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="reveal-up group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl shadow-black/5 transition-all duration-700 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Background Image Overlay */}
              <img
                src={ind.img}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Color Tint Overlay on Hover */}
              <div className="absolute inset-0 bg-[#DD3333]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="font-display text-2xl font-black text-white mb-3 leading-tight group-hover:translate-y-[-10px] transition-transform duration-500">
                  {ind.name}
                </h4>
                <p className="text-sm font-medium text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-500 delay-75">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High Impact Metrics Bar */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {industryStats.map((s, i) => (
            <div
              key={s.label}
              className="reveal-up relative overflow-hidden bg-white border border-[#DD3333]/10 rounded-[40px] p-12 group hover:border-[#DD3333]/30 transition-all duration-500 text-center"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="font-display text-7xl md:text-8xl font-black text-black group-hover:text-[#DD3333] transition-colors duration-500 tracking-tighter">
                {s.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mt-4">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
