import { Avatar } from "@/images";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jake Robson-Tull",
  initials: "JRT",
  location: "New York, United States, EST",
  locationLink: "https://www.google.com/maps/place/NewYork",
  about: "Computational chemist, structural biologist and engineer",
  summary:
    "I develop and ship computational tools for macrocycle modeling at Schrödinger, building specialized methods for a modality at the frontier between small molecules and biologics. My work spans the full product lifecycle from developing novel conformational sampling, best-in-class docking algorithms, and permeability prediction tools to productizing them in Schrödinger's software suite. By combining a background in structural biology, computational chemistry, and software development, I bridge cutting-edge biophysics, engineering, and commercial partner needs.",
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
            "Lead end-to-end R&D, productization, and deployment of macrocycle modeling and permeability tools in Schrödinger's commercial suite. Published first-in-class macrocycle docking technology and developed scalable conformational sampling methods for complex drug targets. Advanced passive and active permeability prediction methods, enabling robust ADMET modeling for modalities bridging small molecules and biologics. Pitch technical capabilities and present scientific findings to prospective clients, top-tier pharma partners, and conferences.",
        },
        {
          title: "Senior Scientist II",
          start: "2025",
          end: "2026",
          description:
            "Expanded scope from protein structure refinement into macrocycle modeling tool development. Built computational methods for macrocycle modeling and contributed to induced fit docking capabilities within the Schrödinger platform.",
        },
        {
          title: "Senior Scientist I",
          start: "2023",
          end: "2025",
          description:
            "Working as part of the Protein Structure Refinement team to enable drug discovery projects.",
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
            "Assisted relocation of lab to the US to bring high-resolution cryo-EM to the National Cancer Institute. Established department-wide technologies for expression and purification of multi-component membrane protein complexes. Aided set-up of new cryo-EM facility and provided training to new users.",
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
            "Conducted research on the structural mechanisms of protein degradation by membrane-associated E3 ligases. Developed novel eukaryotic expression systems for membrane protein complexes. Utilized cryo-EM and X-ray crystallography to elucidate protein structures.",
        },
      ],
    },
  ],
  skills: [
    "Computational Chemistry",
    "Macrocycle Modeling",
    "Permeability Prediction",
    "Structure-based Drug Design",
    "Structural Biology",
    "Protein Refinement",
    "Cryo-EM",
    "X-ray Crystallography",
    "Membrane Proteins",
    "Eukaryotic Cells",
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
