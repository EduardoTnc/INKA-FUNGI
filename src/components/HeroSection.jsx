import React from 'react'

const HeroSection = () => {

  const heroCards = [
    {
      id: 1,
      icon: '/images/inmunidad.png',
      description: 'Fortalece tu sistema inmunológico y mejora tu bienestar con cada bocado.'
    },
    {
      id: 2,
      icon: '/images/dieta.png',
      description: 'Ideal para mantener un estilo de vida balanceado sin renunciar al sabor.'
    },
    {
      id: 3,
      icon: '/images/sombrero-de-cocinero.png',
      description: 'Simplifica tus comidas diarias con un toque gourmet que cualquier persona puede lograr.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      <img
        src="/images/background-hero2.webp"
        alt="Background"
        className="absolute inset-0 z-0 opacity-50 w-full h-full object-cover blur-sm"
      />

      <div className="relative z-10">

        <header className="container mx-auto flex items-center justify-between p-4 2xl:px-20">
          <img src="/images/logo.png" alt="InkaFungi Logo" width={100} height={100} />
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-12 lg:gap-20 font-averia text-lg">
              <li><a href="/" className="hover:text-gray-300">INICIO</a></li>
              <li><a href="/contacto" className="hover:text-gray-300">CONTACTO</a></li>
              <li><a href="/ubicacion" className="hover:text-gray-300">UBICACIÓN</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 2xl:px-20">
          <div className="md:w-1/2  space-y-6">
            <h1 className="font-averia text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              MEJORA TU BIENESTAR CON LOS HONGOS MÁS <span className='underline decoration-green-600'>SALUDABLES</span> Y <span className="underline decoration-orange-500">DELICIOSOS</span>
            </h1>
            <a href="https://wa.link/nuuokl" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 hover:pe-10 ">
              Visítanos en Instagram →
            </a>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/images/grupo-setas-ostra 1.png" alt="Oyster Mushrooms" width={600} height={400} className='xl:ml-8' />
          </div>
        </main>

        <section className="container mx-auto py-8 px-4 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
            {heroCards.map((item) => (

              <div key={item.id} className="bg-[#ffffff1a] backdrop-blur-md rounded-lg p-3 flex items-center space-x-4 shadow-md">
                <img src={`${item.icon}`} alt={`Icon ${item.id}`} width={50} height={50} />
                <p className="text-slate-200 text-sm text-pretty font-poppins">
                  {item.description}
                </p>
              </div>

            ))}
          </div>
        </section>

        <footer className="container mx-auto text-center py-8 px-4 ">
          <p className="text-md">
            Descubre los beneficios ocultos de los hongos ostra para tu salud.
          </p>
          
            ↓ 
          
        </footer>
        
      </div>
    </div>
  )
}

export default HeroSection