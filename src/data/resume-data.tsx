import { Avatar } from "@/images";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jake Robson-Tull",
  initials: "JRT",
  location: "New York, United States, EST",
  locationLink: "https://www.google.com/maps/place/NewYork",
  about: "Computational chemist, structural biologist and software engineer",
  summary:
    "I develop and ship computational tools for macrocycle modeling at Schrödinger, building specialized methods for a modality at the frontier between small molecules and biologics. My work spans the full product lifecycle from scientific and software development, to productization in Schrödinger's software suite. By combining a background in structural biology, computational chemistry, and software development, I bridge cutting-edge biophysics, software engineering, and strategic partner needs.",
  avatarUrl: Avatar.src,
  contact: {
    email: "hello@jakert.me",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jrobsontull",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jacob-robson-tull/",
        icon: LinkedInIcon,
      },
      { name: "X", url: "https://x.com/jrobsontull", icon: XIcon },
    ],
  },
  education: [
    {
      school: "University of Oxford",
      degree: "D.Phil. in Molecular Cell Biology of Health and Disease",
      start: "2019",
      end: "2023",
    },
    {
      school: "Imperial College London",
      degree: "B.Sc. in Biochemistry (Hons)",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Schrödinger",
      link: "https://www.schrodinger.com",
      badges: [],
      roles: [
        {
          title: "Principal Scientist",
          start: "2026",
          end: "Present",
          description:
            "Scientist and product lead for macrocycle modeling and membrane permeability. Shipped a best-in-class docking technology for macrocycles. Developing conformational sampling methods and permeability prediction tools for this emerging drug modality. Building new technologies for protein refinement.",
        },
        {
          title: "Senior Scientist II",
          start: "2025",
          end: "2026",
          description:
            "Built computational tools for macrocycle modeling, induced fit docking, and protein refinement within the Schrödinger platform.",
        },
        {
          title: "Senior Scientist I",
          start: "2023",
          end: "2025",
          description:
            "Developed computational tools for protein structure refinement with experimental cryo-EM and X-ray crystallography data.",
        },
      ],
    },
    {
      company: "National Cancer Institute",
      link: "https://ccr.cancer.gov/center-for-structural-biology",
      badges: [],
      roles: [
        {
          title: "Visiting Fellow",
          start: "2021",
          end: "2023",
          description:
            "Drove end-to-end structural biology projects on challenging small membrane proteins at the NCI spanning cloning, cell line generation, purification, cryo-EM sample preparation and imaging, map reconstruction, and refinement. Engineered novel eukaryotic expression pipelines and purification protocols for multi-component complexes. Assisted in relocating the lab from Oxford to the NIH, helping establish operations and user training for the new cryo-EM facility.",
        },
      ],
    },
    {
      company: "Sir William Dunn School of Pathology",
      link: "https://www.path.ox.ac.uk/",
      badges: [],
      roles: [
        {
          title: "Graduate Researcher",
          start: "2019",
          end: "2023",
          description:
            "Elucidated the structural mechanisms of protein degradation mediated by membrane-associated E3 ligases using cryo-EM and X-ray crystallography. Developed novel eukaryotic expression systems for membrane protein complexes.",
        },
      ],
    },
  ],
  skills: [
    "Computational Chemistry",
    "Macrocycles",
    "Permeability Prediction",
    "Structure-based Drug Design",
    "Structural Biology",
    "Cryo-EM",
    "X-ray Crystallography",
  ],
  techStack: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Fortran",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
  ],
  projects: [],
  awards: [
    {
      title:
        "Graduate Student Research Award for best presentation in Biochemistry, Immunology and Cell Biology",
      event: "Graduate Student Research Symposium",
      issuer: "National Institutes of Health",
      date: "2022",
    },
    {
      title:
        "Overall Best Poster Award, for research on the structural mechanisms of protein degradation",
      event: "Sir William Dunn School of Pathology Annual Symposium",
      issuer: "University of Oxford",
      date: "2021",
    },
    {
      title: "Funding to support doctoral research in structural biology",
      event: "Doctoral Studentship",
      issuer: "Medical Research Council",
      date: "2019",
    },
    {
      title:
        "Funding to undertake work to build a Python course for undergraduate teaching of Life Scientists",
      event: "Undergraduate Research Bursary",
      issuer: "Imperial College London",
      date: "2019",
    },
    {
      title:
        "Funding to conduct research on “investigating the mode of inhibition of fungal adhesins by cyclic peptides using NMR and X-ray crystallography",
      event: "EPSRC Vacation Bursary",
      issuer: "Imperial College London",
      date: "2018",
    },
  ],
} as const;
