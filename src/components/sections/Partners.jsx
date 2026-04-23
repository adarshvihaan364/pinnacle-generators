import { partners } from '../../mock';

const doubled = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="relative w-full bg-black border-t border-white/5 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center reveal-up">
        <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-6">
          <span className="w-10 h-1 bg-primary" /> OUR STRATEGIC PARTNERS
        </div>
        <h3 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">TRUSTED BY INDUSTRY TITANS.</h3>
      </div>

      <div className="relative reveal-up" style={{ animationDelay: '0.2s' }}>
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="marquee-track flex gap-12 whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-48 h-28 glass rounded-3xl flex items-center justify-center p-8 transition-all duration-700 hover:border-primary/50 group"
            >
              <img
                alt={p.name}
                className="max-h-full max-w-full object-contain opacity-30 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 brightness-0 invert"
                src={p.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
