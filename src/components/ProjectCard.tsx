import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.caseStudy ? (
            <Link to={`/projects/${project.slug}`}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
                Case Study
              </motion.span>
            </Link>
          ) : (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
              Case Study
            </motion.a>
          )}
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-600/0 to-blue-600/0 group-hover:from-violet-600/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
