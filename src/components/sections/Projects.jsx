import { useState } from 'react';
import { Building2, MapPin, ArrowRight, HardHat, Factory, Landmark, Zap } from 'lucide-react';
import { projects } from '../../mock';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-black text-white py-32 overflow-hidden">
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12 reveal-up">
          <div className="relative">
            <div className="inline-flex items-center gap-4 text-[#DD3333] text-[11px] tracking-[0.6em] uppercase font-black mb-8">
              <span className="w-16 h-[2px] bg-[#DD3333]" /> OUR PROJECT PORTFOLIO
            </div>
            <h2 className="font-display text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#DD3333]">LIMITS.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-white/40 text-xl font-medium leading-relaxed border-l-2 border-[#DD3333] pl-8">
              Documenting <span className="text-white font-bold">25,000+ power installations</span> across the most demanding industrial landscapes in India.
            </p>
          </div>
        </div>

        {/* Interactive Data List (No Images) */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((p, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <div
                key={p.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className={`absolute inset-0 bg-[#DD3333]/5 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* The "Scanning" Line */}
                <div className={`absolute top-0 left-0 w-[2px] h-full bg-[#DD3333] transition-transform duration-700 origin-top scale-y-0 group-hover:scale-y-100`} />

                <div className="relative z-10 px-4 py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-12 cursor-pointer">
                  {/* Left: Index & Title */}
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="font-display text-4xl md:text-6xl font-black text-white/10 group-hover:text-[#DD3333] transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-4xl md:text-7xl font-black tracking-tighter transition-all duration-700 group-hover:pl-4 group-hover:text-white">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-6 mt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                           <MapPin className="w-3 h-3 text-[#DD3333]" /> {p.location}
                         </span>
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                           <Building2 className="w-3 h-3 text-[#DD3333]" /> {p.client}
                         </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Arrow */}
                  <div className="flex items-center gap-12">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#DD3333] group-hover:border-[#DD3333] transition-all duration-700 group-hover:rotate-45">
                      <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-white" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content Reveal */}
                <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'max-h-[300px] pb-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-24 md:px-52">
                    <p className="text-white/60 text-lg md:text-2xl font-medium leading-relaxed max-w-4xl">
                      {p.desc}
                    </p>
                    <div className="mt-12">
                       {/* Contextual Icon based on project */}
                       <div className="w-16 h-16 rounded-2xl bg-[#DD3333]/10 flex items-center justify-center border border-[#DD3333]/20">
                          {i === 0 && <Building2 className="w-8 h-8 text-[#DD3333]" />}
                          {i === 1 && <HardHat className="w-8 h-8 text-[#DD3333]" />}
                          {i === 2 && <Factory className="w-8 h-8 text-[#DD3333]" />}
                          {i === 3 && <Landmark className="w-8 h-8 text-[#DD3333]" />}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
