import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Work() {
  const projects = [
    {
      id: 1,
      slug: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      slug: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Machine learning powered platform for generating high-quality content using advanced NLP models and custom training pipelines.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      slug: 'social-media-dashboard',
      title: 'Social Media Dashboard',
      description: 'Unified analytics dashboard for managing multiple social media accounts with real-time metrics and automated reporting.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      slug: 'task-management-system',
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and advanced project tracking.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">My Work</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          A collection of projects showcasing my expertise in full-stack development,
          from complex web applications to innovative digital solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative bg-gradient-to-b from-white/5 to-transparent rounded-t-xl p-4 border border-white/10 border-b-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 h-6 bg-white/5 rounded px-3 text-xs text-gray-500 flex items-center">
                    {project.live}
                  </div>
                </div>

                <div className="relative aspect-video bg-white/5 rounded overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-b-xl p-6 border border-white/10 border-t-0">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
