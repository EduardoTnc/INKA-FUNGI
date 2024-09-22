import React, { useEffect, useRef, useState } from 'react';
import './SetasSection.css';
import throttle from 'lodash/throttle';

const SetasSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const setas = [
    {
      id: 1,
      name: "Rosada",
      descriptions: ["La Seta Ostra Rosada, con su color vibrante y textura suave, es ideal para aquellos que buscan un toque gourmet en sus platillos, mientras que su rica composición en proteínas y antioxidantes la convierte en una opción saludable y versátil.", "Es una excelente fuente de proteínas vegetales, lo que la hace ideal para dietas balanceadas y vegetarianas. Además, es baja en calorías y grasas, proporcionando una opción saludable sin sacrificar el sabor."],
      imgSrc: "/images/seta-ostra-rosada.webp",
      color: "#B4262F",
      precios: ["------ S/. 10",
        "------ S/. 20",
        "------ S/. 30"]
    },
    {
      id: 2,
      name: "Amarilla",
      descriptions: [
        "Por su parte, la Seta Ostra Amarilla destaca por su robusto sabor y su riqueza en vitaminas del complejo B, esenciales para la energía y el bienestar general. Su capacidad para complementar cualquier receta la hace un ingrediente imprescindible en la cocina moderna.  ", "Es una fuente excepcional de vitaminas del complejo B, esenciales para el metabolismo energético y la salud del sistema nervioso. Además, contiene minerales como el hierro y el zinc, que son fundamentales para mantener una buena salud general."],
      imgSrc: "/images/seta-ostra-amarilla.webp",
      color: "#03508D",
      precios: ["------ S/. 10",
        "------ S/. 20",
        "------ S/. 30"]
    },
    {
      id: 3,
      name: "Blanca",
      descriptions: [
        "Finalmente, la Seta Ostra Blanca (Azul) aporta un toque de sofisticación con su delicado sabor y propiedades que favorecen la salud ósea y el sistema inmunológico. Cada seta es perfecta para una variedad de preparaciones, elevando tus comidas a nuevas alturas culinarias.", "Esta seta es rica en nutrientes esenciales como la vitamina D, que es crucial para la salud ósea, y en fibra dietética, que favorece una digestión saludable. Además, su bajo contenido calórico la convierte en una opción ideal para dietas equilibradas."],
      imgSrc: "/images/seta-ostra-blanca.webp",
      color: "#745137",
      precios: ["------ S/. 10",
        "------ S/. 20",
        "------ S/. 30"]
    },
  ];

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!carouselRef.current) return;
      const proportion =
        carouselRef.current.getBoundingClientRect().top / window.innerHeight;
      const index = Math.ceil(-1 * (proportion + 0.5));

      // Asegurarse de que el índice esté dentro del rango
      if (index >= 0 && index < setas.length) {
        setActiveIndex(index);
      }
    }, 100); // Ejecuta el handler al menos cada 100ms

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setas.length]);

  return (
    <div className="setas-carousel-container" id='descubre'>
      <div className="center">
        <div className="top font-averia"><p className='reveal-type'>Setas  Ostra</p><p className='text reveal-type'>Te invitamos a descubrir la magia de las setas ostra y transformar tus platos con ingrediente que benefician tu bienestar.</p></div>

        <div className="carousel" ref={carouselRef}>

          <div className="left">
            {setas.map((seta, index) => (
              <div key={seta.id} className="left-item">
                <div className="title font-averia reveal-type">{seta.name}</div>
                <div className="text font-poppins"><p className='reveal-type'>{seta.descriptions.map((description, index) => (
                  <span key={index} className="mt-4 reveal-type">{description}</span>
                ))} </p>
                </div>
                {/* <button className='mt-12  text-white p-2 rounded-2xl' type="button">Ver Más</button> */}
              </div>
            ))}
          </div>

          <div className="right">
            {setas.map((seta, index) => (
              <div
                key={seta.id}
                className={`item ${activeIndex === index ? "active" : ""}`}
              >
                <img src={seta.imgSrc} alt={seta.name} />

                <div className="text-white rounded-2xl p-2 sm:p-4 text-center xl:-mt-32 z-10 xl:self-end xl:me-48" style={{ backgroundColor: seta.color }}>
                  <p className="font-bold text-xl mb-2 ">Precios</p>
                  <p className="flex flex-col">{seta.precios.map((precio, index) => (
                    <span key={index} className="">{precio}</span>
                  ))}
                  </p>
                  <button className='mt-3 bg-slate-200 hover:bg-white text-black px-5 py-2  rounded-xl transition duration-300' type="button">Compra aquí</button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

  );
};

export default SetasSection;