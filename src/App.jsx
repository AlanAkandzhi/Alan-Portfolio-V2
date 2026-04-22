import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  GraduationCap,
  FolderKanban,
  Award,
  User2,
  PlayCircle,
  Sparkles,
  ArrowLeft,
  LayoutGrid,
  Gamepad2,
} from "lucide-react";

const profile = {
  name: "Alan Akandzhi",
  role: "Game Design and Development Candidate",
  headline:
    "Game designer with technical foundations in C++, C#, Unreal Engine, and Unity.",
  intro:
    "I build game-focused work across gameplay systems, prototyping, level flow, and structured design documentation. This portfolio is designed to present my work clearly, show how I think, and make each project easy to understand fast.",
  email: "akandzhialan@gmail.com",
  github: "https://github.com/AlanAkandzhi",
  linkedin: "https://www.linkedin.com/in/alan-akandzhi-24487b344/",
};

const education = [
  {
    school: "University of Agder",
    degree: "B.Sc. Academic Esports & Game Technologies",
    date: "2022 - 2025 · Graduated",
    thesis: "Behind the Screen: How to Build and Run an Esports Team",
    learned: [
      "Game creation and prototyping",
      "Esports management and event organization",
      "Leadership in competitive gaming environments",
      "Project collaboration in game-focused contexts",
    ],
  },
  {
    school: "Varna Free University",
    degree: "B.Sc. Informatics & Computer Science",
    date: "Expected Summer 2026",
    thesis:
      "Application of Machine Learning Methods in Network Attack Detection Systems",
    learned: [
      "C++, Python, and software development foundations",
      "Web development and frontend implementation",
      "Systems, networking, and technical problem solving",
      "Broader computer science foundations for interactive software",
    ],
  },
];

const certifications = [
  {
    title: "Epic Games Game Design Specialization",
    org: "Epic Games",
    learned:
      "Built stronger foundations in game design structure, documentation, and practical design thinking for player experience.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/AJUXXI1EOXH0",
  },
  {
    title: "C++ Programming for Unreal Game Development",
    org: "University of Colorado Colorado Springs",
    learned:
      "Strengthened my C++ foundations for game development, including programming structure, problem solving, and Unreal-related technical thinking.",
    link: "https://www.coursera.org/account/accomplishments/specialization/VS27OG6HMDWD",
  },
  {
  title: "C# Programming for Unity Game Development",
  org: "University of Colorado Colorado Springs",
  learned:
    "Strengthened my C# foundations for Unity game development, including scripting, technical problem solving, and gameplay-oriented implementation.",
  link: "https://www.coursera.org/account/accomplishments/specialization/4DWY0YFVQ1KD",
 },
  {
    title: "World Design for Video Games",
    org: "California Institute of the Arts",
    learned:
      "Improved my understanding of world building, spatial design, player guidance, and how environment supports game feel and exploration.",
    link: "https://www.coursera.org/account/accomplishments/verify/1AWJDD9QNZ9C",
  },
  {
    title: "Story and Narrative Development for Video Games",
    org: "California Institute of the Arts",
    learned:
      "Improved my understanding of narrative structure, story development, and how game storytelling supports player experience and progression.",
    link: "https://www.coursera.org/account/accomplishments/verify/5A78A7AS4TD8",
  },
  {
    title: "Artificial Intelligence in Unreal Engine 5",
    org: "Packt",
    learned:
      "Learned more about AI-related systems and implementation concepts in Unreal Engine 5.",
    link: "https://www.coursera.org/account/accomplishments/verify/JZ3YZ9AYT9ZZ",
  },
  {
    title: "Video Game Design: Create a Competitive Design Portfolio",
    org: "Udemy",
    learned:
      "Improved my understanding of how to present design work clearly, structure portfolio pieces, and communicate design intent.",
    link: "https://www.udemy.com/certificate/UC-02c2c17d-a608-406c-a677-d133e239de37/",
  },
  {
    title: "Modern Game Design Mastery with AI",
    org: "AI CERTs®",
    learned:
      "Explored design workflows, idea generation, and ways AI can support structured game design work.",
    link: "https://www.coursera.org/account/accomplishments/verify/USHF1HDPRM51",
  },
];

const projects = [
  {
    slug: "false-exit",
    title: "False Exit",
    category: "Featured Case Study",
    role: "Game Design / Level Design / Prototype Concept",
    tech: ["Unreal Engine 5", "Game Design", "Level Design", "Documentation"],
    summary:
      "A first-person horror prototype built around fake exits, chase pressure, and readable environmental danger.",
    homepageBlurb:
      "My strongest design case study so far. Built around pressure, deceptive navigation, readability, and a small but well-defined horror prototype structure.",
    accent: "from-amber-500/20 via-red-500/10 to-transparent",
    heroLabel: "AAA-inspired featured project",
    tiles: [
      "Pressure-driven horror",
      "Deceptive navigation",
      "Readable danger",
      "Prototype structure",
    ],
    buttons: [
      { label: "Open Pitch Deck", href: "/files/false-exit/False_Exit_Game_Proposal_Pitch.pdf" },
      { label: "Open GDD", href: "/files/false-exit/False_Exit_GDD.pdf" },
      { label: "Open Level Design Snapshot", href: "/files/false-exit/False_Exit_Level_Design.pdf" },
      { label: "Open Level Design Document", href: "/files/false-exit/False_Exit_Level_Design_Document.pdf" },
    ],
    sections: [
      {
        heading: "Project Overview",
        text:
          "False Exit is a short first-person horror prototype built around one clear idea: the player is under constant pressure, and even the exit cannot be trusted. The project combines chase tension, deceptive navigation, route recovery, and a second phase that shifts pressure from speed to careful footing.",
      },
      {
        heading: "High Concept",
        text:
          "The player wakes inside a hostile maze and must keep moving while a monster closes in. Dynamic obstacles force dodges, fake exits waste precious seconds, and surviving Level 1 unlocks a harsher second level built around unstable floors.",
      },
      {
        heading: "Core Design Pillars",
        bullets: [
          "Pressure-driven horror that constantly pushes the player forward",
          "Readable danger so failures feel understandable rather than random",
          "Short but memorable structure with strong moments and clear identity",
        ],
      },
      {
        heading: "Gameplay Loop",
        bullets: [
          "Enter the maze and understand the immediate objective",
          "Dodge hazards and move under monster pressure",
          "Read exits and identify the true route",
          "Shift into a harsher second phase built around unstable floors",
          "Restart fast, learn fast, and improve route reading",
        ],
      },
      {
        heading: "Level Design Thinking",
        text:
          "The level is built to feel unfair at first glance, but readable once the player understands the logic of the space. The design uses landmarks, cleaner framing for the true route, fake exits as false relief, and pacing that moves from curiosity to discomfort, pressure, and relief.",
      },
      {
        heading: "Readability and Fairness",
        bullets: [
          "Fake exits should feel believable, but not share the full visual language of the real exit",
          "Hazards should telegraph before impact so surprise never becomes unreadable failure",
          "Important turns receive stronger light and cleaner framing to support fast route reading",
          "The real exit acts as the clearest final payoff landmark in the space",
        ],
      },
      {
        heading: "Playtesting and Iteration",
        bullets: [
          "Early testing showed the atmosphere worked, but route readability became weaker under stress",
          "The second fake exit originally felt too similar to the real exit and was adjusted",
          "Hazard telegraphs in Hazard Zone B were improved for better readability",
          "One key junction was decluttered and a moving blocker was retimed to reward reaction instead of memorization",
        ],
      },
      {
        heading: "What This Project Shows",
        bullets: [
          "Spatial readability and route guidance",
          "Blockout-first level design thinking",
          "Atmosphere balanced with player-facing clarity",
          "Structured documentation across GDD, LDD, pitch, and snapshot presentation",
          "Iteration based on playtest feedback and clarity fixes",
        ],
      },
    ],
    gallery: [
      { title: "Main Hall mood shot", src: "/pictures/false-exit/main-hall.png" },
      { title: "Corridor framing toward exit silhouette", src: "/pictures/false-exit/corridor-exit.png" },
      { title: "Large-space readability view", src: "/pictures/false-exit/readability-view.png" },
      { title: "Top-down prototype blockout", src: "/pictures/false-exit/blockout-topdown.png" },
      { title: "Low-angle sightline and tension view", src: "/pictures/false-exit/sightlines.png" },
      { title: "Route logic diagram", src: "/pictures/false-exit/logic.png" },
    ],
  },
  {
    slug: "rogue-defense",
    title: "Rogue Defense",
    category: "Gameplay Prototype",
    role: "Gameplay Design / Programming",
    tech: ["C#", "raylib-cs", "Gameplay Systems", "Balancing"],
    summary:
      "A tower defense prototype focused on wave pressure, tower identity, and player decision-making.",
    homepageBlurb:
      "A more systems-focused project showing combat pressure, difficulty structure, tower variety, and complete prototype thinking.",
    accent: "from-sky-500/20 via-white/5 to-transparent",
    heroLabel: "Gameplay systems",
    repo: "https://github.com/AlanAkandzhi/RogueDefense.git",
    sections: [
      {
        heading: "Project Focus",
        text:
          "Rogue Defense is a playable tower defense prototype designed around escalating wave pressure, distinct tower roles, survival gameplay, and player-driven placement decisions.",
      },
      {
        heading: "What I Worked On",
        bullets: [
          "Multiple tower archetypes with different gameplay roles",
          "Wave progression and difficulty balancing",
          "Player placement and base defense flow",
          "UI and complete playable prototype structure",
        ],
      },
      {
        heading: "What It Shows",
        bullets: [
          "Gameplay systems thinking",
          "Balancing and role differentiation",
          "Combat pressure through increasing wave complexity",
          "End-to-end prototype execution",
        ],
      },
    ],
    gallery: [
      { title: "Rogue Defense screenshot", src: "/pictures/rogue-defense/rogue_defense.png" },
    ],
  },
  {
    slug: "arena-clash",
    title: "Arena Clash",
    category: "Combat Prototype",
    role: "Gameplay Programming / Systems",
    tech: ["C++", "Combat Logic", "Modular Systems", "CMake"],
    summary:
      "A C++ combat prototype exploring encounter flow, hero selection, and modular gameplay logic.",
    homepageBlurb:
      "A smaller but useful project for showing technical structure, modular logic, and combat-flow foundations.",
    accent: "from-rose-500/20 via-white/5 to-transparent",
    heroLabel: "Combat and logic",
    repo: "https://github.com/AlanAkandzhi/Arena_Clash.git",
    sections: [
      {
        heading: "Project Focus",
        text:
          "Arena Clash is a text-based combat prototype built in C++. It focuses on encounter structure, hero selection, combat actions, and cleaner modular system organization.",
      },
      {
        heading: "What I Worked On",
        bullets: [
          "Combat flow and encounter structure",
          "Hero selection and gameplay actions",
          "Modular entities and utility logic",
          "Code organization and maintainability",
        ],
      },
      {
        heading: "What It Shows",
        bullets: [
          "C++ foundations for gameplay logic",
          "Combat-oriented systems thinking",
          "Clearer code organization through modular setup",
          "A technical base that supports my gameplay design direction",
        ],
      },
    ],
    gallery: [
      { title: "Arena Clash screenshot", src: "/pictures/arena-clash/arena_clash.png" },
    ],
  },
  {
    slug: "maokai",
    title: "MaokAI",
    category: "Group Project",
    role: "Product Thinking / Research / Strategy",
    tech: ["Research", "Strategy", "Collaboration", "Product Thinking"],
    summary:
      "A university group project exploring an AI-powered coaching tool for League of Legends players, with work across research, strategy, and product thinking.",
    homepageBlurb:
      "This supports my Production positioning by showing teamwork, product thinking, research, and structured strategic work.",
    accent: "from-emerald-500/20 via-white/5 to-transparent",
    heroLabel: "Team and product work",
    repo: "https://github.com/AlanAkandzhi/MaokAI.git",
    sections: [
      {
        heading: "Project Focus",
        text:
          "MaokAI explored an AI-powered coaching concept for League of Legends players. The project focused on product framing, market understanding, monetization thinking, and collaborative research work.",
      },
      {
        heading: "What I Contributed",
        bullets: [
          "Market research",
          "Competitor analysis",
          "Monetization strategy",
          "Strategic thinking around user value and positioning",
        ],
      },
      {
        heading: "Why It Matters",
        bullets: [
          "Supports my Production fit",
          "Shows teamwork and group project execution",
          "Shows product and business awareness in gaming",
          "Adds a stronger non-programming dimension to the portfolio",
        ],
      },
    ],
    gallery: [
      { title: "MaokAI logo", src: "public/pictures/maokai/maokAI.png" },
    ],
  },
  {
    slug: "web-portfolio",
    title: "Web Portfolio",
    category: "Frontend Project",
    role: "Frontend / Personal Branding",
    tech: ["React", "Tailwind", "Vite", "UI"],
    summary:
      "A personal portfolio rebuilt to present projects more clearly, improve first impressions, and support game-focused applications.",
    homepageBlurb:
      "A supporting project that shows frontend implementation, structure, and stronger presentation of my work.",
    accent: "from-violet-500/20 via-white/5 to-transparent",
    heroLabel: "Presentation and frontend",
    sections: [
      {
        heading: "Project Focus",
        text:
          "This site is built to present my projects more clearly, improve first impressions, and position me more strongly for game-related applications.",
      },
    ],
    gallery: [],
  },
];

function SectionHeading(props) {
  const Icon = props.icon;

  return (
    <div className="mb-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-300">
        <Icon className="h-3.5 w-3.5" />
        {props.eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {props.title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
        {props.subtitle}
      </p>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

function NoiseBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(251,191,36,0.08),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:80px_80px]" />
    </>
  );
}

function ActionButton({ children, href, onClick, variant = "primary" }) {
  const base =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition";
  const styles =
  variant === "primary"
    ? "bg-white hover:bg-zinc-200 font-semibold"
    : "border border-white/15 bg-zinc-900/80 text-white hover:bg-zinc-800 font-semibold";

  if (href) {
    return (
  <a
    href={href}
    target={href.startsWith("http") || href.startsWith("/files/") ? "_blank" : undefined}
    rel="noreferrer"
    className={`${base} ${styles}`}
    style={variant === "primary" ? { color: "#000" } : undefined}
  >
    {children}
  </a>
);
  }

 return (
  <button
    onClick={onClick}
    className={`${base} ${styles}`}
    type="button"
    style={variant === "primary" ? { color: "#000" } : undefined}
  >
    {children}
  </button>
);

}

function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <div className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100 backdrop-blur-sm">
        <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent}`}>
          <div className="aspect-[16/10] bg-zinc-950/60 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                {project.heroLabel}
              </span>
              <PlayCircle className="h-5 w-5 text-amber-300" />
            </div>
            <div className="flex h-full flex-col justify-end">
              <p className="text-sm text-zinc-300">{project.category}</p>
              <h3 className={`mt-2 font-semibold text-white ${featured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300">
                {featured ? project.homepageBlurb : project.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionButton onClick={() => onOpen(project.slug)}>Open Project</ActionButton>
            {project.repo ? <ActionButton href={project.repo} variant="secondary">Repo</ActionButton> : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FalseExitLogicCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-amber-300">
          <LayoutGrid className="h-4 w-4" />
          Route logic and player flow
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/80 p-3">
          <img
            src="/pictures/false-exit/logic.png"
            alt="False Exit logic diagram"
            className="w-full rounded-[1.25rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function FalseExitShowcase() {
  const items = [
    {
      title: "Main Hall readability",
      text: "Cold bloom, fog, and large landmarks establish orientation before the player commits to a route.",
      src: "/pictures/false-exit/main-hall.png",
    },
    {
      title: "Exit framing",
      text: "A bright corridor target creates temptation while the surrounding darkness preserves tension.",
      src: "/pictures/false-exit/corridor-exit.png",
    },
    {
      title: "Blockout overview",
      text: "The top-down prototype blockout shows large decision spaces, landmarks, and route logic.",
      src: "/pictures/false-exit/blockout-topdown.png",
    },
    {
      title: "Sightlines and tension",
      text: "Columns, half-walls, and open lanes conceal information while still preserving readability.",
      src: "/pictures/false-exit/sightlines.png",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
          <div className="p-0">
            <div className="aspect-[16/10] bg-zinc-900/80 p-3">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <NoiseBackground />

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        <ActionButton onClick={onBack} variant="secondary">
          <span className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </span>
        </ActionButton>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-300">
              <Gamepad2 className="h-3.5 w-3.5" />
              {project.category}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.buttons?.map((button) => (
                <ActionButton key={button.label} href={button.href} variant="secondary">
                  {button.label}
                </ActionButton>
              ))}
              {project.repo ? (
                <ActionButton href={project.repo}>Open Repository</ActionButton>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
            <div className="p-6">
              <p className="text-sm text-zinc-400">Role</p>
              <p className="mt-1 text-xl font-semibold text-white">{project.role}</p>

              <div className="mt-6 space-y-3">
                {(project.tiles || project.tech).slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.slug === "false-exit" ? (
          <section className="mt-10 grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
              <div className="aspect-[16/8] bg-gradient-to-br from-red-950/80 via-zinc-950 to-black p-8 md:p-10">
                <div className="flex h-full flex-col justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-300">
                    Featured design case study
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-white md:text-5xl">
                      False Exit
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
                      A liminal horror chase through fake exits, shifting hazards, and collapsing floors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <FalseExitLogicCard />
            <FalseExitShowcase />
          </section>
        ) : null}

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {project.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{section.heading}</h3>
                {section.text ? (
                  <p className="mt-4 text-sm leading-8 text-zinc-300">{section.text}</p>
                ) : null}
                {section.bullets ? (
                  <div className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4 text-sm leading-7 text-zinc-300"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <SectionHeading
            icon={LayoutGrid}
            eyebrow="Project Assets"
            title="Visual and supporting material"
            subtitle="This area holds screenshots, diagrams, and supporting visuals for each project."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100"
              >
                <div className="aspect-[16/10] bg-zinc-900/80 p-3">
                  <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                    <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const featuredProject = projects[0];
  const secondaryProjects = useMemo(() => projects.slice(1), []);
  const currentProject = projects.find((p) => p.slug === activeProject);

  if (currentProject) {
    return <ProjectDetail project={currentProject} onBack={() => setActiveProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <NoiseBackground />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-xs text-zinc-400">{profile.role}</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#education" className="transition hover:text-white">Education</a>
            <a href="#certifications" className="transition hover:text-white">Certifications</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-20 md:grid-cols-[1.08fr_0.92fr] md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              AAA-inspired game portfolio
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {profile.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton href="#projects">View Projects</ActionButton>
              <ActionButton href="#about" variant="secondary">About Me</ActionButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton href={profile.github} variant="secondary">GitHub</ActionButton>
              <ActionButton href={profile.linkedin} variant="secondary">LinkedIn</ActionButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ProjectCard project={featuredProject} onOpen={setActiveProject} featured />
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            icon={User2}
            eyebrow="About Me"
            title="Why I chose this field"
            subtitle="Why I chose games, what drives me, and what I want to keep building."
          />

          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
              <div className="p-7 text-sm leading-8 text-zinc-300 md:text-base">
                I chose this field because games combine everything I enjoy most:
                creativity, structure, systems, problem solving, and player experience.
                I am especially drawn to the part where ideas become playable. That means
                turning concepts into mechanics, documenting them clearly, iterating on
                what works, and improving what does not.
                <br />
                <br />
                My background combines game-focused study, technical coursework, project
                work, lab support, and esports environments. That mix pushed me toward
                gameplay design because it sits at the intersection of design thinking,
                technical understanding, and interactive experience.
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100">
              <div className="p-7">
                <p className="mb-4 text-sm font-medium text-white">What I want to keep building</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Gameplay Systems",
                    "Combat Design",
                    "Quest and Level Flow",
                    "Level Design",
                    "Game Design",
                    "Prototyping",
                    "Design Documentation",
                    "Player Experience",
                    "C++",
                    "C#",
                    "Python",
                    "Unreal Engine",
                    "Unity",
                  ].map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            icon={FolderKanban}
            eyebrow="Projects"
            title="Selected work"
            subtitle="Selected work across game design, gameplay prototypes, and team-based product thinking."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={setActiveProject} />
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            icon={GraduationCap}
            eyebrow="Education"
            title="Academic background"
            subtitle="Academic background, key focus areas, and the topics that shaped my direction."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100"
              >
                <div className="p-6">
                  <p className="text-sm text-zinc-400">{item.date}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-amber-300">{item.school}</p>
                  <p className="mt-3 text-sm text-zinc-400">Thesis topic: {item.thesis}</p>
                  <div className="mt-5 space-y-2 text-sm text-zinc-300">
                    {item.learned.map((point) => (
                      <p key={point}>• {point}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            icon={Award}
            eyebrow="Certifications"
            title="Relevant certifications"
            subtitle="Relevant certifications, what I learned from them, and direct links to the credentials."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 text-zinc-100"
              >
                <div className="p-6">
                  <p className="text-sm text-zinc-400">{cert.org}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{cert.learned}</p>
                  <div className="mt-5">
                    <ActionButton href={cert.link} variant="secondary">
                      View Certificate
                    </ActionButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-24">
          <SectionHeading
            icon={Mail}
            eyebrow="Contact"
            title="Get in touch"
            subtitle="Email, LinkedIn, and GitHub in one clean place."
          />

          <div className="flex flex-wrap gap-4">
            <ActionButton href={`mailto:${profile.email}`}>Email Me</ActionButton>
            <ActionButton href={profile.linkedin} variant="secondary">
              LinkedIn Profile
            </ActionButton>
            <ActionButton href={profile.github} variant="secondary">
              GitHub Profile
            </ActionButton>
          </div>
        </section>
      </main>
    </div>
  );
}