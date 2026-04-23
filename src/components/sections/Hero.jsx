import { ArrowRight, Play, Shield, Award, Zap } from 'lucide-react';
import { stats, kvaSizes } from '../../mock';

const badges = [
  { icon: Shield, label: 'ISO Certified' },
  { icon: Award, label: '15+ Awards' },
  { icon: Zap, label: '24/7 Support' },
];

const doubled = [...kvaSizes, ...kvaSizes];

export default function Hero() {
  return (
    <>
      <section id="home" className="relative w-full flex flex-col items-center bg-white overflow-hidden pt-32 lg:pt-40 pb-0">
        
        {/* Creative Asymmetrical Background Elements */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-[#FAFAFA] z-0 hidden lg:block border-l border-black/5" />
        <div className="absolute top-[20%] left-[-10%] z-0 pointer-events-none select-none overflow-hidden">
          <h1 className="font-display font-black text-[150px] md:text-[250px] lg:text-[350px] leading-none text-transparent mix-blend-multiply opacity-[0.03]" style={{ WebkitTextStroke: '2px black' }}>
            PINNACLE
          </h1>
        </div>

        {/* Change z-20 to z-10 so the Navbar (z-50) is visible */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-24 lg:pb-40 w-full">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Typography */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
              <div className="inline-flex items-center gap-4 mb-10 overflow-hidden">
                <div className="w-12 h-[2px] bg-[#DD3333] transform reveal-up" />
                <span className="text-xs font-black tracking-[0.4em] uppercase text-black/50 reveal-up" style={{ animationDelay: '0.1s' }}>
                  Est. 2005
                </span>
              </div>

              <h1 className="font-display text-6xl md:text-[80px] lg:text-[100px] font-black text-black leading-[0.85] tracking-tighter reveal-up relative mix-blend-darken">
                RELIABLE <span className="text-[#DD3333]">POWER</span><br />
                <span className="relative inline-block mt-2 group">
                  SOLUTIONS.
                  <div className="absolute bottom-2 left-0 w-full h-1/3 bg-[#DD3333]/20 -z-10 group-hover:h-full transition-all duration-500 origin-bottom" />
                </span>
              </h1>

              <p className="mt-8 text-lg lg:text-xl text-black/60 max-w-lg font-medium leading-relaxed reveal-up" style={{ animationDelay: '0.1s' }}>
                Pinnacle Generators is a pioneer in manufacturing stand-by gensets with over 20 years of standing experience. Delivering innovative, reliable, and high-quality power infrastructure from <strong className="text-black inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#DD3333] after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all font-black">50 KVA to 2500 KVA</strong>.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 reveal-up" style={{ animationDelay: '0.2s' }}>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center gap-6 bg-black text-white px-10 py-5 font-black tracking-widest text-xs uppercase overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#DD3333] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Get a Quote</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-4 text-black font-black tracking-widest text-xs uppercase hover:text-[#DD3333] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#DD3333] transition-colors duration-500 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[#DD3333] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <Play className="w-3 h-3 fill-current relative z-10 group-hover:fill-white ml-0.5 transition-colors duration-500" />
                  </div>
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black group-hover:after:w-full transition-all duration-300">Browse Fleet</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image with Ultra-Creative Presentation */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] lg:h-[700px] w-full mt-16 lg:mt-10" style={{ animationDelay: '0.3s' }}>
              <style>
                {`
                  @keyframes floatGenerator {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-20px) scale(1.02); }
                    100% { transform: translateY(0px) scale(1); }
                  }
                  .animate-float-generator {
                    animation: floatGenerator 7s ease-in-out infinite;
                  }
                  @keyframes spinSlow {
                    100% { transform: rotate(360deg); }
                  }
                  .animate-spin-slow {
                    animation: spinSlow 30s linear infinite;
                  }
                  @keyframes pulseRing {
                    0% { box-shadow: 0 0 0 0 rgba(221, 51, 51, 0.4); }
                    100% { box-shadow: 0 0 0 25px rgba(221, 51, 51, 0); }
                  }
                  .animate-pulse-ring {
                    animation: pulseRing 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                  }
                `}
              </style>

              {/* Creative Background Layers */}
              {/* Massive spinning dashed circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-[2px] border-black/5 border-dashed animate-spin-slow -z-10" />
              
              {/* Solid red geometric accent box */}
              <div className="absolute top-[20%] -right-[5%] lg:-right-[10%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] bg-[#DD3333]/5 rounded-[40px] -rotate-12 transition-transform hover:rotate-0 duration-[1s] -z-10" />
              
              {/* Absolute clean backdrop square frame */}
              <div className="absolute top-[15%] bottom-[15%] left-[5%] right-[5%] bg-white/50 backdrop-blur-3xl border border-black/5 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] -z-10" />

              {/* Central Generator Image */}
              <div className="relative w-full max-w-[600px] z-10 flex flex-col items-center">
                 {/* Dynamic Shadow floor */}
                 <div className="absolute -bottom-6 lg:-bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-[30px] bg-black/15 blur-[25px] rounded-[100%] transition-opacity duration-1000 opacity-80" />

                 <img
                   alt="Pinnacle Generator"
                   className="relative z-10 w-[120%] lg:w-[140%] max-w-none object-contain animate-float-generator drop-shadow-[0_40px_45px_rgba(0,0,0,0.15)] ml-4 lg:ml-0"
                   src="https://pinnaclegenerators.com/wp-content/uploads/2025/02/1.png"
                 />
              </div>

              {/* Floating Performance Pill */}
              <div className="absolute top-[15%] lg:top-[20%] -right-2 lg:-right-8 bg-black backdrop-blur-md px-5 py-3 lg:px-6 lg:py-4 rounded-full shadow-2xl flex items-center gap-3 z-30 animate-pulse-ring cursor-default hover:scale-105 transition-transform duration-300">
                 <div className="w-2 h-2 rounded-full bg-[#DD3333] animate-ping absolute" />
                 <div className="w-2 h-2 rounded-full bg-[#DD3333]" />
                 <span className="font-display font-black text-[10px] lg:text-[11px] text-white uppercase tracking-[0.25em] whitespace-nowrap">Absolute Power</span>
              </div>

              {/* Creative ISO Badge */}
              <div className="absolute bottom-[20%] -left-8 lg:-left-20 bg-white px-5 py-4 lg:px-7 lg:py-5 border border-black/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex items-center gap-4 z-30 group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FAFAFA] rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-black rounded-2xl flex items-center justify-center transition-colors duration-500 shadow-inner overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#DD3333] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10" />
                </div>
                <div>
                   <div className="font-display font-black text-xl lg:text-2xl text-black leading-none tracking-tight">ISO 9001</div>
                   <div className="text-[9px] font-black tracking-[0.25em] text-black/40 uppercase mt-1.5 transition-colors group-hover:text-[#DD3333]">Certified</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Creative Editorial Stats Grid placed above the marquee */}
        <div className="relative z-20 w-full bg-[#FAFAFA] border-t border-black/5 mt-0 lg:-mt-20 pt-20 pb-16 reveal-up">
           <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center text-center group cursor-default relative">
                    {/* Hover vertical bar */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#DD3333] group-hover:h-3/4 transition-all duration-500 hidden md:block" />
                    
                    <div className="font-display text-5xl md:text-7xl font-black text-black tracking-tighter group-hover:text-[#DD3333] transition-colors duration-500 transform group-hover:scale-110 origin-center">
                      {s.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/40 mt-3 group-hover:text-black transition-colors">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* The essential Full-Width KVA Marquee */}
      <div className="relative w-full bg-white border-y border-black/5 py-5 lg:py-8 overflow-hidden">
        <div className="marquee-track flex gap-12 lg:gap-24 items-center pl-10">
          {[...kvaSizes, ...kvaSizes].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 cursor-pointer transition-transform hover:scale-110"
            >
              <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-all duration-300">
                <Zap className="w-4 h-4 lg:w-6 lg:h-6 text-black fill-[#DD3333]" />
                <span className="font-display text-2xl lg:text-4xl font-black text-black group-hover:text-[#DD3333] transition-colors tracking-tighter">
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5 text-[#DD3333] opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </div>
              <div className="h-[2px] w-0 bg-[#DD3333] group-hover:w-full transition-all duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
