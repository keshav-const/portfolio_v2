import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TextRotator from '../components/TextRotator';
import TechStack from '../components/TechStack';
import GitHubGraph from '../components/GitHubGraph';

export default function Home() {
  const rotatingTexts = ['Full Stack Developer', 'Competitive Programmer', 'Exploring Web3 & Crypto'];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'Machine learning powered content creation tool',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social platforms',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    },
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Hi I am Keshav,<br />
            <TextRotator texts={rotatingTexts} />
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Crafting beautiful digital experiences with modern technologies.
            Passionate about creating scalable solutions that make a difference.
          </p>
          <div className="flex gap-4">
            <Link
              to="/work"
              className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <TechStack />

      <GitHubGraph />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-16">Some of my recent work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/50 transition-all hover:shadow-xl hover:shadow-white/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Let's work together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
