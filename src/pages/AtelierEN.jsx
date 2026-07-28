import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AtelierEN() {
  useScrollReveal();

  const skills = [
    {
      title: "C++ & Low Level",
      desc: "Memory management, high-performance computing, and systems architecture where every clock cycle matters.",
      proficiency: "98%",
      icon: "terminal",
      category: "Expertise Core",
      wide: true
    },
    {
      title: "JavaScript",
      desc: "ES6+, Node, TypeScript",
      proficiency: "94%",
      icon: "javascript",
      category: "Web Engine"
    },
    {
      title: "C#",
      desc: ".NET Core, Unity Engine",
      proficiency: "88%",
      icon: "data_object",
      category: "Logic"
    },
    {
      title: "Dart & Flutter",
      desc: "Cross-platform UI excellence",
      proficiency: "92%",
      icon: "flutter",
      category: "Mobile"
    },
    {
      title: "HTML & CSS",
      desc: "Semantic, Tailwind, SCSS",
      proficiency: "100%",
      icon: "language",
      category: "Structure"
    },
    {
      title: "Modern React.js & Next.js",
      desc: "Architecting scalable, server-side rendered applications with a focus on atomic design and optimized performance.",
      stats: [
        { label: "Component Logic", value: "95%" },
        { label: "State Management", value: "92%" }
      ],
      wide: true,
      dark: true
    },
    {
      title: "Python",
      desc: "Data, Scripting, AI",
      proficiency: "85%",
      icon: "code",
      category: "Automation"
    },
    {
      title: "PHP",
      desc: "Laravel, Legacy Maintenance",
      proficiency: "80%",
      icon: "database",
      category: "Backend"
    }
  ];

  return (
    <main className="relative min-h-screen pt-40 pb-24 overflow-hidden">
      <div className="matte-glow absolute -top-40 -left-40 w-[800px] h-[800px] pointer-events-none"></div>
      <div className="matte-glow absolute bottom-0 -right-40 w-[600px] h-[600px] pointer-events-none"></div>
      
      <header className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block scroll-reveal">The Digital Arsenal</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight scroll-reveal">
              Technical <br/><span className="italic font-normal">Sovereignty.</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-[#e5e2e1]/60 max-w-sm font-body leading-relaxed scroll-reveal">
              A curated assembly of languages and frameworks mastered through a decade of obsessive problem solving and digital craftsmanship.
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
                ${skill.dark ? 'bg-[#0e0e0e] border-l border-[#4d4635]/15' : 'bg-surface-container-low hover:bg-surface-container-high'}
                p-12 group transition-all duration-500 relative overflow-hidden scroll-reveal
              `}
            >
              {!skill.dark && <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>}
              
              <div className="flex justify-between items-start mb-16">
                {skill.category && <span className="font-label text-[10px] text-primary/40 tracking-widest uppercase">{skill.category}</span>}
                {skill.dark && <span className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-4 block">Focus Area</span>}
                {skill.icon && <span className="material-symbols-outlined text-primary text-4xl">{skill.icon}</span>}
              </div>

              <h3 className={`font-headline ${skill.dark ? 'text-4xl' : 'text-3xl'} mb-4`}>
                {skill.title.split('&').map((part, i) => i === 1 ? <span key={i}> & <span className="italic">{part}</span></span> : part)}
              </h3>
              
              <p className={`text-[#e5e2e1]/60 ${skill.dark ? 'text-base' : 'text-sm'} mb-12 max-w-xs`}>
                {skill.desc}
              </p>

              {skill.proficiency && (
                <div className="space-y-2">
                  <div className="flex justify-between font-label text-[10px] uppercase tracking-tighter text-primary">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}</span>
                  </div>
                  <div className="h-[1px] w-full bg-outline-variant/30 relative">
                    <div className="absolute top-0 left-0 h-full bg-primary progress-fill" style={{ '--target-width': skill.proficiency }}></div>
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
            <div className="absolute -bottom-12 -right-12 p-8 bg-surface-container-highest border border-primary/20 backdrop-blur-md hidden md:block scroll-reveal delay-300">
              <div className="font-label text-4xl text-primary font-bold mb-2">10+</div>
              <div className="font-label text-[10px] text-[#e5e2e1]/60 uppercase tracking-[0.2em]">Years of Technical<br/>Excellence</div>
            </div>
          </div>
          <div className="scroll-reveal reveal-left">
            <h2 className="font-headline text-4xl mb-8 leading-tight">The craftsmanship behind the code.</h2>
            <p className="text-[#e5e2e1]/70 font-body text-lg leading-relaxed mb-12">
              Mastery is not merely knowing the syntax, but understanding the underlying architecture that makes each language unique. From the manual memory management of C++ to the reactive beauty of Flutter, I build with technical precision and editorial vision.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start scroll-reveal delay-200">
                <span className="material-symbols-outlined text-primary">architecture</span>
                <div>
                  <h4 className="font-headline text-xl mb-1">Systemic Scalability</h4>
                  <p className="text-[#e5e2e1]/50 text-sm">Design patterns that allow code to grow with the business needs.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start scroll-reveal delay-400">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <h4 className="font-headline text-xl mb-1">Bulletproof Security</h4>
                  <p className="text-[#e5e2e1]/50 text-sm">Rigorous auditing and clean code practices to ensure data integrity.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
