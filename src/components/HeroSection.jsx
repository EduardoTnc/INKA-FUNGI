import React from 'react'

const HeroSection = () => {

  const heroCards = [
    {
      id: 1,
      icon: '/images/placeholder-icon-1.png',
      description: 'Fortalece tu sistema inmunológico y mejora tu bienestar con cada bocado.'
    },
    {
      id: 2,
      icon: '/images/placeholder-icon-2.png',
      description: 'Ideal para mantener un estilo de vida balanceado sin renunciar al sabor.'
    },
    {
      id: 3,
      icon: '/images/placeholder-icon-3.png',
      description: 'Simplifica tus comidas diarias con un toque gourmet que cualquier persona puede lograr.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      <img
        src="/images/image 3.png"
        alt="Background"
        className="absolute inset-0 z-0 opacity-50 w-full h-full object-cover"
      />

      <div className="relative z-10">

        <header className="container mx-auto flex items-center justify-between p-4">
          <img src="/images/logo.png" alt="InkaFungi Logo" width={100} height={100} />
          <nav>
            <ul className="flex space-x-6 font-averia">
              <li><a href="/" className="hover:text-gray-300">INICIO</a></li>
              <li><a href="/contacto" className="hover:text-gray-300">CONTACTO</a></li>
              <li><a href="/ubicacion" className="hover:text-gray-300">UBICACIÓN</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4">
          <div className="md:w-1/2  space-y-6">
            <h1 className="font-averia text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              MEJORA TU BIENESTAR CON LOS HONGOS MÁS SALUDABLES Y DELICIOSOS
            </h1>
            <a href="/beneficios" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Descubre sus beneficios →
            </a>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/images/grupo-setas-ostra 1.png" alt="Oyster Mushrooms" width={600} height={400} className='xl:ml-8' />
          </div>
        </main>

        <section className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroCards.map((item) => (
              <div key={item.id} className="bg-[#ffffff1a] backdrop-blur-md rounded-lg p-6 flex items-center space-x-4 shadow-md">
                <img src={`${item.icon}`} alt={`Icon ${item.id}`} width={50} height={50} />
                <p className="text-slate-200 text-base text-pretty font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="container mx-auto text-center py-8 px-4 ">
          <p className="text-xl">
            Descubre los beneficios ocultos de los hongos ostra para tu salud.
          </p>
          <a href="/#descubre" className="text-xl mt-4 inline-block  px-5 py-3 rounded-full hover:bg-slate-200 hover:text-gray-900 transition-colors duration-500">
            ↓ 
          </a>
        </footer>
        
      </div>
    </div>
  )
}

export default HeroSection