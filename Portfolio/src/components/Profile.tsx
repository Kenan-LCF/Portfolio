const Profile = () => {
  return (
    <div id="about" className="bg-zinc-900 text-white w-full h-[400px] px-4 py-16 mt-[80px] flex mb-64">
      {/* left part */}
      <div className="w-[30%] h-full flex items-center justify-center bg-zinc-900">
        <h1 className="text-4xl font-bold bg-zinc-900">Kenan LCF</h1>
      </div>
      
      {/* right part */}
      <div className="w-[70%] h-full pl-6 flex items-center bg-zinc-900" >
        <p className=" bg-zinc-900 text-xl">
          Je suis étudiant en développement web full-stack à Epitech Nantes. <br />
          Passionné par la création d’applications modernes, je travaille principalement avec React, TypeScript et Node.js.
          Mon objectif est de concevoir des solutions web performantes qui répondent à de vrais besoins utilisateurs tout en offrant une expérience fluide, intuitive et engageante.
        </p>
      </div>
    </div>
    
  );
};
export default Profile;