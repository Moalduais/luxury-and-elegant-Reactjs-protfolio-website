import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <footer className="w-full border-t border-[#4d4635]/10 bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
      <Link
        to={isAr ? '/ar' : '/'}
        className="text-[#e5e2e1] font-headline italic hover:text-[#f2ca50] transition-colors no-underline"
      >
        THE SOVEREIGN
      </Link>

      <div className="text-[#e5e2e1]/40 font-label text-[10px] tracking-[0.2em] uppercase">
        {isAr
          ? '© ٢٠٢٤ الأتيليه الرقمي. بُني بدقة متناهية.'
          : '© 2024 DIGITAL ATELIER. BUILT WITH PRECISION.'}
      </div>

      <div className="flex gap-8">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e2e1]/40 font-label text-[10px] tracking-[0.2em] uppercase hover:text-[#f2ca50] hover:tracking-[0.3em] transition-all duration-500"
        >
          {isAr ? 'لينكد إن' : 'LinkedIn'}
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e2e1]/40 font-label text-[10px] tracking-[0.2em] uppercase hover:text-[#f2ca50] hover:tracking-[0.3em] transition-all duration-500"
        >
          {isAr ? 'جيت هاب' : 'GitHub'}
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e2e1]/40 font-label text-[10px] tracking-[0.2em] uppercase hover:text-[#f2ca50] hover:tracking-[0.3em] transition-all duration-500"
        >
          {isAr ? 'تويتر' : 'Twitter'}
        </a>
        <a
          href="mailto:office@thesovereign.com"
          className="text-[#e5e2e1]/40 font-label text-[10px] tracking-[0.2em] uppercase hover:text-[#f2ca50] hover:tracking-[0.3em] transition-all duration-500"
        >
          {isAr ? 'البريد' : 'Email'}
        </a>
      </div>
    </footer>
  );
}
