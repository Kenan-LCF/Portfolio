const Portfolio = () => {
    interface Project{
        title: string;
        date: string;
    }
    const projects: Project[] = [
        { title: "Portfolio", date: "en cours" },
        { title: "e-commerce", date: "null" },
        { title: "To-do list", date: "2025-11" },
    ];
    return (
        <div className="flex justify-center pt-64">
            <div className="bg-zinc-900 border border-zinc-700 flex flex-col w-[80%] h-[710px]">
                {/* title bar */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-600 hover:bg-red-500 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-600 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-600 hover:bg-green-500 transition-colors cursor-pointer"></div>
                    </div>
                    <div>
                        <h1 className="text-xl text-white">Kénan Portfolio</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        {/* Live button */}
                        <button className="group flex items-center gap-2 border border-zinc-700 px-3 py-1 rounded hover:border-gray-500 transition-colors">
                            <div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-red-500 transition-colors"></div>
                            <h1 className="text-sm text-white">live</h1>
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    {/* column left*/}
                    <div className="w-[30%] border-r border-zinc-700 p-6 flex flex-col h-full">
                        <h1 className="text-l text-zinc-600 mb-4 text-center hover:text-zinc-400">Explorer</h1>
                        <div className="flex-1 flex flex-col">
                            <ButtonPortfolio title="Overview" />
                            <ButtonPortfolio title="Projects" />
                            <ButtonPortfolio title="Skills" />
                            <ButtonPortfolio title="Contact" />
                        </div>
                        <h1 className="text-l text-zinc-600 mb-4 text-center hover:text-zinc-400">Activité</h1>
                        <div className="flex-1 flex flex-col">
                            {projects.map((project) => (
                                <ButtonPortfolio key={project.title} title={project.title} date={project.date} />
                            ))}
                        </div>
                    </div>
                    {/* column right */}
                    <div className="w-[70%] p-6">
                    </div>
                </div>
            </div>
        </div>
    )
}

const ButtonPortfolio = ({ title, date }: { title: string, date?: string }) => {
    return (
        <button className="group w-full text-white py-2 rounded cursor-pointer flex items-center gap-16 h-16 mb-2 px-4 relative overflow-hidden">
            <div className="absolute left-2 top-0 h-full w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity rounded-[25px]"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
            <div className="flex flex-col items-start">
                <span>{title}</span>
                {date && <span className="text-sm text-zinc-400">{date}</span>}
            </div>
        </button>
    )
}

export default Portfolio