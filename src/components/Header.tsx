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
      <div
        className="fixed top-0 left-0 right-0 h-24 sm:h-20 md:h-20 z-40 max-md:top-auto max-md:bottom-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />
      </div>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-md:top-auto max-md:bottom-4">
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-xl bg-black/80 border border-white/20 shadow-2xl">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
            aria-label="Home"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            );
          })}

          <a
            href="https://drive.google.com/file/d/1wQfUCEg29_OuabomgEDc13tQBcPLXyio/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white text-black rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </nav>
      </header>
    </>
  );
}
