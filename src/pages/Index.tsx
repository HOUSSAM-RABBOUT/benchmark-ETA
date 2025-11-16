import { HeroSection } from "@/components/HeroSection";
import { OverviewStats } from "@/components/OverviewStats";
import { AgencyComparison } from "@/components/AgencyComparison";
import { CriteriaAnalysis } from "@/components/CriteriaAnalysis";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OverviewStats />
      <AgencyComparison />
      <CriteriaAnalysis />
      <ComparisonTable />
      <Recommendations />
    </div>
  );
};

export default Index;
