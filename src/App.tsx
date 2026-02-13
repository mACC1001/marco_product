import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
