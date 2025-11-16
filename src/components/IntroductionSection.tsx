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
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
            Le secteur du tourisme numérique croît rapidement mondialement, avec les agences en ligne facilitant les voyages via Internet et les applications mobiles. Au Maroc, le tourisme intérieur et international fait face à des défis numériques face à des marchés avancés comme la France et l'Espagne.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Objectif Principal</h3>
              <p className="text-sm text-muted-foreground">
                Identifier les points forts et faiblesses des agences marocaines face aux leaders européens
              </p>
            </div>

            <div className="p-6 rounded-xl bg-europe/5 border border-europe/10">
              <div className="w-12 h-12 rounded-lg bg-europe/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-europe" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Portée de l'Analyse</h3>
              <p className="text-sm text-muted-foreground">
                Évaluation comparative sur 7 critères clés de compétitivité numérique
              </p>
            </div>

            <div className="p-6 rounded-xl bg-morocco/5 border border-morocco/10">
              <div className="w-12 h-12 rounded-lg bg-morocco/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-morocco" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Agences Étudiées</h3>
              <p className="text-sm text-muted-foreground">
                2 agences marocaines et 2 agences européennes leaders du marché
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-primary/10 via-europe/10 to-morocco/10 rounded-xl border border-primary/20">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Mission de cette Étude
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ce rapport compare quatre agences : <strong>Atlas Voyages</strong> et <strong>Sava Travel</strong> (Maroc), 
              et <strong>Voyage Privé</strong> (France) et <strong>eDreams</strong> (Espagne), évaluant leur compétitivité sur sept critères. 
              L'objectif est de proposer des recommandations stratégiques pour renforcer la position des agences marocaines sur le marché régional et international.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
