import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tableData = [
  {
    criteria: "Offre de Services",
    atlas: { score: 3, desc: "Focus local (Maroc, Europe, Afrique)" },
    sava: { score: 3, desc: "Focus intérieur marocain" },
    voyage: { score: 5, desc: "Couverture mondiale complète" },
    edreams: { score: 5, desc: "Diversité mondiale, promotions" }
  },
  {
    criteria: "Plateforme & UX",
    atlas: { score: 3, desc: "Simple, pas d'app mobile" },
    sava: { score: 3, desc: "Basique, chargement lent" },
    voyage: { score: 5, desc: "Interactive, app multilingue" },
    edreams: { score: 5, desc: "Moderne, fluide, app disponible" }
  },
  {
    criteria: "Marketing",
    atlas: { score: 3, desc: "Réseaux sociaux, fidélité limitée" },
    sava: { score: 3, desc: "Peu de publicités en ligne" },
    voyage: { score: 5, desc: "Google Ads, millions d'utilisateurs" },
    edreams: { score: 5, desc: "Campagnes ciblées efficaces" }
  },
  {
    criteria: "Avis Clients",
    atlas: { score: 4, desc: "4.2/5 - 80% positifs" },
    sava: { score: 4, desc: "4.0/5 - 75% positifs" },
    voyage: { score: 5, desc: "4.5/5 - Trustpilot" },
    edreams: { score: 5, desc: "4.4/5 - Haute satisfaction" }
  },
  {
    criteria: "Prix",
    atlas: { score: 3, desc: "500 MAD, annulations strictes" },
    sava: { score: 3, desc: "450 MAD, promos saisonnières" },
    voyage: { score: 5, desc: "20-50% réductions (100€)" },
    edreams: { score: 5, desc: "25-60% moins cher (90€)" }
  },
  {
    criteria: "Partenariats",
    atlas: { score: 3, desc: "Hôtels locaux, Royal Air Maroc" },
    sava: { score: 3, desc: "Limités à l'échelle locale" },
    voyage: { score: 5, desc: "Air France, Accor, Expedia" },
    edreams: { score: 5, desc: "Iberia, Ibis, Booking.com" }
  },
  {
    criteria: "Sources Info",
    atlas: { score: 3, desc: "Infos internes, liens limités" },
    sava: { score: 3, desc: "Rapports locaux uniquement" },
    voyage: { score: 5, desc: "Rapports OMT, contenu riche" },
    edreams: { score: 5, desc: "Sources diverses, multimédia" }
  }
];

const ScoreBadge = ({ score }: { score: number }) => {
  const variant = score >= 5 ? "default" : score >= 4 ? "secondary" : "outline";
  const color = score >= 5 ? "bg-success text-success-foreground" : 
                score >= 4 ? "bg-primary/10 text-primary" : 
                "bg-muted text-muted-foreground";
  
  return (
    <Badge variant={variant} className={score >= 5 ? color : ""}>
      {score}/5
    </Badge>
  );
};

export const ComparisonTable = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tableau Comparatif Détaillé
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analyse exhaustive des performances par critère
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Critère</TableHead>
                  <TableHead className="font-bold text-morocco">Atlas Voyages</TableHead>
                  <TableHead className="font-bold text-morocco">Sava Travel</TableHead>
                  <TableHead className="font-bold text-europe">Voyage Privé</TableHead>
                  <TableHead className="font-bold text-europe">eDreams</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-semibold">{row.criteria}</TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <ScoreBadge score={row.atlas.score} />
                        <p className="text-sm text-muted-foreground">{row.atlas.desc}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <ScoreBadge score={row.sava.score} />
                        <p className="text-sm text-muted-foreground">{row.sava.desc}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <ScoreBadge score={row.voyage.score} />
                        <p className="text-sm text-muted-foreground">{row.voyage.desc}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <ScoreBadge score={row.edreams.score} />
                        <p className="text-sm text-muted-foreground">{row.edreams.desc}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </section>
  );
};
