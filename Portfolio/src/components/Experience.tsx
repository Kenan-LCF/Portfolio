interface ExperienceProps {
  name: string;
  description: string;
  date: string;
}

const Experience = () => {
  const Experiences: ExperienceProps[] = [
    {
      name: "Diplome d'état d'acompagnant éducatif et social",
      description: "Formation en 10 mois avec des stages en milieu professionnel.",
      date: "Aout 2023 - Juin 2024"
    },
    {
      name: "Acompagnant éducatif et social dans un Centre d'habitat",
      description: "Travail en milieu professionnel dans un Centre d'habitat avec personne en situation de handicap.",
      date: "Septembre 2024 - Juillet 2025"
    },
    {
      name: "Formation Développeur Web Full Stack",
      description: "Formation intensive de 6 mois axée sur le développement web full stack.",
      date: "Août 2025 - Janvier 2026"
    },
    {
      name: "Stage Développeur Web Full Stack",
      description: "Stage pratique de 3 mois en entreprise pour appliquer les compétences acquises.",
      date: "Février 2026 - Avril 2026"
    },
    {
      name: "Développeur Web Full Stack Junior",
      description: "Premier poste en tant que développeur web full stack junior dans une entreprise dynamique.",
      date: "Mai 2026 - Présent"
    }
  ];

  return (
    <div>
      <h1 className="text-5xl text-white text-center font-bold">Parcours</h1>
      <div className="mt-12 flex flex-col items-center gap-8">
        {Experiences.map((exp, index) => (
          <div key={index}>
            <CardExperience {...exp} />
            {index < Experiences.length - 1 && (
              <div className="flex justify-center mt-8">
                <Arrow turn="left" />
                <Arrow turn="down" />


              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CardExperience = ({ name, description, date }: { name: string, description: string, date: string }) => {
  return (<div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <p className="text-sm text-gray-500">{date}</p>

  </div>

  )

}

const Arrow = ({ turn }: { turn: string }) => {
  return (
    <div className="flex justify-center mt-8">
      {turn === "down" && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )}
      {turn === "up" && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      )}
      {turn === "right" && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l7-7m0 0l-7-7m7 7H3" />
        </svg>
      )}
      {turn === "left" && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l-7 7m0 0l7 7m-7-7h18" />
        </svg>
      )}
    </div>
  );
};

export default Experience;