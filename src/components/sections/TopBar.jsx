import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const items = [
  { icon: Phone, text: '+91 92463 36611', href: 'tel:+919246336611' },
  { icon: Mail, text: 'info@pinnaclegenerators.com', href: 'mailto:info@pinnaclegenerators.com' },
  { icon: Clock, text: 'Mon-Sat: 9:00 AM - 6:00 PM' },
  { icon: MapPin, text: 'Hyderabad, Telangana, India' },
  { icon: Phone, text: 'Emergency Support 24/7' },
];

const repeated = [...items, ...items];

export default function TopBar() {
  return (
    <div className="w-full bg-[#000000] text-white/70 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-[12px] font-medium tracking-tight overflow-x-auto no-scrollbar whitespace-nowrap">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-6 group">
                {i > 0 && <span className="text-primary opacity-50">•</span>}
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
