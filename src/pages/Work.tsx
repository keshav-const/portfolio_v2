import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import collabImage from '../assests/images/Codecollab-demo.png'
import portfoliodemo from '../assests/images/Portfolio-demo.png'
import photogramdemo from '../assests/images/Photogram-demo.png'
import SkillSwapdemo from '../assests/images/SkillSwap-demo.png'
export default function Work() {
  const projects = [
    {
      id: 1,
    slug: 'Code-Collab',
    title: 'Code-Collabrator Platform',
    description: 'A real-time collaborative code editor where teams can write, edit, and debug code together. Perfect for pair programming, code reviews, and remote collaboration.',
    image: collabImage,
    tags: ['React', 'Node.js', 'Supabase', 'Typscript', 'Tailwind CSS','WebRTC','Framer Motion','Monaco Editor'],
    github: 'https://github.com/keshav-const/inkwell-code',
    live: 'https://code-collab-gold.vercel.app/',
    },
     {
      id: 3,
      slug: 'Photogram',
      title: 'Photogram',
      description: 'Instagram-style social platform built with the MERN stack. It allows users to share photos, follow other creators, and engage with content through likes and comments.',
      image: photogramdemo,
      tags: ['React', 'Node.js', 'Express', 'MongoDB','Typescript'],
      github: 'https://github.com/keshav-const/Photogram',
      live: 'https://photogram-frontend-pnd9.vercel.app',
    },
    {
      id: 2,
      slug: 'Portfolio-generator',
      title: 'Portfolio-Generator',
      description: 'Web app that creates a personalized portfolio website based on user-inputted details and templates. It streamlines the process of building and customizing a professional online presence.',
      image: portfoliodemo,
      tags: ['Reactjs', 'Tailwind CSS', 'Nodejs', 'Expressjs', 'Framer Motion'],
      github: 'https://github.com/keshav-const/Portfolio_generator_1',
      live: 'https://portfolio-generator-1.vercel.app/',
    },
   
    {
      id: 4,
      slug: 'skill swap',
      title: 'Skill Swap-P2P Skill Exchange Platform',
      description: 'A  full-stack, community-driven application where users can offer their skills and connect with others to facilitate a peer-to-peer knowledge exchange.',
      image: SkillSwapdemo,
      tags: ['React','Tailwind CSS','Node.js','Express', 'TypeScript', 'PostgreSql'],
      github: 'https://github.com/keshav-const/SkillSwap',
      live:'https://github.com/keshav-const/SkillSwap'
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
