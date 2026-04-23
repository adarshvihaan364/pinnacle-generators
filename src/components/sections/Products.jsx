import { useState } from 'react';
import { ArrowRight, Zap, Check } from 'lucide-react';
import { products } from '../../mock';

export default function Products() {
  const [active, setActive] = useState(0);
  const current = products[active];

  return (
    <section id="products" className="relative w-full bg-[#050505] text-white py-24 md:py-32 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> OUR PRODUCT RANGE
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              POWER <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-9xl">engineered</span><br />
              TO EXCEED.
            </h2>
          </div>
          <div className="lg:max-w-md reveal-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-white/50 text-xl font-medium leading-relaxed">
              From <span className="text-white">5 KVA to 2500 KVA</span> — We offer a comprehensive range of generators engineered for every industrial and commercial need.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {products.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`reveal-up group relative w-full text-left p-8 rounded-[32px] border transition-all duration-700 overflow-hidden ${
                  active === i
                    ? 'bg-primary border-primary shadow-2xl shadow-primary/30'
                    : 'bg-white/[0.03] border-white/5 hover:border-white/10'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {active === i && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform duration-1000 group-hover:scale-150" />
                )}
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.25em] mb-2 ${active === i ? 'text-white/80' : 'text-primary'}`}>
                      {p.range}
                    </div>
                    <div className="font-display text-2xl font-bold tracking-tight">{p.name}</div>
                  </div>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    active === i ? 'bg-white border-white text-primary' : 'bg-transparent border-white/10 text-white/40 group-hover:bg-white group-hover:text-black group-hover:border-white'
                  }`}>
                    <ArrowRight className={`w-5 h-5 transition-transform ${active === i ? 'rotate-0' : '-rotate-45'}`} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="reveal-up flex-1 relative rounded-[40px] overflow-hidden border border-white/5 bg-black group" style={{ animationDelay: '0.4s' }}>
              <div className="grid md:grid-cols-12 gap-0 h-full">
                <div className="md:col-span-6 relative h-[350px] md:h-auto overflow-hidden">
                  <img
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={current.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                </div>
                
                <div className="md:col-span-6 p-10 md:p-14 flex flex-col justify-center bg-zinc-950">
                  <div className="inline-flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-6 px-3 py-1 rounded-full bg-primary/10 w-fit">
                    <Zap className="w-3 h-3 fill-primary" /> {current.range}
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter">{current.name}</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-10">{current.desc}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover/item:bg-primary group-hover/item:border-primary transition-all duration-300">
                          <Check className="w-5 h-5 text-primary group-hover/item:text-white" />
                        </div>
                        <span className="text-white/80 font-medium group-hover/item:text-white transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-3 bg-white text-black hover:bg-primary hover:text-white px-8 py-4 rounded-full font-black tracking-wide text-sm transition-all w-fit shadow-xl hover:shadow-primary/20"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="reveal-up relative overflow-hidden bg-primary rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group" style={{ animationDelay: '0.5s' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
              <div className="relative z-10 flex-1">
                <div className="font-display text-3xl md:text-4xl font-black tracking-tight text-white mb-2">Need a Custom Solution?</div>
                <div className="text-white/80 font-medium">Expert consultants standing by for bespoke multi-megawatt systems.</div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative z-10 bg-black text-white hover:bg-white hover:text-black px-10 py-5 rounded-full font-black tracking-[0.1em] text-xs uppercase transition-all shadow-2xl"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
