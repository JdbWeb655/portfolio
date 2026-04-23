import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2"
        >
          Contacto
        </motion.h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-400 leading-relaxed">
              Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para charlar sobre desarrollo web. ¡No dudes en escribirme!
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: "mdi:email", href: "mailto:jbaigorria0@gmail.com", label: "jbaigorria0@gmail.com" },
                { icon: "logos:github-icon", href: "https://github.com/JdbWeb655", label: "github.com/JdbWeb655" },
                { icon: "logos:linkedin-icon", href: "https://linkedin.com/in/jorge-baigorria-b4905411a", label: "linkedin.com/in/jorge-baigorria" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Icon icon={item.icon} className="w-6 h-6 text-yellow-400" />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
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
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact