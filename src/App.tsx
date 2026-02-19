import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CaseStudy } from './pages/CaseStudy';
import { useScrollToHash } from './hooks/useScrollToHash';

function HomePage() {
  useScrollToHash();

  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}
