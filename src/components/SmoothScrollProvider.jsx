
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duración de la animación de scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing
      direction: 'vertical', // Dirección del scroll
      gestureDirection: 'vertical', // Dirección de gestos táctiles
      smoothWheel: true, // Scroll suave con la rueda del ratón
      smoothTouch: false, // Scroll suave con gestos táctiles (puede ajustarse)
      mouseMultiplier: 1, // Multiplicador para la rueda del ratón
      touchMultiplier: 1, // Multiplicador para gestos táctiles
      infinite: false, // Scroll infinito
    });

    // Función de Request Animation Frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrar Lenis con ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value);
        } else {
          return lenis.scroll.instance.scroll;
        }
      },
      // Si usas scroll horizontal, añade scrollLeft aquí
    });

    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.refresh();

    // Limpieza al desmontar el componente
    return () => {
      lenis.destroy();
      // Reemplaza ScrollTrigger.kill() con la forma correcta de limpiar
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
