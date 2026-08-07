import React, { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Starfield particles
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.005 + 0.002
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep Cosmic Sky Base
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGrad.addColorStop(0, '#030712');
      skyGrad.addColorStop(0.5, '#061523');
      skyGrad.addColorStop(1, '#092136');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Twinkling Stars
      stars.forEach(star => {
        star.alpha += Math.sin(time * star.speed * 100) * 0.01;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(0.9, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 3D Northern Lights (Aurora Waves)
      const auroras = [
        { colorStart: 'rgba(42, 157, 143, 0.45)', colorMid: 'rgba(60, 190, 181, 0.3)', colorEnd: 'transparent', yOffset: canvas.height * 0.35, freq: 0.002, amp: 90, speed: 1.2 },
        { colorStart: 'rgba(43, 158, 179, 0.4)', colorMid: 'rgba(125, 216, 192, 0.25)', colorEnd: 'transparent', yOffset: canvas.height * 0.45, freq: 0.003, amp: 110, speed: 0.9 },
        { colorStart: 'rgba(147, 51, 234, 0.35)', colorMid: 'rgba(42, 157, 143, 0.2)', colorEnd: 'transparent', yOffset: canvas.height * 0.55, freq: 0.0025, amp: 85, speed: 1.5 }
      ];

      auroras.forEach(aurora => {
        ctx.save();
        ctx.beginPath();

        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 15) {
          const y = aurora.yOffset +
            Math.sin(x * aurora.freq + time * aurora.speed) * aurora.amp +
            Math.sin(x * 0.001 + time * 0.5) * 40;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, aurora.yOffset - 100, 0, canvas.height);
        grad.addColorStop(0, aurora.colorStart);
        grad.addColorStop(0.5, aurora.colorMid);
        grad.addColorStop(1, aurora.colorEnd);

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
