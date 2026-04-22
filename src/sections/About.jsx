const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Sobre mí</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
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
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <p className="text-yellow-400 font-bold text-lg mb-1">Autodidacta</p>
              <p className="text-gray-400 text-sm">Todo lo que sé lo aprendí solo, construyendo proyectos reales y resolviendo problemas concretos.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <p className="text-yellow-400 font-bold text-lg mb-1">Experiencia industrial</p>
              <p className="text-gray-400 text-sm">Más de 20 años en producción me dieron disciplina, atención al detalle y mentalidad de mejora continua.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <p className="text-yellow-400 font-bold text-lg mb-1">Orientado a resultados</p>
              <p className="text-gray-400 text-sm">Me enfoco en construir cosas que funcionen, que se vean bien y que resuelvan problemas reales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About