import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const EN_LINKS = [
  { label: 'Portfolio', to: '/' },
  { label: 'Atelier',   to: '/atelier' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Contact',   to: '/contact' },
];
const AR_LINKS = [
  { label: 'الأعمال',    to: '/ar' },
  { label: 'المحترف',    to: '/ar/atelier' },
  { label: 'المشاريع',   to: '/ar/projects' },
  { label: 'اتصل بنا',  to: '/ar/contact' },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const location = useLocation();
  const isAr = lang === 'ar';
  const links = isAr ? AR_LINKS : EN_LINKS;
  const hireTo = isAr ? '/ar/contact' : '/contact';

  const isActive = (to) => location.pathname === to;

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 mt-6 rounded-full w-[95%] max-w-6xl bg-[#353534]/60 backdrop-blur-xl border border-[#4d4635]/15 shadow-[0_40px_60px_rgba(19,19,19,0.8)] flex justify-between items-center px-6 md:px-10 py-4 z-50">
      {/* Brand */}
      <Link
        to={isAr ? '/ar' : '/'}
        className="text-xl font-headline font-bold text-[#e5e2e1] tracking-tighter no-underline hover:text-[#f2ca50] transition-colors"
      >
        THE SOVEREIGN
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex gap-8 items-center font-label text-sm tracking-widest uppercase">
        {links.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={
              isActive(to)
                ? "text-[#f2ca50] relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#f2ca50] after:rounded-full"
                : 'text-[#e5e2e1]/70 hover:text-[#f2ca50] transition-all duration-300'
            }
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right cluster: language switcher + CTA */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border border-[#4d4635]/30 rounded-lg px-1 py-1">
          <button
            onClick={() => setLang('en')}
            className={`font-label text-[10px] tracking-widest uppercase px-3 py-1 rounded transition-colors ${
              !isAr ? 'bg-primary text-on-primary' : 'text-[#e5e2e1]/50 hover:text-[#f2ca50]'
            }`}
          >
            EN
          </button>
          <span className="text-[#4d4635]/40 text-xs">/</span>
          <button
            onClick={() => setLang('ar')}
            className={`font-label text-[10px] tracking-widest uppercase px-3 py-1 rounded transition-colors ${
              isAr ? 'bg-primary text-on-primary' : 'text-[#e5e2e1]/50 hover:text-[#f2ca50]'
            }`}
          >
            AR
          </button>
        </div>
        <Link
          to={hireTo}
          className="gold-gradient text-on-primary px-6 py-2 rounded-lg font-label text-xs tracking-widest uppercase font-bold scale-95 active:scale-90 transition-transform inline-block text-center"
        >
          {isAr ? 'توظيف المحترف' : 'Hire Craftsman'}
        </Link>
      </div>
    </nav>
  );
}
