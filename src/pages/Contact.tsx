import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Let's Talk</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Have a project in mind or just want to chat about technology?
          I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>your.email@example.com</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Connect with Me</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all text-gray-300 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all text-gray-300 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all text-gray-300 hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Available for Work</h3>
              <p className="text-gray-400">
                I'm currently open to new opportunities and interesting projects.
                Let's build something amazing together!
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
