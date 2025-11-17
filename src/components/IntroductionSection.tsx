import { Card } from "@/components/ui/card";
import { BookOpen, TrendingUp, Target } from "lucide-react";
import introBg from "@/assets/intro-bg.jpg";

export const IntroductionSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${introBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Introduction</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contexte et Objectifs de l'Étude
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card via-card to-muted/30 border-2 border-primary/10 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Le tourisme change rapidement grâce aux nouvelles technologies. Aujourd'hui, les gens utilisent Internet et les applications mobiles pour préparer leurs voyages, comparer les prix, réserver des vols ou choisir des hôtels. Ce qu'on appelle le tourisme numérique rend les voyages plus simples, plus rapides et adaptés aux besoins de chacun.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Dans plusieurs pays d'Europe, ce système est déjà bien utilisé. En Espagne, le site <strong className="text-foreground">eDreams</strong> est très connu. Il propose des services intelligents qui s'adaptent aux envies des clients. En France, l'agence <strong className="text-foreground">Voyages Privé</strong> offre des séjours de luxe avec des offres spéciales, accessibles seulement aux membres. Ces exemples montrent que le tourisme numérique est bien développé en Europe.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Au Maroc, le pays a beaucoup de richesses touristiques, mais le passage au numérique est encore lent. Des agences comme <strong className="text-foreground">Sava Travel</strong> et <strong className="text-foreground">Atlas Voyage</strong> commencent à proposer des services en ligne, comme la réservation et la promotion des destinations. Mais elles rencontrent des difficultés : faible qualité des outils numériques, manque de visibilité à l'étranger, et utilisation limitée des nouvelles technologies comme l'intelligence artificielle.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Il est donc important d'étudier les différences entre le Maroc et les pays européens, pour trouver des idées et des solutions qui peuvent aider les agences marocaines à mieux évoluer et à devenir plus compétitives dans le monde du tourisme moderne.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
