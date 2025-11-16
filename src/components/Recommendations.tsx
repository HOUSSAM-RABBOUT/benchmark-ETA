import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  TrendingUp, 
  Handshake, 
  DollarSign, 
  Target,
  CheckCircle2 
} from "lucide-react";

const recommendations = [
  {
    icon: Smartphone,
    title: "Développement Numérique",
    priority: "Haute",
    items: [
      "Créer des applications mobiles natives",
      "Intégrer l'IA pour recommandations personnalisées",
      "Améliorer la vitesse de chargement des plateformes",
      "Implémenter des chatbots multilingues"
    ],
    impact: "+30% engagement"
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    priority: "Haute",
    items: [
      "Augmenter la présence sur Google Ads",
      "Développer campagnes sur réseaux sociaux",
      "Créer programmes de fidélité attractifs",
      "Investir dans le marketing d'influence"
    ],
    impact: "+25% visibilité"
  },
  {
    icon: Handshake,
    title: "Partenariats Internationaux",
    priority: "Moyenne",
    items: [
      "Collaborer avec compagnies aériennes majeures",
      "Rejoindre réseaux de distribution globaux",
      "Établir partenariats avec chaînes hôtelières",
      "Intégrer plateformes comme Booking.com"
    ],
    impact: "+40% offres"
  },
  {
    icon: DollarSign,
    title: "Stratégie Tarifaire",
    priority: "Haute",
    items: [
      "Offrir réductions compétitives (20-50%)",
      "Politique d'annulation flexible",
      "Promotions saisonnières régulières",
      "Programme de points de fidélité"
    ],
    impact: "+15% satisfaction"
  },
  {
    icon: Target,
    title: "Expérience Client",
    priority: "Haute",
    items: [
      "Former équipes service client",
      "Réduire temps de réponse (<24h)",
      "Implémenter système de feedback",
      "Support multicanal 24/7"
    ],
    impact: "+20% rétention"
  }
];

const conclusions = [
  "Les agences européennes dominent avec scores moyens de 4.7/5 grâce à l'innovation",
  "Les agences marocaines excellent localement (3.3/5) mais accusent un retard numérique",
  "Développement digital prioritaire pour compétitivité régionale",
  "Potentiel de croissance important avec adoption des meilleures pratiques"
];

export const Recommendations = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recommandations Stratégiques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Actions prioritaires pour renforcer la compétitivité des agences marocaines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendations.map((rec, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <rec.icon className="w-6 h-6" />
                </div>
                <Badge 
                  variant={rec.priority === "Haute" ? "default" : "secondary"}
                  className={rec.priority === "Haute" ? "bg-morocco" : ""}
                >
                  {rec.priority}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{rec.title}</h3>
              
              <ul className="space-y-2 mb-4">
                {rec.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-success">
                  Impact: {rec.impact}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-europe/5 to-morocco/5 border-2 border-primary/20 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-7 h-7 text-primary" />
            Conclusions et Recommandations
          </h3>
          
          <div className="space-y-6 mb-8">
            <p className="text-base text-muted-foreground leading-relaxed">
              Les agences européennes (Voyage Privé et eDreams) <strong className="text-europe">dominent avec des scores moyens de 4,7/5</strong> grâce à l'innovation et au marketing, reflétant la maturité des marchés avancés. Les agences marocaines (Atlas Voyages et Sava Travel) sont <strong className="text-morocco">excellentes localement avec des scores moyens de 3,3/5</strong> mais accusent un retard numérique.
            </p>
            
            <div className="p-6 bg-gradient-to-r from-morocco/10 to-primary/10 rounded-xl border border-morocco/20">
              <h4 className="font-bold text-foreground mb-4 text-lg">
                Actions Prioritaires pour la Compétitivité Marocaine :
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-morocco mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Développement numérique</strong> : Applications mobiles natives et intégration de l'IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-morocco mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Marketing et partenariats internationaux</strong> : Renforcer la présence digitale</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-morocco mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Prix flexibles et fidélité</strong> : +15% de satisfaction client attendue</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {conclusions.map((conclusion, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground pt-1">{conclusion}</p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-primary/5 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Perspective :</strong> Ces mesures positionneront les agences marocaines comme leaders régionaux. Consultez les rapports de l'Organisation Mondiale du Tourisme (OMT) pour plus de détails.
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Source : Organisation Mondiale du Tourisme (OMT) • TripAdvisor • Trustpilot • Travel Weekly
          </p>
        </div>
      </div>
    </section>
  );
};
