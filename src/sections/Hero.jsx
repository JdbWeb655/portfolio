import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-yellow-400 font-medium"
          >
            👋 Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Jorge <br /> Baigorria
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl text-gray-400 font-medium"
          >
            React Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 max-w-md leading-relaxed"
          >
            Autodidacta apasionado por el frontend. Construyo interfaces modernas con React y Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 mt-2"
          >
            
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-64 h-64 rounded-full bg-gray-800 border-4 border-yellow-400 flex items-center justify-center overflow-hidden"
        >
          <img src="/notion-avatar-ai-yo.png" alt="Jorge Baigorria" className="w-full h-full object-cover" />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero