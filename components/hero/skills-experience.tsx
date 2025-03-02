import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsTab from "./tabs/skills-tab";
import ExperienceTab from "./tabs/experience-tab";
import EducationTab from "./tabs/education-tab";
import ProjectsTab from "./tabs/projects-tab";

export default function SkillsAndExperience() {
  return (
    <Tabs defaultValue="skills" className="w-full max-w-3xl">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      
      <TabsContent value="skills">
        <SkillsTab />
      </TabsContent>
      
      <TabsContent value="experience">
        <ExperienceTab />
      </TabsContent>
      
      <TabsContent value="education">
        <EducationTab />
      </TabsContent>
      
      <TabsContent value="projects">
        <ProjectsTab />
      </TabsContent>
    </Tabs>
  );
}
