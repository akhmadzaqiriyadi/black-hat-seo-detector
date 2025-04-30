import HeroWorkflow from '@/components/HeroWorkflow';
import WorkflowSteps from '@/components/WorkflowSteps';
import TechnicalDetails from '@/components/TechnicalDetails';
import CTASection from '@/components/CTASection';

export default function WorkflowPage() {
  return (
    <main>
      <HeroWorkflow />
      <WorkflowSteps />
      <TechnicalDetails />
      <CTASection />
    </main>
  );
}