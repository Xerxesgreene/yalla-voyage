'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'zoom' | 'blur' | 'fade';
  duration?: number;
}

const variants = {
  fadeUp: { opacity: 0, y: 50, scale: 1 },
  fadeLeft: { opacity: 0, x: -60, scale: 1 },
  fadeRight: { opacity: 0, x: 60, scale: 1 },
  zoom: { opacity: 0, y: 20, scale: 0.88 },
  blur: { opacity: 0, filter: 'blur(12px)', scale: 1 },
  fade: { opacity: 0, scale: 1 },
};

const targets = {
  fadeUp: { opacity: 1, y: 0, scale: 1 },
  fadeLeft: { opacity: 1, x: 0, scale: 1 },
  fadeRight: { opacity: 1, x: 0, scale: 1 },
  zoom: { opacity: 1, y: 0, scale: 1 },
  blur: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  fade: { opacity: 1, scale: 1 },
};

export default function ScrollAnimator({
  children,
  className,
  delay = 0,
  type = 'zoom',
  duration = 0.85,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, variants[type]);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        gsap.to(el, {
          ...targets[type],
          duration,
          delay: delay / 1000,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [type, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
