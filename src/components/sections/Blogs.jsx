import { Calendar, ArrowUpRight } from 'lucide-react';
import { blogs } from '../../mock';

export default function Blogs() {
  return (
    <section id="blog" className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> INSIGHTS & RESOURCES
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              LATEST <br />
              <span className="text-[#DD3333] italic font-accent lowercase font-normal text-6xl md:text-9xl">knowledge</span><br />
              UPDATES.
            </h2>
          </div>
          <a 
            href="https://pinnaclegenerators.com/blog/" 
            className="reveal-up group relative inline-flex items-center gap-3 bg-black text-white hover:bg-[#DD3333] px-8 py-4 rounded-full font-black tracking-widest text-[10px] uppercase transition-all shadow-xl shadow-black/10" 
            style={{ animationDelay: '0.1s' }}
          >
            View All Articles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((b, i) => (
            <article
              key={b.title}
              className="reveal-up group relative bg-white border border-black/5 rounded-[40px] overflow-hidden hover:border-[#DD3333]/30 hover:shadow-2xl hover:shadow-[#DD3333]/10 transition-all duration-700"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <a href={b.link} className="block cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <img
                    alt={b.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    src={b.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 bg-[#DD3333] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-[#DD3333]/30">
                    {b.category}
                  </div>
                </div>
                
                <div className="p-10 relative">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/20 mb-6">
                    <Calendar className="w-3.5 h-3.5 text-[#DD3333]" /> {b.date}
                  </div>
                  
                  <h3 className="font-display text-2xl font-black leading-tight mb-4 group-hover:text-[#DD3333] transition-colors tracking-tight">
                    {b.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-black/40 line-clamp-2 mb-8 leading-relaxed">
                    {b.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black group-hover:text-[#DD3333] transition-colors group/link">
                    Read Full Insights 
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </div>

                  {/* Red Hover Line */}
                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#DD3333] scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
