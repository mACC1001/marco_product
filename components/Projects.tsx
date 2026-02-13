import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Mobile Banking App Redesign',
    description: 'Led cross-functional team to redesign mobile banking experience, resulting in 40% increase in user engagement and 25% reduction in support tickets.',
    tags: ['User Research', 'A/B Testing', 'Agile', 'Fintech'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'SaaS Platform 0-to-1 Launch',
    description: 'Defined product vision and roadmap for new B2B SaaS platform. Achieved product-market fit with 100+ enterprise customers in first year.',
    tags: ['Product Strategy', 'MVP', 'B2B SaaS', 'Go-to-Market'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Drove development of ML-based product recommendations, increasing conversion rate by 35% and average order value by 28%.',
    tags: ['Data Analytics', 'Machine Learning', 'Metrics', 'Personalization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Healthcare Patient Portal',
    description: 'Launched patient-facing portal improving appointment scheduling efficiency by 60% and patient satisfaction scores by 45%.',
    tags: ['Healthcare', 'User Experience', 'Stakeholder Mgmt', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of product initiatives that demonstrate impact across different domains
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}