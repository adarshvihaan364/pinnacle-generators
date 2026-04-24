import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Life at Pinnacle", href: "https://pinnaclegenerators.com/life-at-pinnacle/" },
    { name: "Products", href: "https://pinnaclegenerators.com/products/" },
    { name: "Contact Us", href: "https://pinnaclegenerators.com/contact-us/" },
    { name: "Privacy Policy", href: "https://pinnaclegenerators.com/privacy-policy/" },
  ];

  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/pinnaclegeneratorsindia/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
    )},
    { name: "LinkedIn", href: "https://www.linkedin.com/company/pinnacle-generator/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
    )},
    { name: "YouTube", href: "https://www.youtube.com/channel/UCQP3AS5jImF_yfhmxmFQrFg", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
    )},
    { name: "Instagram", href: "https://www.instagram.com/pinnaclegenerators/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
    )},
    { name: "Pinterest", href: "https://in.pinterest.com/pinnaclegen/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
    )},
  ];

  return (
    <footer className="relative w-full bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="https://pinnaclegenerators.com/" className="inline-block mb-8">
              <img 
                src="https://pinnaclegenerators.com/wp-content/uploads/2022/08/Logo-6.png" 
                alt="Pinnacle Generators Logo" 
                className="h-12 w-auto"
              />
            </a>

            <p className="text-black text-lg font-medium mb-6 max-w-sm leading-relaxed">
              Pioneering the future of stand-by power. Engineered for resilience, designed for reliability since 1994.
            </p>

            {/* Address */}
            <div className="text-black text-sm leading-relaxed mb-8 max-w-xs">
              Plot no. P/9/17/A, IDA Nacharam, Road No 6, Nacharam, Medchal-Malkajgiri, Telangana, 500076
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="tel:9246336611" className="flex items-center gap-3 text-black hover:text-[#DD3333] transition-colors text-sm font-medium">
                <Phone className="w-4 h-4" />
                +91 9246336611, 9246336622
              </a>
              <a href="mailto:sales@pinnaclegenerators.com" className="flex items-center gap-3 text-black hover:text-[#DD3333] transition-colors text-sm font-medium">
                <Mail className="w-4 h-4" />
                sales@pinnaclegenerators.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#DD3333] transition-all duration-500 border border-black/5 hover:border-[#DD3333]/20 group text-black hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-4">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DD3333] mb-8">
              Quick Links
            </div>
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-black hover:text-[#DD3333] font-medium flex items-center gap-3 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-[#DD3333] transition-colors" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <a
              href="https://pinnaclegenerators.com/contact-us/"
              className="inline-flex items-center justify-center gap-3 bg-[#DD3333] hover:bg-[#DD3333]/90 text-white px-8 py-5 rounded-full font-black tracking-widest text-[10px] uppercase transition-all shadow-xl shadow-red-500/20 group"
            >
              Business Query <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://pinnaclegenerators.com/support/"
              className="inline-flex items-center justify-center gap-3 bg-black/5 hover:bg-black/10 border border-black/10 text-black px-8 py-5 rounded-full font-black tracking-widest text-[10px] uppercase transition-all group"
            >
              Support <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-black">
            <a href="https://pinnaclegenerators.com/privacy-policy/" className="hover:text-[#DD3333] transition-colors">Privacy Policy</a>
            <a href="https://pinnaclegenerators.com/contact-us/" className="hover:text-[#DD3333] transition-colors">Terms of Service</a>
            <a href="https://pinnaclegenerators.com/" className="hover:text-[#DD3333] transition-colors">Sitemap</a>
          </div>

          <div className="text-[11px] font-black uppercase tracking-widest text-black">
            © {new Date().getFullYear()} <a href="https://pinnaclegenerators.com/" className="text-black hover:text-[#DD3333] transition-colors">Pinnacle Generators.</a> Designed by <a href="https://vihaandigitals.com" target="_blank" rel="noreferrer" className="text-black hover:text-[#DD3333] transition-colors">Vihaan Digitals</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
