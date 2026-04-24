import { useState } from 'react';
import { ArrowRight, Zap, Check } from 'lucide-react';
import { products } from '../../mock';

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="relative w-full bg-[#030303] text-white py-24 md:py-32 min-h-[90vh] flex items-center overflow-hidden border-t border-white/5">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full bg-[#DD3333]/10 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 reveal-up">
          <div>
            <div className="inline-flex items-center gap-4 text-white/50 text-[11px] tracking-[0.3em] uppercase font-black mb-6">
              <span className="w-12 h-[2px] bg-[#DD3333]" /> OUR PRODUCT RANGE
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
              ENGINEERED FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#DD3333]">EXCELLENCE.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-white/60 text-lg font-medium leading-relaxed border-l-2 border-[#DD3333]/30 pl-6">
              Explore our complete range of products, including <span className="text-white font-bold">Silent Generators</span>, <span className="text-white font-bold">Mobile Generators</span>, <span className="text-white font-bold">Lighting Towers</span>, and <span className="text-white font-bold">Welding Generators</span>.
            </p>
          </div>
        </div>

        {/* Expanding Cards Interactive Gallery */}
        <div className="flex flex-col lg:flex-row gap-4 h-[700px] lg:h-[600px] w-full reveal-up" style={{ animationDelay: '0.2s' }}>
          {products.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-[24px] lg:rounded-[40px] cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex group border border-white/5 hover:border-white/20 ${
                  isActive ? 'lg:w-[65%] w-full h-[50%] lg:h-full shadow-2xl shadow-[#DD3333]/10' : 'lg:w-[11.66%] w-full h-[16.66%] lg:h-full opacity-70 hover:opacity-100'
                }`}
              >
                {/* Background Image */}
                <img
                  src={p.img}
                  alt={p.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                    isActive ? 'scale-100' : 'scale-110 grayscale-[0.5] group-hover:grayscale-0'
                  }`}
                />
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`} />
                <div className={`absolute inset-0 hidden lg:block transition-opacity duration-700 ${isActive ? 'bg-gradient-to-r from-[#030303]/90 via-[#030303]/40 to-transparent' : 'opacity-0'}`} />

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col justify-end p-6 md:p-8 lg:p-12 z-10">
                  
                  {/* Vertical / Collapsed Inactive Title */}
                  <div className={`absolute inset-0 flex items-center justify-center lg:items-end lg:justify-start lg:p-8 transition-all duration-300 ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                    <div className="flex lg:flex-col items-center gap-4">
                       <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center lg:hidden">
                         <span className="text-white/50 text-xs font-black">0{i+1}</span>
                       </div>
                       <h3 className="text-white font-display font-bold text-xl lg:text-2xl whitespace-nowrap lg:-rotate-90 lg:origin-bottom-left tracking-wide lg:translate-y-[-100px] lg:translate-x-[20px]">
                         {p.name}
                       </h3>
                    </div>
                  </div>

                  {/* Active Content */}
                  <div className={`flex flex-col lg:w-2/3 transition-all duration-[800ms] ease-out transform ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-12 pointer-events-none absolute bottom-0'}`}>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center gap-2 text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(221,51,51,0.2)]">
                        <Zap className="w-3 h-3 text-[#DD3333]" /> {p.range}
                      </div>
                      <div className="h-[1px] w-12 bg-white/20 hidden sm:block" />
                    </div>
                    
                    <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-white drop-shadow-xl">{p.name}</h3>
                    
                    <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-6 lg:mb-8 max-w-xl hidden sm:block">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 lg:gap-3 mb-8">
                      {p.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#030303]/60 backdrop-blur-sm border border-white/5 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 hover:bg-white/10 hover:border-white/20 transition-colors duration-300">
                          <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#DD3333]" />
                          <span className="text-white/90 text-[10px] lg:text-sm font-medium tracking-wide">{f}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={(e) => { e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="group flex items-center gap-4 bg-white hover:bg-[#DD3333] text-black hover:text-white transition-colors duration-500 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-black tracking-wider text-[10px] lg:text-xs uppercase w-fit shadow-2xl">
                      Request Quote
                      <span className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                      </span>
                    </button>

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
