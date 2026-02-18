import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/87c91a2aa68467152a524aee152a066eb8037a0d.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="MP Logo" 
              className="h-8 w-auto sm:h-10 brightness-0 invert"
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
            
            <div className="flex gap-3 ml-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="mailto:perez.marco1112@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg"
      >
        <div className="px-4 py-4 space-y-4">
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white transition-colors py-2"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white transition-colors py-2"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white transition-colors py-2"
          >
            Contact
          </a>
          
          <div className="flex gap-4 pt-4 border-t border-slate-800">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:perez.marco1112@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}