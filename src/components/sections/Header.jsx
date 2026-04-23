import { useState, useEffect } from 'react';
import { Zap, ArrowRight, Menu, X } from 'lucide-react';

const nav = ['Home', 'About', 'Products', 'Industries', 'Projects', 'Blog', 'Contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className={`fixed top-[41px] z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="https://pinnaclegenerators.com/wp-content/uploads/2022/08/Logo-6.png" 
            alt="Pinnacle Generators Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-[11px] font-black uppercase text-black/50 hover:text-black tracking-[0.15em] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#DD3333] transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center gap-3 bg-black hover:bg-[#DD3333] text-white px-8 py-4 text-[10px] font-black tracking-[0.2em] uppercase rounded-none transition-all shadow-lg hover:shadow-xl hover:shadow-[#DD3333]/20"
          >
            Get Quote <ArrowRight className="w-3 h-3" />
          </button>
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] bg-white px-6 py-10 z-[60] border-t border-black/5">
          <div className="flex flex-col gap-8">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-3xl font-display font-black text-black/80 hover:text-[#DD3333] transition-colors text-left"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-8 bg-[#DD3333] text-white py-5 font-black uppercase tracking-widest text-sm shadow-xl"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
