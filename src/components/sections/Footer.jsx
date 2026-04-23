import React from "react";
import { Zap, Globe, Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = {
    Company: ["About Us", "Our Team", "Careers", "Contact"],
    Products: [
      "Silent Generators",
      "Mobile Generators",
      "Lighting Towers",
      "Welding Generators",
    ],
    Services: ["Installation", "Maintenance", "AMC", "Spare Parts"],
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                <Zap className="w-7 h-7 text-white fill-white" />
              </div>
              <div className="leading-none">
                <div className="font-display text-3xl font-black tracking-tighter">PINNACLE</div>
                <div className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mt-1">
                  Generators
                </div>
              </div>
            </div>

            <p className="text-white/40 text-lg font-medium mb-12 max-w-sm leading-relaxed">
              Pioneering the future of stand-by power. Engineered for resilience, designed for reliability since 1994.
            </p>

            <div className="flex gap-4">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-500 border border-white/5 hover:border-primary/20 group"
                >
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                  {title}
                </div>
                <ul className="space-y-4">
                  {items.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-white/40 hover:text-white font-medium flex items-center gap-3 group transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>

          <div className="text-[11px] font-black uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} <span className="text-white/40">Pinnacle Generators.</span> All Propulsion Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
