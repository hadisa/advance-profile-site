import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import ShowcaseSection from '../components/ShowcaseSection';
import ProjectsGallery from '../components/ProjectsGallery';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <ShowcaseSection />
      <ProjectsGallery />
      <ServicesSection />
      <SkillsSection />
    </>
  );
}
