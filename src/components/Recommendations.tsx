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

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-europe/5 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Conclusions Clés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conclusions.map((conclusion, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground pt-1">{conclusion}</p>
              </div>
            ))}
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
