import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
