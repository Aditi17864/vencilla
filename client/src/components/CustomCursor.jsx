import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with hover capabilities
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });
      }

      if (ringRef.current) {
        gsap.to(ringRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    };

    const handleMouseOver = (e) => {
      if (!e.target || typeof e.target.tagName !== 'string') return;
      const target = e.target;
      const isInteractive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        (target.closest && (target.closest('a') || target.closest('button'))) ||
        (typeof target.hasAttribute === 'function' && target.hasAttribute('data-cursor-hover'));

      if (isInteractive) {
        setIsHovering(true);
        if (ringRef.current) {
          gsap.to(ringRef.current, {
            scale: 1.5,
            opacity: 0.5,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      if (ringRef.current) {
        gsap.to(ringRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  const dotStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '8px',
    height: '8px',
    backgroundColor: '#C9A24B',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)'
  };

  const ringStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '36px',
    height: '36px',
    border: '1px solid #C9A24B',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box'
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
};

export default CustomCursor;
