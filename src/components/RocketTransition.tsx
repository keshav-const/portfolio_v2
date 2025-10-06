import { useEffect, useState } from 'react';

export default function RocketTransition() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [rocketPosition, setRocketPosition] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);
  const [showBlackCurtain, setShowBlackCurtain] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('rocketAnimationShown');

    if (hasSeenAnimation) {
      setIsAnimating(false);
      return;
    }

    sessionStorage.setItem('rocketAnimationShown', 'true');

    const totalDuration = 2500;
    const rocketDuration = 1800;
    const blurFadeDuration = 700;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rocketProgress = Math.min(elapsed / rocketDuration, 1);

      const easeOutCubic = 1 - Math.pow(1 - rocketProgress, 3);
      setRocketPosition(easeOutCubic * 110);

      if (rocketProgress < 1) {
        setBlurAmount(rocketProgress * 20);
        setShowBlackCurtain(true);
      } else {
        setShowBlackCurtain(false);

        const blurFadeProgress = Math.min((elapsed - rocketDuration) / blurFadeDuration, 1);
        const easeOutBlur = 1 - Math.pow(1 - blurFadeProgress, 2);
        setBlurAmount(20 * (1 - easeOutBlur));
      }

      if (elapsed < totalDuration) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setBlurAmount(0);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setIsAnimating(false);
    };
  }, []);

  if (!isAnimating) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          transition: showBlackCurtain ? 'none' : 'backdrop-filter 0.3s ease-out',
        }}
      />

      <div className="fixed inset-0 z-[9999] pointer-events-none">
        {showBlackCurtain && (
          <div
            className="absolute inset-0 bg-black"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% ${100 - rocketPosition}%, 0 ${100 - rocketPosition}%)`,
              transition: 'none',
            }}
          />
        )}

        <div
          className="absolute left-1/2"
          style={{
            bottom: `${rocketPosition}%`,
            transform: 'translateX(-50%) translateY(50%)',
            opacity: rocketPosition > 105 ? 0 : 1,
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <svg
            className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
              </filter>
            </defs>

            <g filter="url(#shadow)">
              <path
                d="M50 5 L60 30 L75 35 L60 40 L55 55 L50 40 L45 55 L40 40 L25 35 L40 30 Z"
                fill="url(#rocketGradient)"
                stroke="#cccccc"
                strokeWidth="1"
              />

              <ellipse cx="50" cy="45" rx="15" ry="22" fill="url(#rocketGradient)" />

              <circle cx="50" cy="38" r="7" fill="#1a1a1a" stroke="#666" strokeWidth="1" />

              <rect x="33" y="62" width="11" height="16" rx="2" fill="url(#rocketGradient)" stroke="#cccccc" strokeWidth="0.5" />
              <rect x="56" y="62" width="11" height="16" rx="2" fill="url(#rocketGradient)" stroke="#cccccc" strokeWidth="0.5" />

              <path d="M28 78 L33 98 L38 78 Z" fill="#d0d0d0" stroke="#999" strokeWidth="0.5" />
              <path d="M72 78 L67 98 L62 78 Z" fill="#d0d0d0" stroke="#999" strokeWidth="0.5" />
              <path d="M43 78 L38 98 L50 92 L62 98 L57 78 Z" fill="#e0e0e0" stroke="#aaa" strokeWidth="0.5" />

              <g opacity={rocketPosition > 5 ? "0.8" : "0"}>
                <ellipse cx="50" cy="100" rx="8" ry="4" fill="#ff6b6b" opacity="0.6">
                  <animate attributeName="ry" values="4;6;4" dur="0.3s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="50" cy="102" rx="6" ry="3" fill="#ffd93d" opacity="0.7">
                  <animate attributeName="ry" values="3;5;3" dur="0.25s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="38" cy="98" rx="4" ry="2" fill="#ffd93d" opacity="0.5">
                  <animate attributeName="ry" values="2;3;2" dur="0.2s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="62" cy="98" rx="4" ry="2" fill="#ffd93d" opacity="0.5">
                  <animate attributeName="ry" values="2;3;2" dur="0.2s" repeatCount="indefinite" />
                </ellipse>
              </g>

              <circle cx="50" cy="35" r="2" fill="#666" opacity="0.4" />
              <circle cx="50" cy="43" r="1.5" fill="#666" opacity="0.4" />
              <rect x="48" y="50" width="4" height="8" rx="1" fill="#999" opacity="0.3" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
