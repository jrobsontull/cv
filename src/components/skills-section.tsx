import { RESUME_DATA } from "@/data/resume-data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Scientific Expertise</h3>
          <ul className="flex flex-wrap gap-2" aria-label="Scientific skills">
            {RESUME_DATA.skills.map((skill) => (
              <li key={skill}>
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Tech Stack</h3>
          <ul className="flex flex-wrap gap-2" aria-label="Technical skills">
            {RESUME_DATA.techStack.map((tech) => (
              <li key={tech}>
                <div className="flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium leading-5 text-muted-foreground">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
