import { Download, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-16">About Me</h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 rounded-full blur-2xl opacity-10 animate-pulse" />
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/30"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience
                  building modern web applications. My journey in tech began with a curiosity
                  about how things work, which quickly evolved into a deep love for creating
                  digital solutions that make a real impact.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with startups and
                  established companies, helping them bring their visions to life through
                  elegant code and thoughtful design. I specialize in React, Node.js, and
                  modern web technologies, always staying current with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring Web3 technologies, contributing
                  to open-source projects, or sharing my knowledge through technical writing
                  and mentoring aspiring developers.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">My Philosophy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I believe that great software is not just about writing code—it's about
                  solving real problems and creating exceptional user experiences. Every
                  line of code should serve a purpose, and every feature should add value.
                </p>
                <p>
                  My approach combines technical excellence with creative thinking. I'm
                  constantly learning, experimenting, and pushing the boundaries of what's
                  possible on the web. Clean code, scalable architecture, and attention to
                  detail are at the core of everything I build.
                </p>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
