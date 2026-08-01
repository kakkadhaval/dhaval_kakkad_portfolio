import type { EducationEntry, ExperienceEntry, SkillGroup, Publication, Project, Achievement } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Director – Research & Development",
    organization: "Vyom Surgicals LLP",
    period: "Aug 2025 — Present",
    bullets: [
      "Lead R&D at an early-stage medical device startup, directing two products currently in active development through concept, design, and validation phases.",
      "Develop 3D CAD models and assemblies in Siemens NX and SolidWorks, translating clinical requirements into manufacturable design concepts.",
      "Run FEA and CFD simulations to validate structural integrity and performance ahead of physical prototyping.",
      "Observed live neurosurgical procedures to study surgical workflow and instrument handling, directly informing device ergonomics and design requirements.",
      "Own prototype development and technical documentation, ensuring designs meet manufacturability and regulatory-readiness standards.",
      "Contribute to strategic planning and commercialization decisions as part of the founding leadership team.",
    ],
  },
  {
    role: "Service Advisor Intern",
    organization: "Bharat Motors, Rajkot",
    period: "Jan 2024 — Apr 2024",
    bullets: [
      "Coordinated service scheduling and workflow between customers and technical teams.",
      "Gained hands-on exposure to automotive systems and maintenance procedures.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Engineering (M.E.), Mechanical Engineering — CAD/CAM",
    institution: "Government Engineering College, Rajkot",
    affiliation: "Gujarat Technological University",
    period: "2024 — 2026",
    detail:
      "First Class with Distinction, CGPA 8.07. Research focus on simulation-driven design for battery thermal performance and structural analysis.",
  },
  {
    degree: "Bachelor of Engineering (B.E.), Automobile Engineering",
    institution: "Government Engineering College, Rajkot",
    affiliation: "Gujarat Technological University",
    period: "2019 — 2024",
    detail:
      "First Class, CGPA 6.88. Built a foundation in vehicle systems, mechanical design, and manufacturing processes that later informed a shift toward simulation-driven engineering.",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "CAD / CAM",
    icon: "box",
    items: ["Siemens NX", "SolidWorks", "AutoCAD", "Parametric & Surface Modeling"],
  },
  {
    category: "Engineering Simulation",
    icon: "cpu",
    items: ["Finite Element Analysis (FEA)", "ANSYS Mechanical", "Structural Analysis", "Design Validation"],
  },
  {
    category: "Computational Fluid Dynamics",
    icon: "waves",
    items: ["CFD", "Battery Thermal Management", "Thermal-Flow Modeling", "Mesh Convergence Studies"],
  },
  {
    category: "Research Methodology",
    icon: "flask-conical",
    items: ["Design of Experiments (DOE)", "Response Surface Methodology", "Experimental Validation", "Technical Writing"],
  },
  {
    category: "Product Development",
    icon: "target",
    items: ["Design for Manufacturing (DFM)", "Prototype Development", "Technical Documentation", "Engineering Optimization"],
  },
  {
    category: "Medical Device Engineering",
    icon: "activity",
    items: ["Surgical Instrument Design", "Clinical Observation-Informed Design", "Ergonomic Design", "Regulatory-Aware Development"],
  },
  {
    category: "Automation & Robotics",
    icon: "bot",
    items: ["Embedded Prototyping (ESP32)", "Human-Robot Interaction", "Rehabilitation Robotics", "Additive Manufacturing"],
  },
  {
    category: "Engineering Leadership",
    icon: "sparkles",
    items: ["R&D Team Leadership", "Strategic Product Planning", "Cross-Functional Coordination"],
  },
];

export const publications: Publication[] = [
  {
    title: "Analysis of Sinking of the Titan Submersible in Accordance with Carbon Fibre: A Case Study",
    journal: "International Journal of Research in Engineering and Science (IJRES)",
    authors: "D. Kakkad",
    year: "2024",
    status: "Published",
    abstract:
      "A case-study analysis of the Titan submersible failure, examining the structural and material behavior of its carbon-fibre composite hull to draw engineering lessons for composite pressure-vessel design.",
  },
  {
    title: "A Detailed Study: Enhancing Battery Performance in Automobiles for a Sustainable Future",
    journal: "International Journal of All Research Education and Scientific Methods (IJARESM)",
    authors: "D. Kakkad",
    year: "2024",
    status: "Published",
    abstract:
      "Reviews approaches to improving automotive battery performance, connecting thermal management and design considerations to longer battery life and more sustainable electric mobility.",
  },
];

export const projects: Project[] = [
  {
    slug: "battery-performance-thermal-study",
    title: "Enhancing Battery Performance in Automobiles",
    description:
      "Published research examining how thermal management and design choices affect automotive battery performance and longevity, connecting simulation insight to more sustainable electric mobility.",
    domains: ["Research", "Simulation"],
    technologies: ["CFD", "Thermal-Flow Modeling", "Battery Thermal Management"],
    challenge:
      "Battery packs face uneven thermal loads across cells during charge and discharge cycles, and physical prototyping of cooling architectures is slow and costly to iterate on.",
    result:
      "Published findings in IJARESM identifying design and thermal-management directions for improving automotive battery performance and durability.",
  },
  {
    slug: "medical-device-rd-vyom-surgicals",
    title: "Surgical Instrument R&D — Vyom Surgicals",
    description:
      "As Director of R&D, leading two medical devices through concept, design, and validation, grounded in direct observation of live neurosurgical procedures to inform instrument ergonomics.",
    domains: ["Medical Devices", "Mechanical Design", "CAD"],
    technologies: ["Siemens NX", "SolidWorks", "FEA", "CFD"],
    challenge:
      "Designing surgical instruments that hold up structurally while fitting naturally into a surgeon's workflow requires design decisions grounded in real procedural constraints, not assumptions.",
    result:
      "Advanced both devices from concept through validation; one design is currently progressing through patent filing, so mechanism-level details remain confidential ahead of formal disclosure.",
  },
  {
    slug: "titan-submersible-carbon-fibre-case-study",
    title: "Titan Submersible Failure: A Carbon-Fibre Case Study",
    description:
      "Published case-study analysis of the Titan submersible incident, examining the structural and material failure modes of its carbon-fibre composite hull under repeated deep-sea pressure cycling.",
    domains: ["Research"],
    technologies: ["Composite Materials", "Structural Analysis", "Failure Analysis"],
    challenge:
      "Understanding why a composite pressure hull failed catastrophically required reasoning through material fatigue, manufacturing defects, and structural design assumptions from public evidence.",
    result:
      "Published in IJRES, drawing engineering lessons for composite pressure-vessel design applicable beyond the specific incident.",
  },
  {
    slug: "rehabilitation-robotics-platform",
    title: "Low-Cost Rehabilitation & Companion Robotics Platform",
    description:
      "An ongoing applied-research project exploring an accessible, ESP32-based robotic platform for rehabilitation support and human-robot interaction research, designed under strict cost and component constraints.",
    domains: ["Automation", "Research"],
    technologies: ["ESP32", "3D Printing", "Human-Robot Interaction", "Embedded Systems"],
    challenge:
      "Rehabilitation robotics platforms are typically cost-prohibitive for wider clinical or home use, limiting access in resource-constrained settings.",
    result:
      "Developing a working low-cost prototype architecture intended to demonstrate that meaningful rehabilitation assistance is achievable within a tightly bounded budget.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "National-Level 10m Pistol Shooter",
    detail: "Represented Gujarat Technological University at the All India Inter-University (AIU) 2025 Shooting Championship, Chandigarh.",
  },
  {
    title: "Naval NCC — Petty Officer Cadet",
    detail: "3 Gujarat Naval Unit, 'C' Certificate holder; managed a full Combined Annual Training Camp (CATC) as Senior Ex-Cadet, overseeing cadet coordination and daily operations.",
  },
  {
    title: "Best Commendation Award, BAIMUN",
    detail: "Represented Belgium in a UNGA simulation at the Bali Asia International Model United Nations, among delegates from 40+ countries.",
  },
  {
    title: "Published Author",
    detail: "\u201CThe Whispering Voice of Leadership: A Boy\u2019s Journey from Silence to Strength.\u201D",
  },
  {
    title: "Debate & Public Speaking",
    detail: "National Debate Competition winner (Gujarat Directorate); district-level debate and quiz titles.",
  },
];
