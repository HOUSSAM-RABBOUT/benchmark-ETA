import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { OverviewStats } from "@/components/OverviewStats";
import { AgencyComparison } from "@/components/AgencyComparison";
import { CriteriaAnalysis } from "@/components/CriteriaAnalysis";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Recommendations } from "@/components/Recommendations";
import { FooterSection } from "@/components/FooterSection";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntroductionSection />
      <SectionDivider />
      <OverviewStats />
      <SectionDivider variant="secondary" />
      <AgencyComparison />
      <SectionDivider />
      <CriteriaAnalysis />
      <SectionDivider variant="secondary" />
      <ComparisonTable />
      <SectionDivider />
      <Recommendations />
      <FooterSection />
    </div>
  );
};

export default Index;
