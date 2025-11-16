import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Percent } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    label: "Croissance Annuelle",
    value: "15-20%",
    description: "Marché global (OMT 2023)",
    color: "text-success"
  },
  {
    icon: Globe,
    label: "Réservations en Ligne",
    value: "80%",
    description: "France & Espagne",
    color: "text-europe"
  },
  {
    icon: Percent,
    label: "Réservations en Ligne",
    value: "50%",
    description: "Maroc",
    color: "text-morocco"
  },
  {
    icon: Users,
    label: "Satisfaction Clients",
    value: "4.3/5",
    description: "Moyenne globale",
    color: "text-primary"
  }
];

export const OverviewStats = () => {
  return (
    <section className="py-16 px-4 -mt-12 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
