import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import TextRotator from '../components/TextRotator';
import TechStack from '../components/TechStack';
import GitHubGraph from '../components/GitHubGraph';
import collabImage from '../assests/images/Codecollab-demo.png';

export default function Home() {
  const rotatingTexts = ['Full Stack Developer', 'Competitive Programmer', 'Exploring Web3 & Crypto'];

  const featuredProject = {
    id: 1,
    slug: 'Code-Collab',
    title: 'Code-Collabrator Platform',
    description: 'A real-time collaborative code editor where teams can write, edit, and debug code together. Perfect for pair programming, code reviews, and remote collaboration.',
    image: collabImage,
    tags: ['React', 'Node.js', 'Supabase', 'Typscript', 'Tailwind CSS','WebRTC','Framer Motion','Monaco Editor'],
    github: 'https://github.com/keshav-const/inkwell-code',
    live: 'https://code-collab-gold.vercel.app/',
  };

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

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Project</h2>

            <div className="max-w-4xl w-full">
            <div className="group">
              <div className="relative bg-gradient-to-b from-white/5 to-transparent rounded-t-xl p-4 border border-white/10 border-b-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 h-6 bg-white/5 rounded px-3 text-xs text-gray-500 flex items-center">
                    {featuredProject.live}
                  </div>
                </div>

                <div className="relative aspect-video bg-white/5 rounded overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={featuredProject.github}
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
                <h3 className="text-2xl font-bold text-white mb-3">{featuredProject.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/work/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GitHubGraph />

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
