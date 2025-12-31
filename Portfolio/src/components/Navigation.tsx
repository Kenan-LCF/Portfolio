interface NavLink {
  href: string;
  label: string;
}

const Navigation = () => {
  const navLinks: NavLink[] = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#projets', label: 'Projets' },
    { href: '#competances', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-24 bg-black opacity-95 text-gray-500 px-6 py-4 z-50 shadow-lg border-b border-gray-500">

      <div className="container mx-auto flex items-center relative h-full">


        <a href="#hero" className="text-xl font-bold hover:text-white transition absolute left-0">

          Kenan LCF
        </a>

        <ul className="flex gap-24 mx-auto text-lg">

          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        feature for change language
      </div>
    </nav>
  );
};

export default Navigation;