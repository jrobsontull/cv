import { RESUME_DATA } from "@/data/resume-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          I&apos;m an interdisciplinary <span className="text-foreground font-medium">computational chemist</span> with expertise in macrocycle modeling and small molecule docking. My work sits at the intersection of <span className="text-foreground font-medium">structural biology</span>, <span className="text-foreground font-medium">drug discovery</span>, and <span className="text-foreground font-medium">software engineering</span>.
        </p>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Currently, I&apos;m a <span className="text-foreground font-medium">Principal Scientist</span> at{" "}
          <a
            href="https://www.schrodinger.com"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer noopener"
          >
            Schrödinger
          </a>
          , where I lead projects in macrocycle modeling and membrane permeability. I build computational tools that enable drug discovery for both internal teams and external partners.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          My robust background in biophysics—including cryo-EM and X-ray crystallography from my{" "}
          <span className="text-foreground font-medium">D.Phil. at Oxford</span>—combined with fluency in <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">Fortran</span>, and modern <span className="text-foreground font-medium">JavaScript frameworks</span>, drives impactful contributions in structure-based drug design.
        </p>
      </div>
    </section>
  );
}
