import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

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
