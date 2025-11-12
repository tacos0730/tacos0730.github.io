import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Index;
