import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import logo from '../assets/MPLOGO(V5).png';

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-4">Project not found</h1>
          <Link to="/" className="text-slate-300 hover:text-white underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Simplified Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="MP Logo"
                className="h-8 w-auto sm:h-10 brightness-0 invert"
              />
            </Link>
            <Link
              to="/#projects"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Image */}
      <section className="pt-16">
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-white text-3xl md:text-5xl font-medium">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <CaseStudyBlock title="Overview" delay={0}>
          <p className="text-slate-300 text-lg leading-relaxed">
            {caseStudy.overview}
          </p>
        </CaseStudyBlock>

        <CaseStudyBlock title="The Problem" delay={0.1}>
          <p className="text-slate-300 text-lg leading-relaxed">
            {caseStudy.problem}
          </p>
        </CaseStudyBlock>

        <CaseStudyBlock title="Approach" delay={0.2}>
          <ul className="space-y-3">
            {caseStudy.approach.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock title="Results" delay={0.3}>
          <ul className="space-y-3">
            {caseStudy.results.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock title="Key Learnings" delay={0.4}>
          <ul className="space-y-3">
            {caseStudy.learnings.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-slate-800"
        >
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function CaseStudyBlock({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-2xl font-medium mb-6">{title}</h2>
      {children}
    </motion.div>
  );
}
