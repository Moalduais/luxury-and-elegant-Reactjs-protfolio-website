import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectsEN() {
  useScrollReveal();

  const projects = [
    {
      title: "The Obsidian Ledger",
      category: "Fintech Ecosystem",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4shPoznfdv10MOB7EBxDTXLcZVnONbJa8eadztFNO6Ojc9xuot9Z57a9v6Xpd25pce6uZuhOljlIGou3h6L6S4O_0ak8TyUkLXICoX37Yx7yQinyOVTW8pDuMtGZdAHE4KBAr1CoWNHpfJVIW_n0OgVPWWbe6gcpk9xwBKulSPLVtJvBKxeaLFTIGTJgKiXuOKNj5m6n-HV62k8yt_trnKyb8ZsfJsVP8_My9_I2FcVTUZa6hzcbtz-naXi4RaS5V7fBkhZZO7Y",
      tags: ["Next.js", "TypeScript", "GraphQL"],
      wide: true
    },
    {
      title: "Aether Concierge",
      desc: "Hyper-personalized luxury travel interface built for the elite traveler.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVShnHeggtU98Hvfuh5QQ_dSR2gubUriSI6TR770bSP1o4JDmMX02m66TllmZRJMOjt2tYbNiY9n-WlBAX_EjnaWW-66NqR1Z3o4dfVwvIQmkz14eNaMG2h2wfeRrpViBRUU-eeBWXfXf4xCcGLI1pxMPMwGNxGU1Z4_ZARSGFlUGlfCG79IHHfylbinAS4vu2-0jFuyl4__WUMC6ZmjEUYF9MzGJLpsKEWCnlf-oxThiN-JsBSqCxoeVmAOWZtujYmLx3xvxI3as",
      tags: ["React Native", "Node.js"]
    },
    {
      title: "Sovereign IoT",
      desc: "Secured hardware-software integration for private estate management.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhHLoERmBFnDuZfTs0QjC6O1TyjAOWWut8GEW70nh2rUwYLDbKIieUVZ57X4RrhgWgghCk-ridT4hS81qNy0lglOUDzUs8ClG52EPOJT45RX61GEyiCeZIlYsxmdyLcUMDbdUJYeM1qvGn0IkU2EIGFyeIGG6DBktWcAQUziGKkcL5j7prz0etucdxRfn-mS14BgKJQp2ItGmdrkLhNPtXkJzPT5fMh7v9c1KORFgVS2jZhd85wxomutVufhYkd5-iKda7sJMevRs",
      tags: ["Python", "C++"],
      square: true
    },
    {
      title: "Chronos Engine",
      desc: "A high-performance algorithmic trading platform with millisecond precision.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_K-ZrZWPsXKycJAiTu7MlL2WjQrFiXunTMRe_AXLDvF9yWYnf_AkeTK8fCRwMgHKDxfZmNDUmKEXI_ozCTULEfXvNHdOYH7YtFC17kFNbt7atl79XpMwU_RKRoh7L5tBw-JBX7wdWn_f0k98GDPlJ5N5yWkwwTuHAI_sXYu1zWf1Jg8MLgTVSaSKyZCo5ey8IMnHLtPGou4u7k5rhLIrE6qI5KxwcLCzukPn0fsT3ofwe9gNEp9p6pg5PcA9IsnURDblexirNsQ",
      tags: ["Rust", "WebAssembly"],
      medium: true,
      caseStudy: true
    }
  ];

  return (
    <main className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] matte-glow pointer-events-none -z-10"></div>
      
      <section className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="scroll-reveal font-label text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Selected Works</span>
          <h1 className="scroll-reveal stagger-1 font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] max-w-4xl">
            Digital Artifacts <span className="italic font-normal text-on-surface-variant">& Portfolio.</span>
          </h1>
          <div className="scroll-reveal stagger-2 w-24 h-px bg-outline-variant mt-8 mb-4"></div>
          <p className="scroll-reveal stagger-3 font-body text-on-surface-variant max-w-xl text-lg leading-relaxed">
            A curated gallery of engineering precision and high-fidelity aesthetics. Each project is a testament to the synthesis of logic and luxury.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`
                scroll-reveal
                ${project.wide ? 'md:col-span-8' : project.square ? 'md:col-span-5' : project.medium ? 'md:col-span-7' : 'md:col-span-4'}
                group relative bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-outline-variant/30 transition-all duration-500
              `}
            >
              <div className={`${project.wide ? 'aspect-[16/10]' : project.square ? 'aspect-square' : project.medium ? 'aspect-[16/9]' : 'aspect-[3/4]'} overflow-hidden bg-surface-container-lowest`}>
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  alt={project.title}
                />
              </div>

              <div className={project.wide ? "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent flex flex-col justify-end p-10" : "p-8"}>
                {project.category && (
                  <div className="scroll-reveal stagger-1 flex items-center gap-4 mb-4">
                    <span className="font-label text-[10px] tracking-widest uppercase px-3 py-1 bg-surface-container-high text-primary border border-primary/20 rounded-full">
                      {project.category}
                    </span>
                  </div>
                )}
                <h3 className={`font-headline ${project.wide ? 'text-4xl' : 'text-2xl'} mb-2 group-hover:text-primary transition-colors duration-300`}>
                  {project.title}
                </h3>
                {project.desc && <p className="scroll-reveal stagger-1 text-on-surface-variant text-sm mb-6 line-clamp-2">{project.desc}</p>}
                
                <div className={`scroll-reveal stagger-2 flex flex-wrap gap-4 ${project.wide ? 'text-on-surface-variant font-label text-xs tracking-widest uppercase' : ''}`}>
                  {project.tags.map(tag => (
                    <span key={tag} className={project.wide ? "flex items-center gap-2" : "font-label text-[9px] tracking-widest uppercase text-tertiary-fixed/60 px-2 py-1 bg-surface-container-lowest rounded"}>
                      {project.wide && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
                      {tag}
                    </span>
                  ))}
                </div>

                {project.caseStudy && (
                  <div className="mt-6 flex justify-end">
                    <a className="font-label text-xs text-primary flex items-center gap-2 hover:gap-4 transition-all" href="#">
                      VIEW CASE STUDY <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="scroll-reveal font-headline text-4xl md:text-6xl leading-[1.2] italic text-on-surface-variant/40 hover:text-on-surface transition-colors duration-1000">
            "Precision is the <span className="text-primary not-italic font-bold">Absolute Minimum</span> requirement for digital excellence."
          </div>
          <div className="scroll-reveal stagger-1 font-body text-on-surface-variant space-y-6">
            <p>Building for the web is an exercise in restraint. The Sovereign approach focuses on stripping away the noise until only the essential brilliance remains. These works represent the peak of that philosophy.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5bvHonpuqecvRUtUFIQ-lkuPP65ZUjSlViCbLuI-GZn4IG6-TfAtrxwRyGhK8rx-S-3kGcyfK-y9vaav6ShDvQMgy5mRHiuxnQzDuOiBb1wr-XQgL0ZMutDk1JchCW8o6YRCWS6bC7e_Jo4bwESFwKwOaV_eGDGWSuVit-DuL18w477Em9MeJGRAgX8VRveEE6PzJE29hiX4EOLKq4tuMCd57Ja5_Tdn0PEGhaeSIgvuFMW6OnwuRHf9XAN4d3M0JvLA2e93CbM"
                  alt="Julian Vane"
                />
              </div>
              <div>
                <p className="font-label text-xs tracking-widest uppercase text-primary">Master Craftsman</p>
                <p className="font-headline italic text-sm">Julian Vane</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
