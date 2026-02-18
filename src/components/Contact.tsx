import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams({
      'form-name': 'contact',
      ...formData
    });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Something went wrong. Please try again.'));
  };

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-blue-600/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating? Let&apos;s discuss how we can build great products together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white mb-6">Let&apos;s talk about your product</h3>
              <p className="text-slate-400 mb-8">
                I&apos;m always interested in hearing about new product opportunities and challenges.
                Whether you have a question or want to explore collaboration, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-slate-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div>perez.marco1112@gmail.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-slate-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div>Orange County, CA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center h-full"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-white text-xl">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-white text-slate-950 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-800"
      >
        <div className="text-center text-slate-500">
          <p>&copy; 2026 Marco Perez. All rights reserved.</p>
        </div>
      </motion.footer>
    </section>
  );
}
