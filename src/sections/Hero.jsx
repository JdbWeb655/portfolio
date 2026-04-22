

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Jorge <br /> Baigorria
          </h1>
          <h2 className="text-2xl text-gray-400 font-medium">React Developer</h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Autodidacta apasionado por el frontend. Construyo interfaces modernas con React y Tailwind CSS.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#projects"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Ver proyectos
            </a>
            <a href="#contact"
              className="border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
          <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-yellow-400 flex items-center justify-center text-8xl">
          <img src="/notion-avatar-ai-yo.png" alt="Jorge Baigorria" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero