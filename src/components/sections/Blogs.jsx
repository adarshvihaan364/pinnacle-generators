import { Calendar, ArrowUpRight } from 'lucide-react';
import { blogs } from '../../mock';

export default function Blogs() {
  return (
    <section id="blog" className="relative w-full bg-[#050505] text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> INSIGHTS & RESOURCES
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              LATEST <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-9xl">knowledge</span><br />
              UPDATES.
            </h2>
          </div>
          <button className="reveal-up group relative inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-black tracking-widest text-[10px] uppercase transition-all" style={{ animationDelay: '0.1s' }}>
            View All Articles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((b, i) => (
            <article
              key={b.title}
              className="reveal-up group relative bg-zinc-900 border border-white/5 rounded-[40px] overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  alt={b.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  src={b.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-primary/30">
                  {b.category}
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/30 mb-6">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> {b.date}
                </div>
                
                <h3 className="font-display text-2xl font-black leading-tight mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {b.title}
                </h3>
                
                <p className="text-sm font-medium text-white/40 line-clamp-2 mb-8 leading-relaxed">
                  {b.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-primary transition-colors cursor-pointer group/link">
                  Read Full Insights 
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
