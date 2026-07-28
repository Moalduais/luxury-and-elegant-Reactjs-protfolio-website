import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AtelierAR() {
  useScrollReveal();

  const skills = [
    {
      title: "C++ والمستوى المنخفض",
      desc: "إدارة الذاكرة، الحوسبة عالية الأداء، وهيكلة الأنظمة حيث كل دورة ساعة لها أهميتها.",
      proficiency: "98%",
      icon: "terminal",
      category: "جوهر الخبرة",
      wide: true
    },
    {
      title: "JavaScript",
      desc: "ES6+, Node, TypeScript",
      proficiency: "94%",
      icon: "javascript",
      category: "محرك الويب"
    },
    {
      title: "C#",
      desc: ".NET Core, محرك Unity",
      proficiency: "88%",
      icon: "data_object",
      category: "المنطق"
    },
    {
      title: "Dart & Flutter",
      desc: "تطوير واجهات متعددة الأنظمة",
      proficiency: "92%",
      icon: "flutter",
      category: "الموبايل"
    },
    {
      title: "HTML & CSS",
      desc: "دلالي، Tailwind، SCSS",
      proficiency: "100%",
      icon: "language",
      category: "الهيكلية"
    },
    {
      title: "Modern React.js & Next.js",
      desc: "بناء تطبيقات قابلة للتوسع، معالجة في جانب الخادم، مع التركيز على التصميم الذري والأداء الأمثل.",
      stats: [
        { label: "منطق المكونات", value: "95%" },
        { label: "إدارة الحالة", value: "92%" }
      ],
      wide: true,
      dark: true
    },
    {
      title: "Python",
      desc: "البيانات، البرمجة النصية، الذكاء الاصطناعي",
      proficiency: "85%",
      icon: "code",
      category: "الأتمتة"
    },
    {
      title: "PHP",
      desc: "Laravel، صيانة الأنظمة القديمة",
      proficiency: "80%",
      icon: "database",
      category: "الخلفية"
    }
  ];

  return (
    <main dir="rtl" className="relative min-h-screen pt-40 pb-24 overflow-hidden">
      <div className="matte-glow absolute -top-40 -right-40 w-[800px] h-[800px] pointer-events-none"></div>
      <div className="matte-glow absolute bottom-0 -left-40 w-[600px] h-[600px] pointer-events-none"></div>
      
      <header className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block scroll-reveal">الترسانة الرقمية</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight scroll-reveal">
              السيادة <br/><span className="italic font-normal">التقنية.</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-[#e5e2e1]/60 max-w-sm font-body leading-relaxed scroll-reveal">
              مجموعة مختارة من اللغات وإطارات العمل تم إتقانها عبر عقد من حل المشكلات الهوسية والبراعة الرقمية.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className={`
                ${skill.wide ? 'md:col-span-2 lg:col-span-2' : ''}
                ${skill.dark ? 'bg-[#0e0e0e] border-r border-[#4d4635]/15' : 'bg-surface-container-low hover:bg-surface-container-high'}
                p-12 group transition-all duration-500 relative overflow-hidden scroll-reveal text-right
              `}
            >
              {!skill.dark && <div className="absolute top-0 right-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>}
              
              <div className="flex justify-between items-start mb-16">
                {skill.category && <span className="font-label text-[10px] text-primary/40 tracking-widest uppercase">{skill.category}</span>}
                {skill.dark && <span className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-4 block">منطقة التركيز</span>}
                {skill.icon && <span className="material-symbols-outlined text-primary text-4xl">{skill.icon}</span>}
              </div>

              <h3 className={`font-headline ${skill.dark ? 'text-4xl' : 'text-3xl'} mb-4`}>
                {skill.title}
              </h3>
              
              <p className={`text-[#e5e2e1]/60 ${skill.dark ? 'text-base' : 'text-sm'} mb-12 max-w-xs`}>
                {skill.desc}
              </p>

              {skill.proficiency && (
                <div className="space-y-2">
                  <div className="flex justify-between font-label text-[10px] uppercase tracking-tighter text-primary">
                    <span>الكفاءة</span>
                    <span>{skill.proficiency}</span>
                  </div>
                  <div className="h-[1px] w-full bg-outline-variant/30 relative">
                    <div className="absolute top-0 right-0 h-full bg-primary progress-fill" style={{ '--target-width': skill.proficiency }}></div>
                  </div>
                </div>
              )}

              {skill.stats && (
                <div className="grid grid-cols-2 gap-8">
                  {skill.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-primary font-headline text-2xl mb-1">{stat.value}</div>
                      <div className="font-label text-[10px] uppercase text-[#e5e2e1]/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative scroll-reveal reveal-right">
            <div className="bg-surface-container-low aspect-square w-full rounded-lg overflow-hidden border border-[#4d4635]/10">
              <img 
                alt="Abstract 3D digital sculptures" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDhbKWW6jWw0Bl60qUzjhZ4BZKKlp4hTQb5fPP2luG75DqFSBeJM5ccYZ8u3zpbmVQ8ImuJ29SPzU2-Hap5q1qWLy8RL6-bClDXBaVdm5sZvYjcxmB0HVBpR8VGg2sqqfXUxZi7cc_RzfD5xSJToxYtkOlFIOAfDQ2w2jhuNURWOdpYIvtnBUqKikPzBoGDYp2vZaO1CXOiZb0kH71bvxuiDTCOsitwQnljNmJ4nqiQqS1_RUQPy9ROcMmLpqpQaEIE45ON8IA1sg"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 p-8 bg-surface-container-highest border border-primary/20 backdrop-blur-md hidden md:block scroll-reveal delay-300">
              <div className="font-label text-4xl text-primary font-bold mb-2">+10</div>
              <div className="font-label text-[10px] text-[#e5e2e1]/60 uppercase tracking-[0.2em]">سنوات من التميز<br/>التقني</div>
            </div>
          </div>
          <div className="scroll-reveal reveal-left text-right">
            <h2 className="font-headline text-4xl mb-8 leading-tight">الحرفية وراء الكود البرمجي.</h2>
            <p className="text-[#e5e2e1]/70 font-body text-lg leading-relaxed mb-12">
              الإتقان ليس مجرد معرفة الصياغة، بل فهم الهيكلية الأساسية التي تجعل كل لغة فريدة. من إدارة الذاكرة اليدوية في C++ إلى الجمال التفاعلي لـ Flutter، أبني بدقة تقنية ورؤية تحريرية.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start scroll-reveal delay-200">
                <span className="material-symbols-outlined text-primary">architecture</span>
                <div>
                  <h4 className="font-headline text-xl mb-1">قابلية توسع الأنظمة</h4>
                  <p className="text-[#e5e2e1]/50 text-sm">أنماط تصميم تسمح للكود بالنمو مع احتياجات العمل.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start scroll-reveal delay-400">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <h4 className="font-headline text-xl mb-1">أمان مضاد للاختراق</h4>
                  <p className="text-[#e5e2e1]/50 text-sm">تدقيق صارم وممارسات كود نظيف لضمان سلامة البيانات.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
