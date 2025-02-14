import { useState, useEffect } from 'react';

interface MousePosition {
  mouseX: number;
  mouseY: number;
}

export function useMousePosition(smoothing = 0.1): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ mouseX: 0, mouseY: 0 });

  useEffect(() => {
    let frame: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    function updateMouse(e: MouseEvent) {
      // Convert mouse position to normalized values between -1 and 1
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    }

    function updatePosition() {
      // Apply smoothing using lerp (linear interpolation)
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      setPosition({ mouseX: currentX, mouseY: currentY });
      frame = requestAnimationFrame(updatePosition);
    }

    window.addEventListener('mousemove', updateMouse);
    frame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      cancelAnimationFrame(frame);
    };
  }, [smoothing]);

  return position;
}