export default async function ProjetDetailPage({ params }) {
  // En attendant d'avoir des données dynamiques
  const slug = (await params).slug;

  return (
    <div className="pt-32 px-8 min-h-screen bg-codorah-black text-white">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] text-codorah-gold font-mono tracking-widest uppercase mb-4 block">
          ÉTUDE DE CAS
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
          {slug}
        </h1>
        
        <div className="h-[400px] w-full bg-white/5 border border-white/10 rounded-sm mb-12 flex items-center justify-center">
          <p className="text-gray-500 font-mono text-sm tracking-widest">VISUEL DU PROJET</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Détails approfondis sur le projet {slug}, couvrant l'architecture, les défis techniques, et l'impact de la solution codée.
          </p>
        </div>
      </div>
    </div>
  );
}
