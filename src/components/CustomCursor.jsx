import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return undefined;

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsActive(true);
    };

    const onLeave = () => setIsActive(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 bg-primary/10 blur-[0.2px] transition-opacity duration-200 md:block"
      style={{
        left: position.x,
        top: position.y,
        opacity: isActive ? 1 : 0,
      }}
    />
  );
}

export default CustomCursor;
