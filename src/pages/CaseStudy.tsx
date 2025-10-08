import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  const projects: Record<string, any> = {
    'Code-Collab': {
    title: 'Code-Collab',
    overview: 'A real-time collaborative code editor designed for pair programming, technical interviews, and remote learning, allowing multiple users to code together simultaneously.',
    problem: 'Developers, interviewers, and educators often lack a simple, integrated platform for real-time code collaboration. Setting up shared environments can be cumbersome and existing tools may lack essential features like live code execution.',
    solution: 'Built a web-based application using React, Node.js, and WebSockets (Socket.io) to provide a seamless, real-time code editing experience. Users can instantly create or join rooms to code together, with changes reflected on all collaborators\' screens immediately.',
    features: [
      'Real-time collaborative code editing with multi-cursor support',
      'Syntax highlighting for multiple programming languages (C++, Java, JS, Python)',
      'Live code execution in the browser using the Judge0 API',
      'Room management system to create and join sessions with unique IDs',
      'Live tracking of active users in a collaborative session',
      'Responsive design for use on various devices',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'Socket.io', 'CodeMirror', 'Tailwind CSS', 'Judge0 API','Monaco Editor','Framer Motion'],
    results: 'Created an intuitive, low-latency platform that streamlines remote technical collaboration, making pair programming and interviews more efficient and accessible without complex setup.',
  },
    'Photogram': {
    title: 'Photogram',
    overview: 'A full-stack social media web application inspired by Instagram, where users can share photos, follow other users, and engage with content through likes and comments.',
    problem: 'Creating a social media platform requires handling complex features like secure user authentication, efficient image storage, and real-time social interactions like following, liking, and commenting.',
    solution: 'Built a complete MERN stack application with a RESTful API backend to manage users, posts, and interactions. The frontend was developed using React and Redux for state management, while Cloudinary was integrated for scalable cloud-based image hosting.',
    features: [
      'Secure user authentication and authorization using JWT',
      'Full CRUD (Create, Read, Update, Delete) functionality for posts',
      'Cloud-based image uploads and management via Cloudinary',
      'Social engagement features: like/unlike posts and add/delete comments',
      'Follow/unfollow system to create a personalized content feed',
      'User profile pages displaying post history, followers, and following counts',
      'Responsive UI built with Tailwind CSS for a seamless mobile and desktop experience',
    ],
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    results: 'Successfully engineered a feature-complete Instagram clone, demonstrating proficiency in full-stack development, REST API design, global state management, and third-party API integration.',
  },
    'Portfolio-generator': {
    title: 'Portfolio Generator',
    overview: 'A no-code web application that empowers users to create, preview, and download a professional, single-page developer portfolio simply by filling out a guided, multi-step form.',
    problem: 'Many developers need a personal website to showcase their work but often lack the time or design expertise to build a polished portfolio from scratch. The process can be repetitive and time-consuming.',
    solution: 'Developed a client-side application using Next.js that captures user information through an intuitive interface. The app then dynamically generates the complete source code (HTML, CSS, JS) for a modern, responsive portfolio website, which can be downloaded instantly.',
    features: [
      'User-friendly multi-step form for all portfolio sections (About, Skills, Experience, Projects).',
      'Dynamic generation of a complete, ready-to-deploy portfolio website.',
      'One-click download of the full source code packaged in a ZIP file.',
      'Robust form state management and validation using React Hook Form and Zod.',
      'Modern and clean user interface built with Tailwind CSS and Shadcn/ui.',
      'Shareable link functionality to show the generated portfolio to others.',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn/ui', 'React Hook Form', 'Zod', 'JSZip', 'FileSaver.js'],
    results: 'Created a highly practical tool that automates the portfolio-building process, enabling developers to generate a personalized and professional website in minutes without writing any code.',
  },
    'SkillSwap': {
    title: 'SkillSwap',
    overview: 'A full-stack, community-driven platform where users can barter their skills. It connects individuals who want to teach a skill in exchange for learning another, fostering a peer-to-peer learning environment.',
    problem: 'Learning new skills can be expensive, and finding the right mentor is challenging. At the same time, skilled individuals often lack a simple way to share their expertise outside of traditional teaching or freelance platforms.',
    solution: 'Developed a MERN stack application with real-time features using Socket.io. The platform allows users to create profiles listing skills they offer and seek, then facilitates connections through a secure proposal and messaging system to arrange skill exchanges.',
    features: [
      'Secure JWT-based user authentication and detailed profile management',
      'A searchable marketplace to discover skills and potential learning partners',
      'End-to-end proposal system to send, receive, and manage skill swap requests',
      'Integrated real-time chat for users to communicate and arrange sessions',
      'Live notifications for new proposals and messages using WebSockets',
      'A two-way review and rating system to build community trust and credibility',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT', 'Tailwind CSS'],
    results: 'Created a fully functional platform that empowers community-based learning and skill sharing. The project showcases a strong command of building complex, real-time, full-stack applications with secure and interactive user experiences.',
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
