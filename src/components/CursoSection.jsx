
import React from 'react'
import { useState } from "react";

const CursoSection = () => {
  const [images] = useState([
    {
      src: "public/images/image 4.webp",
      alt: "Personas sosteniendo hongos ostra grandes",
      width: 340,
      height: 200,
    },
    {
      src: "public/images/image 6.webp",
      alt: "Invernadero de cultivo de hongos",
      width: 340,
      height: 200,
    },
    {
      src: "public/images/image 5.webp",
      alt: "Hongos ostra cosechados",
      width: 340,
      height: 200,
    },
  ]);

  return (
    <section className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 forma">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
              Aprende a <span className="text-green-700">CULTIVAR</span> tus propias ostras y descubre todo un mundo de <span className="text-green-700">OPORTUNIDADES</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              En Inka Fungi, no solo te ofrecemos los mejores hongos ostra, también queremos enseñarte a cultivarlos.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Descubre cómo transformar esta pasión en un negocio sostenible y rentable, desde la comodidad de tu hogar.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Nuestro curso te guiará paso a paso para que aprendas el arte del cultivo de setas ostra, con el potencial de generar ingresos adicionales o incluso iniciar tu propio emprendimiento.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Potenciales <span className="text-green-700">GANANCIAS</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Con una pequeña inversión en tiempo y recursos, puedes generar grandes retornos.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Empieza con una producción modesta y crece hasta convertirte en un productor a gran escala. Con nuestros métodos, podrás maximizar el rendimiento y las ventas.
            </p>
            {/* <div className="flex flex-wrap justify-between text-center">
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">124K+</p>
                <p className="text-xs sm:text-sm text-gray-500">Lorem ipsum consectetur</p>
              </div>
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">126</p>
                <p className="text-xs sm:text-sm text-gray-500">Lorem ipsum consectetur</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">78K</p>
                <p className="text-xs sm:text-sm text-gray-500">Lorem ipsum consectetur</p>
              </div>
            </div> */}
            <a href="" className="mx-auto text-center block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              Inscríbete ahora →
            </a>
          </div>
          <div className="-space-y-20 lg:mt-0 flex flex-col items-center justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CursoSection