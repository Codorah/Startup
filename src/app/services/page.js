export default function ServicesPage() {
  return (
    <div className="pt-32 px-8 min-h-screen bg-codorah-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          NOS <span className="text-codorah-gold">SERVICES</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-16">
          De l'audit de sécurité à l'intégration d'intelligence artificielle, découvrez comment notre expertise technique peut accélérer votre transformation numérique.
        </p>
        
        {/* Placeholder for service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-white/5 rounded-sm hover:border-codorah-neonViolet transition-colors">
            <h3 className="text-xl font-bold mb-4">Audit de Sécurité</h3>
            <p className="text-sm text-gray-500">Sécurisez votre infrastructure face aux menaces modernes.</p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-sm hover:border-codorah-neonViolet transition-colors">
            <h3 className="text-xl font-bold mb-4">Architecture Cloud</h3>
            <p className="text-sm text-gray-500">Des infrastructures scalables et résilientes pour votre croissance.</p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-sm hover:border-codorah-neonViolet transition-colors">
            <h3 className="text-xl font-bold mb-4">Intégration IA</h3>
            <p className="text-sm text-gray-500">Automatisation via l'Intelligence Artificielle et LLMs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
