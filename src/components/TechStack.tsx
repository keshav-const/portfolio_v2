export default function TechStack() {
  const row1Tech = [
    'TypeScript', 'JavaScript', 'C++', 'React', 'Next.js',
    'Node.js', 'Express.js', 'Hono', 'PostgreSQL'
  ];

  const row2Tech = [
    'Prisma', 'MongoDB', 'Tailwind CSS', 'Cloudflare',
    'Git', 'GitHub', 'Bash', 'Linux'
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
            {[...row1Tech, ...row1Tech, ...row1Tech].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all inline-block"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
            {[...row2Tech, ...row2Tech, ...row2Tech].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all inline-block"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
