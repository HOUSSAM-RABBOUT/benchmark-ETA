import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const radarData = [
  { criteria: "Services", atlas: 3, sava: 3, voyage: 5, edreams: 5 },
  { criteria: "UX", atlas: 3, sava: 3, voyage: 5, edreams: 5 },
  { criteria: "Marketing", atlas: 3, sava: 3, voyage: 5, edreams: 5 },
  { criteria: "Avis", atlas: 4, sava: 4, voyage: 5, edreams: 5 },
  { criteria: "Prix", atlas: 3, sava: 3, voyage: 5, edreams: 5 },
  { criteria: "Partenariats", atlas: 3, sava: 3, voyage: 5, edreams: 5 },
  { criteria: "Info", atlas: 3, sava: 3, voyage: 5, edreams: 5 }
];

const barData = [
  { name: "Offre Services", maroc: 3, europe: 5 },
  { name: "Plateforme UX", maroc: 3, europe: 5 },
  { name: "Marketing", maroc: 3, europe: 5 },
  { name: "Avis Clients", maroc: 4, europe: 5 },
  { name: "Prix", maroc: 3, europe: 5 },
  { name: "Partenariats", maroc: 3, europe: 5 },
  { name: "Sources Info", maroc: 3, europe: 5 }
];

export const CriteriaAnalysis = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Analyse par Critères
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualisation comparative des performances sur 7 critères clés
          </p>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="radar" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="radar">Vue Radar</TabsTrigger>
              <TabsTrigger value="bar">Vue Comparée</TabsTrigger>
            </TabsList>

            <TabsContent value="radar" className="mt-0">
              <div className="h-[500px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="criteria" 
                      tick={{ fill: 'hsl(var(--foreground))' }}
                    />
                    <PolarRadiusAxis angle={90} domain={[0, 5]} />
                    <Radar
                      name="Atlas Voyages"
                      dataKey="atlas"
                      stroke="hsl(var(--morocco))"
                      fill="hsl(var(--morocco))"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Sava Travel"
                      dataKey="sava"
                      stroke="hsl(var(--morocco))"
                      fill="hsl(var(--morocco))"
                      fillOpacity={0.15}
                      strokeDasharray="5 5"
                    />
                    <Radar
                      name="Voyage Privé"
                      dataKey="voyage"
                      stroke="hsl(var(--europe))"
                      fill="hsl(var(--europe))"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="eDreams"
                      dataKey="edreams"
                      stroke="hsl(var(--europe))"
                      fill="hsl(var(--europe))"
                      fillOpacity={0.15}
                      strokeDasharray="5 5"
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="bar" className="mt-0">
              <div className="h-[500px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: 'hsl(var(--foreground))' }}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis 
                      domain={[0, 5]}
                      tick={{ fill: 'hsl(var(--foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="maroc" 
                      name="Agences Marocaines" 
                      fill="hsl(var(--morocco))"
                      radius={[8, 8, 0, 0]}
                    />
                    <Bar 
                      dataKey="europe" 
                      name="Agences Européennes" 
                      fill="hsl(var(--europe))"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
