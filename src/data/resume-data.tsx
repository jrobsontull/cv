import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { Avatar } from "@/images";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jake Robson-Tull",
  initials: "JRT",
  location: "New York, United States, EST",
  locationLink: "https://www.google.com/maps/place/NewYork",
  about: "Computational structural biologist and full-stack developer",
  summary: "Write a blurb about me here.",
  avatarUrl: Avatar.src,
  contact: {
    email: "email@jakert.me",
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
      title: "Senior Scientist",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Working as part of the Protein Structure Refinement team to enable drug discovery projects. Technologies: Python, structural biology, cryo-EM, X-ray crystallography",
    },
    {
      company: "Cara",
      link: "https://cara.app",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "Present",
      description:
        "Founding engineer helping to build a social media and portfolio platform for artists. Technologies: TypeScript, React, Next.js, PostgreSQL, Prisma, Tailwind CSS",
    },
    {
      company: "Cafe Maddy Cab",
      link: "https://cafemaddycab.org",
      badges: ["Remote"],
      title: "Developer Lead",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Led teams to develop a web app for NYC cab ride reimbursement by the AAPI community. Oversaw development, deployment and maintenance. Technologies: JavaScript, React, Node.js, Linux, MongoDB",
    },
    {
      company: "National Cancer Institute",
      link: "https://ccr.cancer.gov/center-for-structural-biology",
      badges: [],
      title: "Visiting Fellow",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Assisted relocation of lab to the US to bring high-resolution cryo-EM to the National Cancer Institute. Established department-wide technologies for expression and purification of multi-component membrane protein complexes. Aided set-up of new cryo-EM facility and provided training to new users.",
    },
    {
      company: "Sir William Dunn School of Pathology",
      link: "https://www.path.ox.ac.uk/",
      badges: [],
      title: "Graduate Researcher",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:
        "Performed cryo-EM to elucidate mechanisms of protein surveillance and degradation by membraneassociated E3 ligases. Established novel eukaryotic expression system for membrane protein complexes. Developed screening strategies for high-throughput membrane protein purification. Validated structural features with cellular assays",
    },
  ],
  skills: [
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
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
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
