import { Building2, MapPin, ArrowUpRight } from 'lucide-react';
import { projects } from '../../mock';

export default function Projects() {
  const [p0, p1, p2, p3] = projects;

  return (
    <section id="projects" className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> OUR PROJECT PORTFOLIO
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              DELIVERING <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-9xl">excellence</span><br />
              NATIONWIDE.
            </h2>
          </div>
          <div className="lg:max-w-md reveal-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-white/50 text-xl font-medium leading-relaxed">
              With <span className="text-white">25,000+ successful projects</span> across India, our power systems are the backbone of major infrastructure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Large Card */}
          <div className="reveal-up md:col-span-7 relative group rounded-[40px] overflow-hidden min-h-[500px] cursor-pointer" style={{ animationDelay: '0.2s' }}>
            <img alt={p0.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" src={p0.img} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            
            <div className="absolute top-8 left-8">
              <div className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-primary/30">
                Featured installation
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tighter group-hover:text-primary transition-colors duration-500">{p0.title}</h3>
              <p className="text-white/60 mb-8 max-w-xl text-lg font-medium">{p0.desc}</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-wide uppercase">{p0.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <MapPin className="w-5 h-5 text-white/40" />
                  </div>
                  <span className="text-sm font-bold tracking-wide uppercase text-white/40">{p0.location}</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-all duration-700 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 shadow-2xl">
              <ArrowUpRight className="w-8 h-8 text-black" />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {[p1, p2].map((p, i) => (
              <div key={p.title} className="reveal-up relative group rounded-[40px] overflow-hidden flex-1 min-h-[238px] cursor-pointer" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <img alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" src={p.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="font-display text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{p.title}</h4>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span className="flex items-center gap-2"><Building2 className="w-3 h-3 text-primary" /> {p.client}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Wide Card */}
          <div className="reveal-up md:col-span-12 relative group rounded-[40px] overflow-hidden min-h-[360px] cursor-pointer" style={{ animationDelay: '0.5s' }}>
            <img alt={p3.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3]" src={p3.img} />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] mb-8 w-fit shadow-lg shadow-primary/30 uppercase">
                Critical Infrastructure
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tighter group-hover:text-primary transition-colors duration-500">{p3.title}</h3>
              <p className="text-white/60 text-lg font-medium mb-8 leading-relaxed">{p3.desc}</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold tracking-widest uppercase">{p3.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/40" />
                  <span className="text-sm font-bold tracking-widest uppercase text-white/40">{p3.location}</span>
                </div>
              </div>
            </div>
            <ArrowUpRight className="absolute bottom-12 right-12 w-12 h-12 text-white/40 group-hover:text-primary group-hover:scale-125 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
