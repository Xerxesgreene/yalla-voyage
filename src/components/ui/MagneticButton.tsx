'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.2);
    y.set((e.clientY - cy) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = 'inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer font-sans';
  const variants = {
    primary: 'bg-[#2E6B57] text-[#F4EFE6] hover:bg-[#39C27D] hover:text-[#0F2E23] shadow-md',
    secondary: 'bg-[#13382B] text-[#F4EFE6] hover:bg-[#2E6B57] border border-[#2E6B57]/50 shadow-sm',
    outline: 'border border-[#2E6B57] text-[#0F2E23] hover:bg-[#2E6B57] hover:text-[#F4EFE6] backdrop-blur-sm shadow-xs',
  };

  const inner = (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        className="inline-block"
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
      >
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {inner}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      <button type="button" onClick={onClick}>
        {inner}
      </button>
    </motion.div>
  );
}
