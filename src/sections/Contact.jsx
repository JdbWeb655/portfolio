import { Icon } from "@iconify/react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Contacto</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 leading-relaxed">
              Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para charlar sobre desarrollo web. ¡No dudes en escribirme!
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:tuemail@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Icon icon="mdi:email" className="w-6 h-6 text-yellow-400" />
                jbaigorria0@gmail.com
              </a>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Icon icon="logos:github-icon" className="w-6 h-6" />
                github.com/JdbWeb655
              </a>
              <a
                href="https://linkedin.com/in/jorge-baigorria-b4905411a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Icon icon="logos:linkedin-icon" className="w-6 h-6" />
                linkedin.com/in/jorgeBaigorria
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tu mensaje"
              className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors resize-none"
            />
            <button
              type="button"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact