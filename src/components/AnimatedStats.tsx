"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Globe2, ShieldCheck, Users } from "lucide-react";

const stats = [
  { end: 65, suffix: "+", label: "Years of craft", icon: Award },
  { end: 40, suffix: "+", label: "Countries served", icon: Globe2 },
  { end: 500, suffix: "+", label: "Product varieties", icon: ShieldCheck },
  { end: 1000, suffix: "+", label: "Global partners", icon: Users },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  end,
  suffix,
  label,
  icon: Icon,
  delay,
  visible,
}: {
  end: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
  visible: boolean;
}) {
  const count = useCountUp(end, 2000, visible);

  return (
    <div
      className="stat-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
      }}
    >
      <div className="stat-icon-wrap">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section className="stats-strip" ref={ref}>
      <div className="page-wrap stats-grid">
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            delay={i * 0.15}
            visible={mounted && visible}
          />
        ))}
      </div>
    </section>
  );
}
