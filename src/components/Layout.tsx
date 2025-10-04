import { ReactNode } from 'react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import RocketTransition from './RocketTransition';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col cursor-none">
      <ParticleBackground />
      <CustomCursor />
      <RocketTransition />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
