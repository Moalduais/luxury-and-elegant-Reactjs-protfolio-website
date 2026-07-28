import { Link } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomeEN() {
  useScrollReveal();

  return (
    <main>
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
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] max-w-5xl mx-auto scroll-reveal delay-100">
              Crafting the Future of <span className="text-primary italic">Digital Excellence</span>
            </h1>
            <p className="mt-8 font-label text-sm md:text-base tracking-[0.3em] uppercase text-on-surface/60 max-w-2xl mx-auto scroll-reveal delay-200">
              Mastery in C++, JavaScript, and Cross-Platform Architecture.
            </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40 scroll-reveal delay-500">
          <span className="font-label text-[10px] tracking-widest uppercase">Explore Atelier</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Brief Profile Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-12 pointer-events-none select-none scroll-reveal">
            <span className="font-headline text-[15vw] leading-none opacity-[0.03] absolute top-0 -left-12">ATELIER</span>
          </div>
          <div className="md:col-span-7 relative z-10">
            <div className="flex items-center gap-4 mb-6 scroll-reveal">
              <div className="w-12 h-px bg-primary"></div>
              <span className="font-label text-xs tracking-widest uppercase text-primary">Philosophy</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight scroll-reveal delay-100">
              Architecture is not just code. It is <span className="italic">intent</span> manifested in logic.
            </h2>
            <p className="font-body text-lg text-on-surface/70 leading-relaxed max-w-xl scroll-reveal delay-200">
              Based in the intersection of high-performance systems and fluid human interfaces, I build digital experiences that feel as permanent as physical stone and as dynamic as light. My approach treats every line of code as a master-stroke of craftsmanship.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-8 scroll-reveal delay-300">
              <div>
                <span className="block font-label text-[10px] tracking-widest uppercase text-on-surface/40 mb-2">Systems</span>
                <span className="font-body text-primary text-xl">C++, Rust, WebAssembly</span>
              </div>
              <div>
                <span className="block font-label text-[10px] tracking-widest uppercase text-on-surface/40 mb-2">Interfaces</span>
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
            <div className="absolute bottom-6 -right-6 bg-primary px-8 py-4 rounded-lg shadow-xl hidden lg:block scroll-reveal delay-300">
              <span className="font-headline text-on-primary italic text-xl">Est. 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Bento Grid */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-4 block">Core Competencies</span>
            <h3 className="font-headline text-4xl md:text-5xl">The Technical Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* High Performance */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 scroll-reveal delay-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">memory</span>
              <h4 className="font-headline text-2xl mb-4">Low-Level Optimization</h4>
              <p className="font-body text-sm text-on-surface/60 leading-relaxed">Pioneering performance with C++ and direct memory management for mission-critical applications where every microsecond matters.</p>
            </div>
            {/* Cloud Architecture */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 scroll-reveal delay-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
              <h4 className="font-headline text-2xl mb-4">Distributed Systems</h4>
              <p className="font-body text-sm text-on-surface/60 leading-relaxed">Designing resilient serverless architectures that scale autonomously, ensuring 99.99% uptime for global-scale products.</p>
            </div>
            {/* Creative Development */}
            <div className="md:col-span-4 lg:col-span-4 bg-surface p-10 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center scroll-reveal">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">palette</span>
                <h4 className="font-headline text-2xl mb-4">Creative Engineering</h4>
                <p className="font-body text-sm text-on-surface/60 leading-relaxed">Merging aesthetic perfection with functional excellence using WebGL and Three.js to create immersive digital worlds.</p>
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
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-xl border border-primary/20 scroll-reveal delay-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
              <h4 className="font-headline text-2xl mb-4">Modern Full Stack</h4>
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
          <h2 className="font-headline text-5xl md:text-7xl mb-12 scroll-reveal">Ready to define the <span className="italic underline decoration-primary/30 underline-offset-8">standard?</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 scroll-reveal delay-200">
            <Link 
              to="/contact" 
              className="bg-primary text-on-primary font-label text-sm tracking-widest uppercase px-12 py-5 rounded-lg hover:scale-105 active:scale-90 transition-all duration-300 inline-block"
            >
              Initiate Discussion
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
