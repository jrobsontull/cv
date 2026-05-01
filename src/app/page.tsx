import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { Footer } from "@/components/footer";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#about"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeroSection />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <AwardsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
