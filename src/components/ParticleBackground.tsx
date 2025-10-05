import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    const createStars = () => {
      const starCount = 800;
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width - centerX(),
          y: Math.random() * canvas.height - centerY(),
          z: Math.random() * canvas.width,
          size: Math.random() * 2,
        });
      }
    };

    const updateStars = (speed: number) => {
      const stars = starsRef.current;
      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - centerX();
          star.y = Math.random() * canvas.height - centerY();
          star.z = canvas.width;
        }
      });
    };

    const drawStars = () => {
      const stars = starsRef.current;
      const cx = centerX();
      const cy = centerY();

      stars.forEach((star) => {
        const x = (star.x / star.z) * canvas.width + cx;
        const y = (star.y / star.z) * canvas.height + cy;
        const size = (1 - star.z / canvas.width) * star.size * 2;
        const opacity = Math.min(1 - star.z / canvas.width, 1);

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();

          const px = (star.x / (star.z + 5)) * canvas.width + cx;
          const py = (star.y / (star.z + 5)) * canvas.height + cy;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.lineWidth = size / 2;
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateStars(3);
      drawStars();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#000000' }}
    />
  );
}
