import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const animate = () => {
      const delay = 0.1;
      cursorX += (mouseX - cursorX) * delay;
      cursorY += (mouseY - cursorY) * delay;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`;
    };

    const handleMouseLeave = () => {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-white/30 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ left: '-16px', top: '-16px' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ left: '-3px', top: '-3px' }}
      />
    </>
  );
}
