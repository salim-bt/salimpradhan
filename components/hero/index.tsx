import ProfileHeader from "./profile-header";
import ProfessionalSummary from "./professional-summary";
import SkillsAndExperience from "./skills-experience";
import ContactSection from "./contact-section";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center py-12 lg:py-24">
      <ProfileHeader />
      
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-2" />
      
      <ProfessionalSummary />
      <SkillsAndExperience />
      <ContactSection />
    </div>
  );
}
