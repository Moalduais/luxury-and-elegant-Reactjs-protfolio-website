import { Link } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomeAR() {
  useScrollReveal();

  return (
    <main dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 matte-glow pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          <div className="relative group scroll-reveal">
            <div className="w-72 h-72 md:w-96 md:h-96 drop-shadow-[0_0_50px_rgba(242,202,80,0.15)] transition-transform duration-700 group-hover:scale-105">
              <ModelViewer 
                src="/magic_gyroscope.glb" 
                alt="Obsidian Sphere" 
              />
            </div>
          </div>
          <div className="mt-12 text-center px-6">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.2] max-w-5xl mx-auto scroll-reveal delay-100">
              صياغة مستقبل <span className="text-primary italic">التميز الرقمي</span>
            </h1>
            <p className="mt-8 font-label text-sm md:text-base tracking-[0.3em] uppercase text-on-surface/60 max-w-2xl mx-auto scroll-reveal delay-200">
              إتقان في لغات C++، وجافا سكريبت، والمعماريات متعددة المنصات.
            </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40 scroll-reveal delay-500">
          <span className="font-label text-[10px] tracking-widest uppercase">استكشاف المحترف</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Brief Profile Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-12 pointer-events-none select-none scroll-reveal">
            <span className="font-headline text-[15vw] leading-none opacity-[0.03] absolute top-0 -right-12">المحترف</span>
          </div>
          <div className="md:col-span-7 relative z-10 text-right">
            <div className="flex items-center justify-end gap-4 mb-6 scroll-reveal">
              <span className="font-label text-xs tracking-widest uppercase text-primary">الفلسفة</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight scroll-reveal delay-100">
              المعمارية ليست مجرد كود. إنها <span className="italic">النية</span> تتجلى في المنطق.
            </h2>
            <p className="font-body text-lg text-on-surface/70 leading-relaxed max-w-xl mr-auto scroll-reveal delay-200">
              من خلال موقعي في نقطة التقاء الأنظمة عالية الأداء والواجهات البشرية المرنة، أقوم ببناء تجارب رقمية تشعرك بالثبات كالحجر المادي وبالديناميكية كالضوء. منهجي يعامل كل سطر برمجى كضربة معلم فنية.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-8 scroll-reveal delay-300">
              <div>
                <span className="block font-label text-[10px] tracking-widest uppercase text-on-surface/40 mb-2">الأنظمة</span>
                <span className="font-body text-primary text-xl">C++, Rust, WebAssembly</span>
              </div>
              <div>
                <span className="block font-label text-[10px] tracking-widest uppercase text-on-surface/40 mb-2">الواجهات</span>
                <span className="font-body text-primary text-xl">Next.js, GLSL, Swift</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative group scroll-reveal delay-100">
            <div className="absolute -inset-4 bg-surface-container-low transition-colors duration-500 group-hover:bg-surface-container-high -z-10 rounded-lg"></div>
            <div className="image-reveal overflow-hidden rounded-lg">
              <img 
                alt="Developer Portrait" 
                className="w-full grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtUeo1kHv2dN2cPzrgkA599JzsvdwlRdqUCUO41pV-9nd8pYK6UE441It4n7Z8en_Cs3e11nfFwP1-mL7rw0xjMEUwHi8srCysZHzgwgRkmThoJiQvd676Js6AX1v-5hNYTfh1j0vjYmlog8zt3E-94fbbzgFvQG8gPMGZ7RhFQ16ouruOFav6eRO-5JjCx3bWoou60MyxjvG1-wvOXvl-3jsG0nTwdegl5axzaaoDZQnlLhWFFBq4zIH0Mk---Pi4pcEEZoK-AE0"
              />
            </div>
            <div className="absolute bottom-6 -left-6 bg-primary px-8 py-4 rounded-lg shadow-xl hidden lg:block scroll-reveal delay-300">
              <span className="font-headline text-on-primary italic text-xl">تأسس ٢٠١٤</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Bento Grid */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-4 block">الكفاءات الجوهرية</span>
            <h3 className="font-headline text-4xl md:text-5xl">الترسانة التقنية</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* High Performance */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 scroll-reveal delay-100 text-right">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">memory</span>
              <h4 className="font-headline text-2xl mb-4">تحسين الأنظمة منخفضة المستوى</h4>
              <p className="font-body text-sm text-on-surface/60 leading-relaxed">ريادة الأداء باستخدام C++ وإدارة الذاكرة المباشرة للتطبيقات الحرجة حيث تفرق كل ميكروثانية.</p>
            </div>
            {/* Cloud Architecture */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 scroll-reveal delay-200 text-right">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
              <h4 className="font-headline text-2xl mb-4">الأنظمة الموزعة</h4>
              <p className="font-body text-sm text-on-surface/60 leading-relaxed">تصميم معماريات مرنة بدون خوادم تتوسع ذاتياً، مما يضمن تواجد بنسبة ٩٩.٩٩٪ للمنتجات ذات النقاق العالمي.</p>
            </div>
            {/* Creative Development */}
            <div className="md:col-span-4 lg:col-span-4 bg-surface p-10 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row-reverse gap-8 items-center scroll-reveal text-right">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">palette</span>
                <h4 className="font-headline text-2xl mb-4">الهندسة الإبداعية</h4>
                <p className="font-body text-sm text-on-surface/60 leading-relaxed">دمج الكمال الجمالي مع التميز الوظيفي باستخدام WebGL و Three.js لإنشاء عوالم رقمية غامرة.</p>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg image-reveal">
                <img 
                  alt="Code Abstract" 
                  className="w-full h-48 object-cover brightness-50 hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDfpACtQJ9ithUg36UiZKEY-k-prcmC0gzlfZbSZLrcbkAAg8El1977IY0Im_USYqZ0FAg3zDIC_5wK37_j2nRLQylOid9TdpgYqD82dEbctuFulk6SlKLKpbPwxanyKVJkvdCryvMNNVrcvxUE4anYVU4WZZ91uuY2PXeFF5jGST5VpTFtqNzibdZkZRgjjtrw_XG7_Uw-OUfgFJCPIUGMxM9DvMSUOTeeJHmXnTKxNSlei5oIh9LhyvgOs5hqF_3pHpTGv-qA0"
                />
              </div>
            </div>
            {/* Modern Stack */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-xl border border-primary/20 scroll-reveal delay-300 text-right">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
              <h4 className="font-headline text-2xl mb-4">التقنيات الحديثة</h4>
              <ul className="font-label text-xs space-y-3 tracking-widest text-on-surface/80">
                <li>+ NEXT.JS 14</li>
                <li>+ TYPESCRIPT</li>
                <li>+ PRISMA & SQL</li>
                <li>+ TAILWIND CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] matte-glow opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl mb-12 scroll-reveal">هل أنت مستعد لتحديد <span className="italic underline decoration-primary/30 underline-offset-8">المعايير؟</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 scroll-reveal delay-200">
            <Link 
              to="/contact" 
              className="bg-primary text-on-primary font-label text-sm tracking-widest uppercase px-12 py-5 rounded-lg hover:scale-105 active:scale-90 transition-all duration-300 inline-block"
            >
              ابدأ المحادثة
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
