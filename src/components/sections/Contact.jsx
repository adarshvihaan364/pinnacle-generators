import React, { useState } from 'react';
import { companyInfo } from '../../mock';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    kva: '',
    message: ''
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in your name and contact number.'
      });
      return;
    }

    toast({
      title: 'Request Submitted!',
      description: "We'll respond within 24 hours."
    });

    setForm({
      name: '',
      company: '',
      phone: '',
      kva: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 reveal-up">
            <div className="inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-black mb-8">
              <span className="w-10 h-1 bg-primary" /> INITIATE POWER
            </div>
            
            <h2 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-10">
              GET IN <br />
              <span className="text-primary italic font-accent lowercase font-normal text-6xl md:text-9xl">touch</span><br />
              WITH US.
            </h2>

            <p className="text-white/50 text-xl font-medium leading-relaxed mb-16 max-w-md">
              Let's discuss your specific energy requirements. Our team of seasoned engineers will blueprint your optimal power solution.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Expert Consultation', val: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                { icon: Mail, label: 'Technical Support', val: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: MapPin, label: 'Regional HQ', val: companyInfo.address },
                { icon: Clock, label: 'Service Availability', val: companyInfo.hours }
              ].map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-6 p-6 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{c.label}</div>
                      <div className="text-lg font-bold text-white tracking-tight">{c.val}</div>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={i} href={c.href} className="block reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>{inner}</a>
                ) : (
                  <div key={i} className="reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>{inner}</div>
                );
              })}

              <a
                href="https://wa.me/919246336611"
                target="_blank"
                rel="noreferrer"
                className="reveal-up flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-5 rounded-full font-black tracking-widest text-xs uppercase transition-all shadow-xl shadow-green-950/20"
                style={{ animationDelay: '0.4s' }}
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Quote Form */}
          <div className="lg:col-span-7 reveal-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-2xl scale-100 lg:scale-105 border border-black/5">
              <h3 className="font-display text-4xl font-black text-black tracking-tighter mb-4">Request a Quote</h3>
              <p className="text-black/40 font-medium mb-12">Submit your details for a rigorous technical assessment and quotation.</p>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-8 py-5 rounded-full bg-black/5 border border-transparent focus:border-primary focus:bg-white transition-all text-black font-bold outline-none placeholder:text-black/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Company Entity</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Your Logistics Ltd"
                      className="w-full px-8 py-5 rounded-full bg-black/5 border border-transparent focus:border-primary focus:bg-white transition-all text-black font-bold outline-none placeholder:text-black/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Phone Protocol</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-8 py-5 rounded-full bg-black/5 border border-transparent focus:border-primary focus:bg-white transition-all text-black font-bold outline-none placeholder:text-black/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">KVA Specification</label>
                    <select
                      name="kva"
                      value={form.kva}
                      onChange={onChange}
                      className="w-full px-8 py-5 rounded-full bg-black/5 border border-transparent focus:border-primary focus:bg-white transition-all text-black font-bold outline-none appearance-none"
                    >
                      <option value="">Select Range</option>
                      <option>5 - 50 KVA</option>
                      <option>50 - 250 KVA</option>
                      <option>250 - 500 KVA</option>
                      <option>500 - 1000 KVA</option>
                      <option>1000 - 2500 KVA</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Project Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="Briefly describe your installation site or power needs..."
                    className="w-full px-8 py-6 rounded-[32px] bg-black/5 border border-transparent focus:border-primary focus:bg-white transition-all text-black font-bold outline-none placeholder:text-black/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-black text-white px-10 py-6 rounded-full font-black tracking-[0.2em] uppercase text-xs transition-all shadow-2xl shadow-primary/30 group"
                >
                  Submit Brief <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-[10px] font-black uppercase tracking-widest text-black/20">
                  Precision response within 24 operational hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
