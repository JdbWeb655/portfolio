import { Icon } from "@iconify/react"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="bg-gray-800 border border-gray-700 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex bg-gray-700 items-center gap-2 border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    <Icon icon="logos:github-icon" className="w-4 h-4" />
                    Código
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
                    >
                      <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects