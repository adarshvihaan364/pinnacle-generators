import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../mock';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const initials = t.name.split(' ').map(n => n[0]).join('');

  return (
    <section className="relative w-full bg-[#f9fafb] text-black py-24 md:py-32 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none select-none">
        <Quote className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-5 reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> CLIENT SUCCESS STORIES
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
              VOICES OF <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-8xl">satisfied</span><br />
              PARTNERS.
            </h2>

            <div className="bg-white border border-black/5 rounded-[32px] p-8 shadow-xl shadow-black/5">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < 5 ? "#DD3333" : "none"}
                    color={i < 5 ? "#DD3333" : "#e5e7eb"}
                  />
                ))}
              </div>
              <div className="font-display text-5xl font-black mb-2 tracking-tighter">4.9<span className="text-black/20">/5</span></div>

            </div>
          </div>

          {/* Right Column: Active Testimonial Card */}
          <div className="lg:col-span-7 reveal-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-black/5 border border-black/5 overflow-hidden group">
              {/* Giant Quote Icon */}
              <Quote className="absolute top-12 right-12 w-32 h-32 text-black/[0.03] group-hover:text-primary/5 transition-colors duration-1000" fill="currentColor" />
              
              <div className="relative">
                <p className="text-2xl md:text-3xl font-bold leading-snug text-black/80 mb-12 italic">
                  "{t.text}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-black/5">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          fill={i < Math.round(t.rating) ? "#DD3333" : "none"}
                          color={i < Math.round(t.rating) ? "#DD3333" : "#e5e7eb"}
                        />
                      ))}
                    </div>
                    <div>
                       <div className="font-display text-xl font-black tracking-tight">{t.name}</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">{t.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                      style={{ backgroundColor: '#DD3333' }}
                      className="w-14 h-14 rounded-2xl text-white hover:opacity-80 shadow-lg shadow-red-500/20 transition-all flex items-center justify-center group/btn"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => setIdx((idx + 1) % testimonials.length)}
                      style={{ backgroundColor: '#DD3333' }}
                      className="w-14 h-14 rounded-2xl text-white hover:opacity-80 shadow-lg shadow-red-500/20 transition-all flex items-center justify-center group/btn"
                    >
                      <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex items-center gap-3 px-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-700 ${
                    i === idx ? 'w-12 bg-primary' : 'w-2 bg-black/10 hover:bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
