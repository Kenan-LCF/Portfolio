import Portfolio from "./Portfolio";
const Hero = () => {
    return (
        <div id="accueil" className="min-h-screen relative py-20">


            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[150px]" />

            <div className="text-center px-4 ">


                <h1 className="text-6xl md:text-7xl text-white font-bold mb-6 mt-32">

                    Kénan LCF
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Étudiant Développeur Web Full-Stack passionné par le développement moderne.
                    <br />
                    En apprentissage de <span className="text-white">React</span>, <span className="text-white">TypeScript</span> et <span className="text-white">Node.js</span> pour créer des applications web performantes.
                </p>

                <div className="flex gap-4 justify-center mt-10">

                    <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition">
                        Qui suis-je ?
                    </button>
                    <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/5 transition">
                        Me contacter →
                    </button>
                </div>



            </div>

            <Portfolio/>

        </div>
    );
};

export default Hero;