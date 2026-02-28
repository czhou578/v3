// LazyLoad.js
import React, { useEffect, useRef, useState, FC } from "react";

interface MyComponentProps {
  children: React.ReactNode;
}

const LazyLoad: FC<MyComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="min-h-[200px] z-[0] relative h-full">
      <div
        className={`transition-all duration-1000 ease-out z-[0] relative h-full flex flex-col ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LazyLoad;
