import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { OverviewStats } from "@/components/OverviewStats";
import { AgencyComparison } from "@/components/AgencyComparison";
import { CriteriaAnalysis } from "@/components/CriteriaAnalysis";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Recommendations } from "@/components/Recommendations";
import { FooterSection } from "@/components/FooterSection";
import { SectionDivider } from "@/components/SectionDivider";
import { ThemeToggle } from "@/components/ThemeToggle";
import tourismLightBg from "@/assets/tourism-light-bg.jpg";
import tourismDarkBg from "@/assets/tourism-dark-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `url(${tourismLightBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div 
        className="fixed inset-0 opacity-0 dark:opacity-10 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `url(${tourismDarkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <ThemeToggle />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
