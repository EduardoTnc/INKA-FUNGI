// src/components/RevealAnimation.jsx

import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealAnimation = () => {
  useEffect(() => {
    // Seleccionar todos los elementos con la clase 'reveal-type'
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((element) => {
      // Dividir el texto en caracteres
      const split = new SplitType(element, { types: 'words' });

      // Crear la animación con GSAP
      gsap.from(split.words, {
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false, // Cambia a true para ver los marcadores de ScrollTrigger
          scroller: 'body', // Asegura que ScrollTrigger use el scroller correcto
          toggleActions: 'play none none reverse',
        },
        opacity: 0.2,
        stagger: 0.05, // Ajusta el tiempo entre caracteres
      });
    });

    // Limpieza al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null; // Este componente no renderiza nada en el DOM
};

export default RevealAnimation;
