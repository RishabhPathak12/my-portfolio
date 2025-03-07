import { AboutMeMain } from './components/aboutmescetion/AboutMeMain';
import { ContactMain } from './components/ContactSection/ContactMain';
import { ExperienceMain } from './components/ExperienceSection/ExperienceMain';
import { FooterMain } from './components/FooterSection/FooterMain';
import { HelperSection } from './components/HelperSection';
import HeroGradient from './components/herosection/HeroGradient';
import { HeroMain } from './components/herosection/HeroMain';
import { SubHeroSection } from './components/herosection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import { ProjectMain } from './components/projectSection/ProjectMain';
import { SkillsMain } from './components/skillSection/SkillsMain';
import { SubSkills } from './components/skillSection/SubSkills';

import './index.css';

function App() {
  return (
    <main className="">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain/>
      <ContactMain/>
      <FooterMain/>
      <HelperSection />
    </main>
  );
}

export default App;
