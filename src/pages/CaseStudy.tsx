import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  const projects: Record<string, any> = {
    'ecommerce-platform': {
      title: 'E-Commerce Platform',
      overview: 'A comprehensive e-commerce solution built with modern web technologies.',
      problem: 'Traditional e-commerce platforms lack real-time inventory management and seamless payment integration.',
      solution: 'Built a full-stack solution using React for the frontend and Node.js for the backend, with MongoDB for data persistence and Stripe for payment processing.',
      features: [
        'Real-time inventory tracking',
        'Secure payment processing with Stripe',
        'Admin dashboard with analytics',
        'Customer authentication and profiles',
        'Order management system',
        'Email notifications',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
      results: '50% improvement in order processing time and 30% increase in customer satisfaction.',
    },
    'ai-content-generator': {
      title: 'AI Content Generator',
      overview: 'Machine learning powered platform for generating high-quality content.',
      problem: 'Content creators spend hours crafting articles and marketing copy.',
      solution: 'Developed an AI-powered tool using advanced NLP models and custom training pipelines to generate contextually relevant content.',
      features: [
        'Multiple content types support',
        'Custom training on brand voice',
        'Real-time generation',
        'Content optimization suggestions',
        'Multi-language support',
        'API for third-party integration',
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'PostgreSQL'],
      results: '80% reduction in content creation time with 95% user satisfaction rate.',
    },
    'social-media-dashboard': {
      title: 'Social Media Dashboard',
      overview: 'Unified analytics dashboard for managing multiple social media platforms.',
      problem: 'Managing multiple social media accounts requires switching between platforms.',
      solution: 'Created a centralized dashboard that aggregates data from multiple platforms with real-time analytics and automated reporting.',
      features: [
        'Multi-platform integration',
        'Real-time analytics',
        'Automated reporting',
        'Custom dashboard widgets',
        'Team collaboration tools',
        'Scheduled posting',
      ],
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL', 'Redis'],
      results: '60% time savings for social media managers and improved engagement metrics.',
    },
    'task-management-system': {
      title: 'Task Management System',
      overview: 'Collaborative task management tool with advanced project tracking.',
      problem: 'Teams struggle with task coordination and project visibility.',
      solution: 'Built a real-time collaboration platform with intuitive project tracking and team management features.',
      features: [
        'Real-time task updates',
        'Team collaboration features',
        'Project timeline visualization',
        'File sharing',
        'Custom workflows',
        'Mobile app support',
      ],
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'WebSockets'],
      results: '40% increase in team productivity and 70% improvement in project delivery times.',
    },
  };

  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen py-32 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/work" className="text-white hover:text-gray-300 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">{project.title}</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 text-white rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Results</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{project.results}</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
