import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function RocketTransition() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [rocketPosition, setRocketPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsAnimating(true);
    setRocketPosition(0);

    const animationDuration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setRocketPosition(easeOutCubic * 100);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsAnimating(false), 100);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{
          clipPath: `polygon(0 0, 100% 0, 100% ${100 - rocketPosition}%, 0 ${100 - rocketPosition}%)`,
        }}
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 transition-all duration-100"
        style={{
          bottom: `${rocketPosition}%`,
          transform: `translateX(-50%) translateY(50%)`,
        }}
      >
        <svg
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M50 5 L60 30 L75 35 L60 40 L55 55 L50 40 L45 55 L40 40 L25 35 L40 30 Z"
              fill="white"
              stroke="white"
              strokeWidth="1"
            />

            <ellipse cx="50" cy="45" rx="15" ry="20" fill="white" opacity="0.9" />

            <circle cx="50" cy="40" r="6" fill="black" />

            <rect x="35" y="60" width="10" height="15" fill="white" opacity="0.9" />
            <rect x="55" y="60" width="10" height="15" fill="white" opacity="0.9" />

            <path
              d="M30 75 L35 95 L40 75 Z"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M70 75 L65 95 L60 75 Z"
              fill="white"
              opacity="0.7"
            />
            <path
              d="M45 75 L40 95 L50 90 L60 95 L55 75 Z"
              fill="white"
              opacity="0.8"
            />

            <g opacity={rocketPosition > 10 ? "0.6" : "0"}>
              <path
                d="M45 95 Q50 105 55 95"
                stroke="#ff6b6b"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M35 95 Q37 100 40 95"
                stroke="#ffd93d"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M60 95 Q63 100 65 95"
                stroke="#ffd93d"
                strokeWidth="2"
                fill="none"
              />
            </g>

            <circle cx="50" cy="35" r="3" fill="gray" opacity="0.5" />
            <circle cx="50" cy="45" r="2" fill="gray" opacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
