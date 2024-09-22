import React, { useEffect, useRef, useState } from 'react';
import './SetasSection.css';
import Modal from './Modal.jsx';
import throttle from 'lodash/throttle';

const SetasSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSeta, setSelectedSeta] = useState(null); // Estado para la seta seleccionada

  const handleOpenModal = (seta) => {
    setSelectedSeta(seta);
  };

  const handleCloseModal = () => {
    setSelectedSeta(null);
  }

  const setas = [
    {
      id: 1,
      name: "Ostra Rosada",
      descriptions: ["La Seta Ostra Rosada, con su color vibrante y textura suave, es ideal para aquellos que buscan un toque gourmet en sus platillos, mientras que su rica composición en proteínas y antioxidantes la convierte en una opción saludable y versátil.", "Es una excelente fuente de proteínas vegetales, lo que la hace ideal para dietas balanceadas y vegetarianas. Además, es baja en calorías y grasas, proporcionando una opción saludable sin sacrificar el sabor."],
      imgSrc: "/images/seta-ostra-rosada.webp",
      color: "#B4262F",
      precios: ["------ S/. 10",
        "------ S/. 20",
        "------ S/. 30"]
    },
    {
      id: 2,
      name: "Ostra Amarilla",
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
      name: "Ostra Blanca",
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
    }, 200); // Ejecuta el handler al menos cada 100ms

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setas.length]);

  return (
    <section className="setas-carousel-container" id='descubre'>
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
                  <div className="flex flex-col">{seta.precios.map((precio, index) => (
                    <span key={index} className="">{precio}</span>
                  ))}
                  </div>
                  <button
                    className='mt-3 bg-slate-200 hover:bg-white text-black px-5 py-2 rounded-xl transition duration-300 cursor-pointer'
                    type="button"
                    onClick={() => handleOpenModal(seta)}
                  >
                    Compra aquí
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal Única */}
      <Modal open={selectedSeta !== null} onClose={handleCloseModal}>
        {selectedSeta && (
          <div className="modal-content flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">{selectedSeta.name}</h2>
            <p className="text-center">Envíanos el pago al WhatsApp para completar tu compra.</p>
            <img className='p-4' src="images/yapeRicardo.png" alt="Yape Ricardo" width={300} height={200} />
            <a
              href={`https://wa.me/tu_numero?text=Estoy interesado/a en la Seta Ostra ${selectedSeta.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Ir a WhatsApp →
            </a>
          </div>
        )}
      </Modal>

    </section>

  );
};

export default SetasSection;