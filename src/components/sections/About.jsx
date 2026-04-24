import { ArrowUpRight, Zap, Target, User, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden border-t border-black/5 group/section">
      <div className="absolute inset-0 bg-[#DD3333]/0 group-hover/section:bg-[#DD3333]/[0.02] transition-colors duration-1000 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial Layout */}
          <div className="lg:col-span-5 reveal-up">
            <div className="inline-flex items-center gap-4 text-black text-[11px] tracking-[0.3em] uppercase font-black mb-8 group-hover/section:text-[#DD3333] transition-colors duration-700">
              <span className="w-12 h-[2px] bg-black group-hover/section:bg-[#DD3333] transition-colors duration-700" /> ABOUT THE PINNACLE
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-10 transition-colors duration-700 group-hover/section:text-black">
              LEADERS IN <br />
              <span className="text-[#DD3333] block mt-2">POWER</span>
              <span className="block mt-1">SOLUTIONS.</span>
            </h2>

            <div className="relative group rounded-none overflow-hidden shadow-2xl shadow-black/10 transition-all hover:shadow-[#DD3333]/30 duration-700">
              <img
                alt="Corporate Office"
                className="w-full h-[450px] md:h-[550px] object-cover transition-transform group-hover:scale-110 duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                src="https://pinnaclegenerators.com/wp-content/uploads/2025/02/Untitled-design-24.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="mb-2">
                  <div className="font-display text-7xl font-black text-white group-hover:text-[#DD3333] transition-colors duration-500">20+</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Years of Experience</div>
                </div>
                <div className="w-full h-[1px] bg-white/20 my-6 group-hover:bg-[#DD3333]/50 transition-colors" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#DD3333] mb-1">Corporate Office</div>
                  <div className="text-xl font-bold text-white tracking-tight">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features/Data */}
          <div className="lg:col-span-7 lg:pt-12 reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-4xl font-black leading-tight mb-8 text-black group-hover/section:text-[#DD3333] transition-colors duration-700">
                Manufacturing stand-by gensets with rigorous quality control, serving critical sectors since 2005.
              </h3>
              
              <div className="space-y-6 text-black/70 text-lg lg:text-xl font-medium leading-relaxed">
                <p>
                  Pinnacle Generators is an Organization based in Hyderabad specializing in the field of manufacturing, installation, commissioning, and preventive maintenance of <strong className="text-black group-hover/section:text-[#DD3333] transition-colors duration-700">Diesel Generating Sets</strong>.
                </p>
                <p>
                  We have been involved in more than <strong className="text-black group-hover/section:text-[#DD3333] transition-colors duration-700">25,000 projects</strong> with over <strong className="text-black group-hover/section:text-[#DD3333] transition-colors duration-700">2 Million happy customers</strong>, ensuring uninterrupted operational excellence across the nation.
                </p>
              </div>

              {/* Data Grid */}
              <div className="mt-16 grid sm:grid-cols-2 gap-6">
                
                {/* Mission */}
                <div className="group relative bg-[#FAFAFA] border border-black/5 p-8 lg:p-10 hover:border-[#DD3333] hover:bg-[#DD3333]/5 transition-all duration-500 hover:-translate-y-2 cursor-crosshair">
                   <div className="w-14 h-14 bg-black group-hover:bg-[#DD3333] flex items-center justify-center transition-colors duration-500 mb-8 rounded-none">
                      <Target className="w-6 h-6 text-white" />
                   </div>
                   <h4 className="font-black text-2xl text-black mb-4 group-hover:text-[#DD3333] transition-colors">Our Mission</h4>
                   <p className="text-sm text-black/60 font-medium leading-relaxed group-hover:text-black transition-colors">To deliver reliable, efficient, and high-quality power solutions with exceptional service.</p>
                   <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-black/10 group-hover:text-[#DD3333] transition-colors" />
                </div>

                {/* Vision */}
                <div className="group relative bg-[#FAFAFA] border border-black/5 p-8 lg:p-10 hover:border-[#DD3333] hover:bg-[#DD3333]/5 transition-all duration-500 hover:-translate-y-2 cursor-crosshair">
                   <div className="w-14 h-14 bg-black group-hover:bg-[#DD3333] flex items-center justify-center transition-colors duration-500 mb-8 rounded-none">
                      <Zap className="w-6 h-6 text-white" />
                   </div>
                   <h4 className="font-black text-2xl text-black mb-4 group-hover:text-[#DD3333] transition-colors">Our Vision</h4>
                   <p className="text-sm text-black/60 font-medium leading-relaxed group-hover:text-black transition-colors">To become a leading and trusted provider of innovative and sustainable power solutions globally.</p>
                   <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-black/10 group-hover:text-[#DD3333] transition-colors" />
                </div>

                 {/* Leadership */}
                <div className="sm:col-span-2 group relative border border-black/10 p-8 lg:p-10 hover:border-[#DD3333] shadow-lg shadow-transparent hover:shadow-[#DD3333]/10 transition-all duration-500 bg-white cursor-crosshair">
                   <div className="absolute top-0 right-0 w-2 h-full bg-[#DD3333] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                   
                   <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-6">
                     <div className="w-16 h-16 bg-[#DD3333]/5 border border-[#DD3333]/20 group-hover:border-[#DD3333] group-hover:bg-[#DD3333] flex items-center justify-center transition-colors duration-500 rounded-full shrink-0">
                        <User className="w-7 h-7 text-[#DD3333] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <h4 className="font-black text-2xl text-black mb-1 group-hover:text-[#DD3333] transition-colors">Mr. T. Sathi Reddy</h4>
                       <div className="text-[10px] font-black tracking-[0.2em] uppercase text-black/50 group-hover:text-[#DD3333]/80 transition-colors">Founder & Director</div>
                     </div>
                   </div>
                   <p className="text-sm text-black/60 font-medium leading-relaxed max-w-3xl group-hover:text-black transition-colors">
                     An expert Mechanical Engineer with over two decades of experience in the Sales and Service of DG sets. He heads manufacturing, sales, and marketing, constantly inspiring the company towards perennial growth while consistently prioritizing customers' interests.
                   </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
