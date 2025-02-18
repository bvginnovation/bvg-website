import { useEffect, useState } from "react";

export const useCountUp = (endValue: any, duration = 3000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp: number | null | any = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [endValue, duration]);

  return count;
};
