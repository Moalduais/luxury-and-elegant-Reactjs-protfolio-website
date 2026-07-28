import { Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeEN from './pages/HomeEN';
import AtelierEN from './pages/AtelierEN';
import ProjectsEN from './pages/ProjectsEN';
import ContactEN from './pages/ContactEN';

import HomeAR from './pages/HomeAR';
import AtelierAR from './pages/AtelierAR';
import ProjectsAR from './pages/ProjectsAR';
import ContactAR from './pages/ContactAR';

function App() {
  return (
    <LangProvider>
      <div className="bg-background min-h-screen text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeEN />} />
          <Route path="/atelier" element={<AtelierEN />} />
          <Route path="/projects" element={<ProjectsEN />} />
          <Route path="/contact" element={<ContactEN />} />

          <Route path="/ar" element={<HomeAR />} />
          <Route path="/ar/atelier" element={<AtelierAR />} />
          <Route path="/ar/projects" element={<ProjectsAR />} />
          <Route path="/ar/contact" element={<ContactAR />} />
        </Routes>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
