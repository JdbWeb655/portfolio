const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-yellow-400 font-bold text-xl">JB</span>
        <ul className="flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-yellow-400 transition-colors">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar