import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactAR() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main dir="rtl" className="relative pt-32 pb-24 overflow-hidden text-right">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full matte-glow pointer-events-none -z-10"></div>
      
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="scroll-reveal">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block">صياغة الموروثات الرقمية</span>
            <h1 className="font-headline text-5xl lg:text-7xl leading-[1.2] mb-8 text-on-surface">
              مهندس <br/>
              <span className="italic text-primary-fixed-dim">الأكواد الصامتة</span> والتأثير النابض.
            </h1>
          </div>
          
          <div className="space-y-8 max-w-xl mr-0">
            <div className="scroll-reveal delay-100">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                أتعامل مع التطوير ليس كمجرد مجموعة من المهام، بل كحرفة رقمية انضباطية. مع أساس متين في الهندسة عالية المخاطر وعين متمرسة في التصميم التحريري، أقوم بجسر الفجوة بين التعقيد التقني والفخامة الحسية.
              </p>
            </div>
            <div className="scroll-reveal delay-200">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                من داخل استوديو يسوده التركيز الهادئ، أتعاون مع أصحاب الرؤى لبناء تجارب ويب تبدو أقل كبرمجيات وأقرب إلى معرض فني خاص. كل سطر برمجي هو قرار متعمد؛ وكل تفاعل هو توقيع خاص.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-start gap-8">
              {[
                { icon: 'link', label: 'لينكد إن', href: 'https://linkedin.com' },
                { icon: 'terminal', label: 'جيت هاب', href: 'https://github.com' },
                { icon: 'mail', label: 'البريد', href: 'mailto:office@thesovereign.com' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group scroll-reveal delay-${(i + 3) * 100} flex items-center gap-3 text-on-surface/60 hover:text-primary transition-colors duration-300`}
                >
                  <span className="material-symbols-outlined text-2xl">{social.icon}</span>
                  <span className="font-label text-xs tracking-widest uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative group scroll-reveal delay-300">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 z-10 transition-all duration-500 group-hover:-top-2 group-hover:-right-2"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/30 z-10 transition-all duration-500 group-hover:-bottom-2 group-hover:-left-2"></div>
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-sm relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwU9Fs6x5TjRZNnEgDl_lvRpIOj1Yen9NrGPUMPPIKqjMzmxnjTOyg-RMuOCDhIWX1DbR1OV9osNMGF7YQMamcUOWVohlJOTeEtd7SQkw1ga3hrDzIiICKJ4kvKK0l6bCBoi-SNU36kqBTGqUZeiDdaxkwVwuo5mE12NkYnYpeDFlpSEd-G-edMz82z3xuoNWCTNZZhgpo77xqGjbZHxv99vZipkXTzoFM1gXewg9LntI7ncrckuivlXekySr_izkuYr2Kn_BeoWM"
                alt="Professional Portrait"
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
            <div className="mt-6 flex justify-start scroll-reveal delay-400">
              <p className="font-label text-[10px] tracking-[0.4em] uppercase text-on-surface/40">صورة شخصية للاستوديو • ٢٠٢٤</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-32">
        <div className="bg-surface-container-low p-10 lg:p-20 relative overflow-hidden scroll-reveal">
          <div className="absolute top-0 left-0 p-12 hidden lg:block opacity-10 scroll-reveal delay-500">
            <span className="material-symbols-outlined text-[12rem]">history_edu</span>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="scroll-reveal delay-100">
              <h2 className="font-headline text-4xl mb-6">ابدأ <br/>التعاون</h2>
              <p className="text-on-surface-variant max-w-md mr-0">
                سواء كنت تمتلك رؤية مكتملة أو مجرد بذرة لفكرة، فلنتناقش حول كيفية الارتقاء بها لتصبح حقيقة رقمية ملموسة.
              </p>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 scroll-reveal delay-200">
                  <span className="w-12 h-[1px] bg-primary/30"></span>
                  <span className="font-label text-xs tracking-widest text-primary uppercase">office@thesovereign.com</span>
                </div>
                <div className="flex items-center gap-4 scroll-reveal delay-300">
                  <span className="w-12 h-[1px] bg-primary/30"></span>
                  <span className="font-label text-xs tracking-widest text-primary uppercase">زيورخ، سويسرا</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group relative scroll-reveal delay-200">
                <label className="font-label text-[10px] tracking-widest uppercase text-on-surface/40 group-focus-within:text-primary transition-colors">الاسم الكامل</label>
                <input 
                  required
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 px-0 py-3 text-on-surface placeholder:text-on-surface/10 focus:ring-0 focus:border-primary transition-all font-headline text-xl tracking-tight" 
                  placeholder="ألكسندر فوغل" 
                  type="text"
                />
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full"></div>
              </div>
              <div className="group relative scroll-reveal delay-300">
                <label className="font-label text-[10px] tracking-widest uppercase text-on-surface/40 group-focus-within:text-primary transition-colors">البريد الإلكتروني</label>
                <input 
                  required
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 px-0 py-3 text-on-surface placeholder:text-on-surface/10 focus:ring-0 focus:border-primary transition-all font-headline text-xl tracking-tight" 
                  placeholder="CLIENT@DOMAIN.COM" 
                  type="email"
                />
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full"></div>
              </div>
              <div className="group relative scroll-reveal delay-400">
                <label className="font-label text-[10px] tracking-widest uppercase text-on-surface/40 group-focus-within:text-primary transition-colors">الرؤية</label>
                <textarea 
                  required
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 px-0 py-3 text-on-surface placeholder:text-on-surface/10 focus:ring-0 focus:border-primary transition-all font-headline text-xl tracking-tight resize-none" 
                  placeholder="صف مشروعك هنا..." 
                  rows="3"
                ></textarea>
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full"></div>
              </div>
              <div className="pt-4 scroll-reveal delay-500">
                {!submitted ? (
                  <button 
                    disabled={loading}
                    className="group relative w-full lg:w-auto overflow-hidden px-12 py-5 bg-primary text-on-primary font-label text-xs tracking-[0.3em] uppercase font-bold rounded-sm transition-transform active:scale-[0.98]" 
                    type="submit"
                  >
                    <span className="relative z-10">{loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                ) : (
                  <p className="text-primary font-label text-sm tracking-widest">✓ تم إرسال رسالتك بنجاح!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
