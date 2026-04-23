import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2"
        >
          Sobre mí
        </motion.h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-gray-300 leading-relaxed"
          >
            <p>
              Durante más de 15 años trabajé como operario de producción en el sector industrial.
              Un trabajo que me enseñó disciplina, precisión y la importancia de los procesos —
              valores que hoy aplico directamente en el desarrollo de software.
            </p>
            <p>
              Hace algunos años descubrí la programación de forma autodidacta. Sin cursos formales,
              sin bootcamps — solo con dedicación, tutoriales y muchas horas de práctica.
              Aprendí JavaScript, React y las herramientas modernas del frontend construyendo
              proyectos reales desde cero.
            </p>
            <p>
              Hoy busco dar el salto profesional al mundo del desarrollo web, aportando no solo
              conocimiento técnico sino también la madurez y el compromiso que da la experiencia de vida.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              { title: "Autodidacta", desc: "Todo lo que sé lo aprendí solo, construyendo proyectos reales y resolviendo problemas concretos." },
              { title: "Experiencia industrial", desc: "Más de 15 años en producción me dieron disciplina, atención al detalle y mentalidad de mejora continua." },
              { title: "Orientado a resultados", desc: "Me enfoco en construir cosas que funcionen, que se vean bien y que resuelvan problemas reales." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-5 border border-gray-700"
              >
                <p className="text-yellow-400 font-bold text-lg mb-1">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About