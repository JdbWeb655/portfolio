import { Icon } from "@iconify/react"

const skills = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "REST APIs", icon: "logos:postman-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-xl p-4 flex flex-col items-center gap-2 transition-colors"
            >
              <Icon icon={skill.icon} className="text-4xl w-10 h-10" />
              <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills