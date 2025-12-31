const Navigation = () => {
  return (
   <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-md text-gray-700 px-6 py-4 z-50 shadow-lg">
  <div className="container mx-auto flex items-center relative">
    
    <a href="#hero" className="text-2xl font-bold hover:text-white transition absolute left-0">
      Kenan LCF
    </a>
    
    <ul className="flex gap-24 mx-auto text-xl">
      <li>
        <a href="#accueil" className="hover:text-white transition">
          Accueil
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-white transition">
          À propos
        </a>
      </li>
      <li>
        <a href="#parcours" className="hover:text-white transition">
          Parcours
        </a>
      </li>
      <li>
        <a href="#projets" className="hover:text-white transition">
          Projets
        </a>
      </li>
      <li>
        <a href="#competances" className="hover:text-white transition">
          Competances
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navigation