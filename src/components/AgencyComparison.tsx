import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import atlasLogo from "@/assets/atlas-voyages-logo.png";
import voyagePriveLogo from "@/assets/voyage-prive-logo.png";
import savaLogo from "@/assets/sava-travel-logo.png";
import edreamsLogo from "@/assets/edreams-logo.webp";

const agencies = [
  {
    name: "Atlas Voyages",
    country: "Maroc",
    website: "atlasvoyages.ma",
    rating: 4.2,
    reviews: "1,000+",
    focus: "Culturel & Local",
    region: "morocco",
    score: 3.3,
    description: "Focus sur le Maroc, l'Europe et l'Afrique avec services personnalisés",
    logo: atlasLogo
  },
  {
    name: "Sava Travel",
    country: "Maroc",
    website: "savatravel.ma",
    rating: 4.0,
    reviews: "800+",
    focus: "Récréatif & Intérieur",
    region: "morocco",
    score: 3.3,
    description: "Spécialiste du tourisme intérieur marocain",
    logo: savaLogo
  },
  {
    name: "Voyage Privé",
    country: "France",
    website: "voyage-prive.com",
    rating: 4.5,
    reviews: "500,000+",
    focus: "Promotions Européennes",
    region: "europe",
    score: 4.7,
    description: "Leader des ventes privées avec couverture mondiale",
    logo: voyagePriveLogo
  },
  {
    name: "eDreams",
    country: "Espagne",
    website: "edreams.com",
    rating: 4.4,
    reviews: "400,000+",
    focus: "Promotions Mondiales",
    region: "europe",
    score: 4.7,
    description: "Plateforme mondiale avec offres quotidiennes attractives",
    logo: edreamsLogo
  }
];

export const AgencyComparison = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Les 4 Agences Analysées
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comparaison détaillée entre agences marocaines et européennes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agencies.map((agency, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 border-2 ${
                agency.region === 'morocco' 
                  ? 'border-morocco/20 hover:border-morocco/40' 
                  : 'border-europe/20 hover:border-europe/40'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-white p-2 flex items-center justify-center shadow-md border border-border">
                    <img 
                      src={agency.logo} 
                      alt={`${agency.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{agency.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{agency.country}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{agency.website}</p>
                  </div>
                </div>
                <Badge 
                  variant="secondary"
                  className={agency.region === 'morocco' ? 'bg-morocco/10 text-morocco' : 'bg-europe/10 text-europe'}
                >
                  Score: {agency.score}/5
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{agency.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{agency.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({agency.reviews} avis)</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {agency.focus}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
