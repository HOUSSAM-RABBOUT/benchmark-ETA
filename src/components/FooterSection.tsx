import { Card } from "@/components/ui/card";
import { FileText, Mail, Globe, Calendar } from "lucide-react";
export const FooterSection = () => {
  return <footer className="bg-gradient-to-br from-muted/50 to-muted py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">Sources Officielles</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Organisation Mondiale du Tourisme (OMT)</li>
              <li>• TripAdvisor & Trustpilot Reviews</li>
              <li>• Travel Weekly & Forbes Travel</li>
              <li>• Sites web officiels des agences</li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-europe/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-europe/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-europe" />
              </div>
              <h3 className="font-bold text-foreground">Méthodologie</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyse comparative basée sur 7 critères clés, évaluant 4 agences leaders 
              avec données quantitatives et qualitatives vérifiées.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-morocco/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-morocco/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-morocco" />
              </div>
              <h3 className="font-bold text-foreground">Période d'Analyse</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Données collectées et analysées sur la période 2023-2024, 
              reflétant les tendances actuelles du marché du tourisme numérique.
            </p>
          </Card>
        </div>

        <div className="text-center pt-6 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              © Institut Spécialisé en Hôtellerie et Tourisme - Tamuda Bay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            </p>
          </div>
          
        </div>
      </div>
    </footer>;
};