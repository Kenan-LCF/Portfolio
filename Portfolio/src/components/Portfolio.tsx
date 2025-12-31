const Portfolio = () => {
    return (
        <div className="flex justify-center pt-64 pb-20">
            <div className="bg-zinc-900 border border-zinc-700 flex flex-col w-[80%] h-[750px]">
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
                        <div className="flex items-center gap-2 border border-zinc-700 px-3 py-1 rounded">
                            <div className="w-3 h-3 rounded-full bg-zinc-600 hover:bg-red-500 transition-colors cursor-pointer"></div>
                            <h1 className="text-sm text-white">live</h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-zinc-400 transition-colors cursor-pointer"></div>
                        </div>
                    </div>
                </div>
                {/* Container */}
                <div>

                </div>

            </div>
        </div>
    )
}

export default Portfolio