import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-2xl font-bold text-center mb-5">
          ¿Quieres aprender más?<br />↓
        </h2>
        <h3 className="text-4xl sm:text-4xl font-bold text-center mb-8">
          ÚNETE A NUESTRA COMUNIDAD DE{" "}
          <span className="text-green-600">CULTIVADORES</span>
        </h3>
        <div className="my-8 text-center">
          <a
            href="https://wa.me/tu_numero"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Únete a nuestro grupo de WhatsApp
          </a>
        </div>

        <div className="bg-black rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0">

            <div className="w-max md:w-fit md:mr-9 flex justify-center md:p-4">
              <img
                src="public/images/logo3.png" alt="Inka Fungi Logo"
                width={230}
                height={200}
                className="mb-4"
              /></div>
            <div className="md:w-1/3">

              <p className="text-white text-lg mb-4 text-center md:text-left">
                Formar parte de Inka Fungi no es solo adquirir productos de
                calidad, también es sumarse a una comunidad apasionada por el
                cultivo de setas.
              </p>
              <p className="text-white text-lg text-center md:text-left">
                Comparte tus experiencias, resuelve dudas y recibe contenido
                exclusivo en nuestro{" "}
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <img
                src="public\images\materialInstructivo.png"
                alt="Instructional Materials"
                width={300}
                height={200}
                className="rounded-lg"
              />

            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/tu_numero"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Únete a nuestro grupo de WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;
