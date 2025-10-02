import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-md:top-auto max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2">
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        <Link
          to="/"
          className={`transition-colors ${
            location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </Link>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors ${
              isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}

        <a
          href="https://drive.google.com/file/d/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
