import { partners } from '../../mock';

export default function Partners() {
  return (
    <section className="relative w-full bg-[#FCFCFC] py-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#DD3333]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#DD3333]/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap uppercase">
        PARTNERS
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 reveal-up">
          <div className="relative">
            <div className="inline-flex items-center gap-4 text-[#DD3333] text-[11px] tracking-[0.5em] uppercase font-black mb-8">
              <span className="w-16 h-[2px] bg-[#DD3333]" /> OUR STRATEGIC PARTNERS
            </div>
            <h3 className="font-display text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.8]">
              TRUSTED BY <br />
              <span className="text-[#DD3333]">INDUSTRY TITANS.</span>
            </h3>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-black/40 text-lg font-medium leading-relaxed italic border-l border-[#DD3333] pl-6">
              Our power systems fuel the operations of national leaders across Bharat.
            </p>
          </div>
        </div>

        {/* Creative Bento Logo Wall - Light Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px]">
          {partners.map((p, i) => {
            const isWide = i % 7 === 0 || i === 12;
            const isTall = i === 3 || i === 18;
            
            return (
              <div
                key={`${p.name}-${i}`}
                className={`reveal-up group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 bg-white border border-black/5 hover:border-[#DD3333]/30 hover:shadow-2xl hover:shadow-[#DD3333]/5 ${
                  isWide ? 'md:col-span-2' : ''
                } ${isTall ? 'md:row-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Logo with interactive hover */}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110">
                  <img
                    alt={p.name}
                    className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
                    src={p.img}
                  />
                </div>

                {/* Corner Numbering */}
                <div className="absolute top-4 left-6 text-[10px] font-black text-black/5 group-hover:text-[#DD3333] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#DD3333] scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
