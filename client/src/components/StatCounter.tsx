import { useEffect, useState } from "react";

interface StatCounterProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export default function StatCounter({ label, value, suffix = "", prefix = "" }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}
