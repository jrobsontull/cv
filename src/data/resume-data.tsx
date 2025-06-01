import { Avatar } from "@/images";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jake Robson-Tull",
  initials: "JRT",
  location: "New York, United States, EST",
  locationLink: "https://www.google.com/maps/place/NewYork",
  about: "Computational chemist, structural biologist and full-stack developer",
  summary:
    "Interdisciplinary computational chemist with expertise in macrocycle modeling and small molecule docking. My robust background in biophysics and structural biology, combined with fluency in Python and modern JavaScript frameworks, drives impactful contributions in structural biology and structure-based drug design.",
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
      {
        name: "X",
        url: "https://x.com/jrobsontull",
        icon: XIcon,
      },
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
          title: "Senior Scientist II",
          start: "2025",
          end: "Present",
          description:
            "Continuing to enable drug discovery projects internally and externally by building and maintaining the Schrödinger platform. Building computational tools for macrocycle modelling, induced fit docking and protein refinement.",
        },
        {
          title: "Senior Scientist I",
          start: "2023",
          end: "2025",
          description:
            "Working as part of the Protein Structure Refinement team to enable drug discovery projects. Technologies: Python, Fortran, computational chemistry, structural biology, cryo-EM, X-ray crystallography",
        },
      ],
    },
    {
      company: "Cara",
      link: "https://cara.app",
      badges: ["Remote"],
      roles: [
        {
          title: "Full Stack Developer",
          start: "2022",
          end: "2024",
          description:
            "Founding engineer helping to build a social media and portfolio platform for artists. Technologies: TypeScript, React, Next.js, PostgreSQL, Prisma, Tailwind CSS",
        },
      ],
    },
    {
      company: "Cafe Maddy Cab",
      link: "https://cafemaddycab.org",
      badges: ["Remote"],
      roles: [
        {
          title: "Developer Lead",
          start: "2022",
          end: "2023",
          description:
            "Led teams to develop a web app for NYC cab ride reimbursement by the AAPI community. Oversaw development, deployment and maintenance. Technologies: JavaScript, React, Node.js, Linux, MongoDB",
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
