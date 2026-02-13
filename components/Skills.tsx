import { motion } from 'motion/react';
import { Target, Users, LineChart, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    icon: Target,
    title: 'Product Strategy',
    skills: ['Roadmap Planning', 'Vision & Strategy', 'Market Research', 'Competitive Analysis', 'OKRs & KPIs'],
    color: 'violet'
  },
  {
    icon: Users,
    title: 'User & Stakeholder',
    skills: ['User Research', 'Customer Interviews', 'Stakeholder Mgmt', 'Cross-functional Leadership', 'Communication'],
    color: 'blue'
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    skills: ['SQL', 'Product Metrics', 'A/B Testing', 'Data Analysis', 'Mixpanel/Amplitude'],
    color: 'cyan'
  },
  {
    icon: Lightbulb,
    title: 'Execution',
    skills: ['Agile/Scrum', 'Jira', 'Figma', 'Prioritization', 'Go-to-Market'],
    color: 'indigo'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Core competencies that drive product success from discovery to delivery
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${category.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`text-${category.color}-400`} size={24} />
                </div>
                
                <h3 className="text-white mb-4">{category.title}</h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}