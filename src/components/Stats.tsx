import { useEffect, useState, useRef } from "react";
import { Briefcase, Award, Users, Code } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { icon: <Code className="h-8 w-8" />, value: 50, suffix: "+", label: "Projects Completed" },
    { icon: <Briefcase className="h-8 w-8" />, value: 5, suffix: "+", label: "Years Experience" },
    { icon: <Award className="h-8 w-8" />, value: 15, suffix: "", label: "Certifications" },
    { icon: <Users className="h-8 w-8" />, value: 30, suffix: "+", label: "Happy Clients" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 bg-[hsl(var(--stats-bg))]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: StatItem;
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="bg-card rounded-xl p-8 text-center card-hover border border-border">
      <div className="flex justify-center mb-4 text-primary">
        {stat.icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </div>
  );
};

export default Stats;
