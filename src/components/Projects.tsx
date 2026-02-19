import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Healthcare Analytics Dashboard',
    description: 'Designed and managed an analytics dashboard for mental wellness programs, enabling administrators to track enrollment pipelines, service utilization, provider visits, and insurance claims across multiple school sites.',
    tags: ['Healthcare', 'Data Visualization', 'Dashboard Design', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Legacy System Overhaul',
    description: 'Led the consolidation of multiple legacy tools into a unified SaaS platform in under 5 months, streamlining operations and reducing client spend by 50%.',
    tags: ['Product Strategy', 'MVP', 'B2B SaaS', 'Go-to-Market'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'HIPAA Consent Integration',
    description: 'Led end-to-end initiative to capture third-party HIPAA consent during patient registration, building integrations to sync consent status and digitally signed PDFs, updating the registration flow, and extending the experience to Android devices. Delivered as a solo PM leveraging Claude Code.',
    tags: ['HIPAA Compliance', 'Integrations', 'Patient Registration', 'Claude Code'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Product Manager Portfolio',
    description: 'Designed and built a personal portfolio website from scratch using React, Tailwind CSS, and Claude Code to showcase product management experience and case studies.',
    tags: ['Personal Branding', 'Side Project', 'Claude Code', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
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
