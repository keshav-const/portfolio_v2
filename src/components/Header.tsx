import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Download } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about', icon: User },
    { name: 'Work', path: '/work', icon: Briefcase },
    { name: 'Blog', path: '/blog', icon: FileText },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-20 backdrop-blur-xl bg-black/60 border-b border-white/10 z-40 max-md:top-auto max-md:bottom-0 max-md:h-24" />

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-md:top-auto max-md:bottom-4">
        <nav className="flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur-xl bg-black/80 border border-white/30 shadow-2xl">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.name}
              </Link>
            );
          })}

          <a
            href="https://drive.google.com/file/d/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </nav>
      </header>
    </>
  );
}
