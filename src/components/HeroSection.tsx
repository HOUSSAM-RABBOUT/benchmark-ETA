import { Plane } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export const HeroSection = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-teal-600 py-20 px-4">
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center justify-center mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
            <Plane className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 animate-in fade-in slide-in-from-top-6 duration-700 delay-100">MTOETA301</h1>
        
        <p className="text-xl md:text-2xl text-center text-white/95 max-w-4xl mx-auto mb-8 animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
          Agences de Voyage en Ligne : <br className="hidden md:block" />
          Maroc vs Europe
        </p>
        
        <p className="text-base md:text-lg text-center text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Évaluation de la compétitivité du marché touristique numérique
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};