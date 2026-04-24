import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const SERVICE_ID = `service_zdg8iue`
const TEMPLATE_ID = `template_r1kvz3g`
const PUBLIC_KEY = `pAkjBUopP05awp8wS`

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async() => {
    setLoading(true)
    setStatus(null)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    }catch (error) {
      console.log(error)
      setStatus('error')
    }finally{
      setLoading(false)
    }
  }

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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form 
              ref={formRef}
              className="flex flex-col gap-4" 
            >
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors"
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Tu mensaje"
                className="bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors resize-none"
              />
              {
                status === 'success' && (
                <p className="text-green-400 text-sm">✅ Mensaje enviado correctamente.</p>
              )}
              {
                status === "error" && (
                <p className="text-red-400 text-sm">❌ Hubo un error, intentá de nuevo.</p>
              )}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact