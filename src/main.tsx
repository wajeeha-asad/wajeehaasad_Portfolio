import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type IconName =
  | 'github'
  | 'linkedin'
  | 'arrow'
  | 'play'
  | 'download'
  | 'left'
  | 'right'
  | 'mail'
  | 'phone'
  | 'external'
  | 'check'
  | 'spark'
  | 'chevron'
  | 'send'
  | 'globe'

function Icon({
  name,
  size = 18,
}: {
  name: IconName
  size?: number
}) {
  const paths: Record<IconName, React.ReactNode> = {
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.2 4 5 5 0 0 0 19.1.1S17.8-.3 15 1.7a13.4 13.4 0 0 0-6 0C6.2-.3 4.9.1 4.9.1A5 5 0 0 0 4.8 4 5.4 5.4 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),

    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    play: <path d="m8 5 11 7-11 7V5Z" />,

    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),

    left: <path d="m15 18-6-6 6-6" />,

    right: <path d="m9 18 6-6-6-6" />,

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    ),

    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    spark: (
      <>
        <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3Z" />
        <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
      </>
    ),

    chevron: <path d="m9 18 6-6-6-6" />,

    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />
      </>
    ),
  }

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/* =========================================================
   PROJECTS
   ========================================================= */

const projects = [
  {
    title: 'NeuraTrack',
    tag: 'AI / FULL STACK',
    desc: 'A production-deployed learning and productivity platform with learning paths, focus sessions, analytics, streaks, achievements and an AI companion.',
    tech: ['React 19', 'FastAPI', 'PostgreSQL', 'Supabase'],
    rating: 5,
    match: '99%',
    episode: 'FEATURED / 01',
    tone: 'neura',
    image: '/assets/projects/neuratrack.PNG',
    github: 'https://github.com/wajeeha-asad/NeuraTrack',
    live: 'https://neuratrack-app.vercel.app',
  },

  {
    title: 'Skill Gap Predictor',
    tag: 'AI / CAREER INTELLIGENCE',
    desc: 'An interpretable career-readiness tool covering 21 career paths, priority skill gaps, personalized roadmaps and project recommendations.',
    tech: ['Python', 'Flask', 'scikit-learn', 'AI'],
    rating: 5,
    match: '98%',
    episode: 'FEATURED / 02',
    tone: 'skill',
    image: '/assets/projects/skill_gap_predictor.PNG',
    github: 'https://github.com/wajeeha-asad/skill-gap-predictor',
    live: 'https://skill-gap-predictor.vercel.app',
  },

  {
    title: 'Luxe & Latte',
    tag: 'FRONTEND / EDITORIAL UI',
    desc: 'A premium coffee-shop landing experience built around typography, visual hierarchy, responsive layouts and polished interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    rating: 3,
    match: '94%',
    episode: 'FEATURED / 03',
    tone: 'coffee',
    image: '/assets/projects/luxe-latte.PNG',
    github:
      'https://github.com/wajeeha-asad/Luxe-Latte-Premium-Coffee-Experience',
    live:
      'https://wajeeha-asad.github.io/Luxe-Latte-Premium-Coffee-Experience/',
  },

  {
    title: 'Velora',
    tag: 'FRONTEND / E-COMMERCE',
    desc: 'A cinematic luxury fashion e-commerce experience with editorial storytelling, shopping bag, wishlist, themes and product collections.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    rating: 3,
    match: '95%',
    episode: 'FEATURED / 04',
    tone: 'velora',
    image: '/assets/projects/velora.PNG',
    github: 'https://github.com/wajeeha-asad/velora-digital-atelier',
    live: 'https://velora-atelier-e-com.vercel.app',
  },

  {
    title: 'Student Performance Prediction',
    tag: 'ML / DATA SCIENCE',
    desc: 'End-to-end ML web application predicting final exam scores from academic, attendance, lifestyle and activity information.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Streamlit'],
    rating: 2,
    match: '91%',
    episode: 'FEATURED / 05',
    tone: 'data',
    image: '/assets/projects/student-performance.PNG',
    github:
      'https://github.com/wajeeha-asad/student-performance-prediction',
    live:
      'https://ml-student-performance-prediction.streamlit.app',
  },
]

/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    name: 'Python',
    percent: 92,
    group: 'Programming',
  },
  {
    name: 'Machine Learning',
    percent: 86,
    group: 'AI / ML',
  },
  {
    name: 'Generative AI',
    percent: 80,
    group: 'AI / ML',
  },
  {
    name: 'FastAPI',
    percent: 84,
    group: 'Backend',
  },
  {
    name: 'React',
    percent: 86,
    group: 'Frontend',
  },
  {
    name: 'JavaScript',
    percent: 84,
    group: 'Frontend',
  },
  {
    name: 'SQL / PostgreSQL',
    percent: 80,
    group: 'Data',
  },
  {
    name: 'Canva',
    percent: 90,
    group: 'Design',
  },
  {
    name: 'Git / GitHub',
    percent: 90,
    group: 'Tools',
  },
  {
    name: 'Tailwind CSS',
    percent: 82,
    group: 'Frontend',
  },
  {
    name: 'Figma',
    percent: 78,
    group: 'Design',
  },
  {
    name: 'RAG / Embeddings',
    percent: 72,
    group: 'GenAI',
  },
  {
    name: 'Docker / Cloud',
    percent: 66,
    group: 'DevOps',
  },
  {
    name: 'Adobe Illustrator',
    percent: 90,
    group: 'Design',
  },
]

/* =========================================================
   PROCESS
   ========================================================= */

const processSteps = [
  {
    n: '01',
    title: 'Discover',
    text: 'Understand the problem, users and constraints before choosing a stack.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Turn requirements into a clear interface, flow and visual direction.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Engineer the product with clean components, APIs, data and validation.',
  },
  {
    n: '04',
    title: 'Refine',
    text: 'Test, measure, polish and ship an experience that feels intentional.',
  },
]

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  p,
  index,
}: {
  p: (typeof projects)[number]
  index: number
}) {
  return (
    <article className={`netflix-card ${p.tone}`}>
      <div className="poster-wrap">
        <img
          src={p.image}
          alt={`${p.title} project preview`}
        />

        <div className="poster-vignette" />

        <div className="poster-meta">
          <span>{p.match} MATCH</span>
          <span>{p.tag}</span>
        </div>

        <div className="poster-actions">
          <a
            className="poster-play"
            href={p.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${p.title} live project`}
          >
            <Icon name="play" size={14} />
          </a>

          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>
      </div>

      <div className="netflix-card-body">
        <div className="netflix-card-title">
          <h3>{p.title}</h3>
          <span>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="netflix-line">
          <span>{p.match} Match</span>
          <span>2026</span>
          <span>{p.episode}</span>
        </div>

        <p>{p.desc}</p>

        <div className="chips">
          {p.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div
          className="stars"
          aria-label={`${p.rating} out of 5`}
        >
          {'★'.repeat(p.rating)}
          <span>
            {'★'.repeat(5 - p.rating)}
          </span>
        </div>

        <div className="project-links">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={13} />
            Source
          </a>

          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="globe" size={13} />
            Live project
          </a>
        </div>
      </div>
    </article>
  )
}

/* =========================================================
   SKILL CARD
   ========================================================= */

function SkillCard({
  s,
  index,
}: {
  s: (typeof skills)[number]
  index: number
}) {
  return (
    <article className="skill-card">
      <div className="skill-index">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="skill-card-top">
        <div>
          <span className="skill-group">
            {s.group}
          </span>

          <h3>{s.name}</h3>
        </div>

        <strong>{s.percent}%</strong>
      </div>

      <div className="bar">
        <span
          style={{
            width: `${s.percent}%`,
          }}
        />
      </div>

      <p>
        {s.percent >= 90
          ? 'Advanced'
          : s.percent >= 80
            ? 'Strong working knowledge'
            : s.percent >= 70
              ? 'Working knowledge'
              : 'Growing skill'}
      </p>
    </article>
  )
}

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null
      setHovering(Boolean(target?.closest('a, button, .netflix-card, .skill-card')))
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${hovering ? 'is-hovering' : ''}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    >
      <span />
    </div>
  )
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  const projectRef =
    useRef<HTMLDivElement>(null)

  const skillRef =
    useRef<HTMLDivElement>(null)

  const processRef =
    useRef<HTMLElement>(null)

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [activeGroup, setActiveGroup] =
    useState('All')

  const [activeProcess, setActiveProcess] =
    useState(0)

  const [formState, setFormState] =
    useState<'idle' | 'sending'>('idle')

  const scroll = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    setMenuOpen(false)
  }

  const move = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: number,
  ) => {
    ref.current?.scrollBy({
      left: direction * 380,
      behavior: 'smooth',
    })
  }

  const groups = useMemo(
    () => [
      'All',
      'AI / ML',
      'Backend',
      'Frontend',
      'Design',
    ],
    [],
  )

  const filtered =
    activeGroup === 'All'
      ? skills
      : skills.filter(
          (s) =>
            s.group === activeGroup ||
            (activeGroup === 'AI / ML' &&
              s.group === 'GenAI'),
        )

  useEffect(() => {
    const onScroll = () => {
      const el = processRef.current

      if (!el) return

      const r =
        el.getBoundingClientRect()

      const p = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight * 0.5 - r.top) /
            (r.height * 0.72),
        ),
      )

      setActiveProcess(
        Math.min(
          3,
          Math.floor(p * 4.2),
        ),
      )
    }

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true },
    )

    onScroll()

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll,
      )
    }
  }, [])

  return (
    <div className="app">
      <CustomCursor />

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="nav">
        <a
          className="brand"
          href="#home"
          aria-label="Wajeeha Asad home"
        >
          WA<span>.</span>
        </a>

        <nav>
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['projects', 'Projects'],
            ['skills', 'Skills'],
            ['process', 'Process'],
            ['experience', 'Experience'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scroll(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <a
            aria-label="GitHub"
            href="https://github.com/wajeeha-asad"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
          </a>

          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/wajeehaasad"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
          </a>

          <a 
            href="/assets/Wajeehaasad_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <Icon
              name="download"
              size={15}
            />
          </a>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['projects', 'Projects'],
            ['skills', 'Skills'],
            ['process', 'Process'],
            ['experience', 'Experience'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scroll(id)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <main>

        {/* ===================================================
            HERO
            =================================================== */}

        <section
          id="home"
          className="hero"
        >
          <div
            className="hero-bg"
            aria-hidden="true"
          >
            <img
              src="/assets/hero-wajeeha.png"
              alt=""
            />

            <div className="hero-shade" />
          </div>

          <div className="hero-copy">
            <div className="hero-panel">

              <div className="eyebrow">
                AI ENGINEER IN PROGRESS ·
                FULL-STACK DEVELOPER
              </div>

              <h1>
                Wajeeha <em>Asad</em>
              </h1>

              <h2>
                Computer Science Student
                <i />
                AI Engineer & Full-Stack
                Developer
              </h2>

              <p>
                I build intelligent products
                with clean engineering,
                thoughtful interfaces and a
                strong belief that technology
                should make life better.
              </p>

              <div className="actions">
                <button
                  className="primary"
                  onClick={() =>
                    scroll('projects')
                  }
                >
                  <Icon
                    name="play"
                    size={16}
                  />
                  Explore My Work
                </button>

                <button
                  className="secondary"
                  onClick={() =>
                    scroll('contact')
                  }
                >
                  Let’s Talk
                  <Icon
                    name="arrow"
                    size={16}
                  />
                </button>
              </div>

              <div className="hero-stats">
                <span>
                  <b>3.80</b>
                  <small>CGPA</small>
                </span>

                <span>
                  <b>6+</b>
                  <small>Projects</small>
                </span>

                <span>
                  <b>12+</b>
                  <small>CORE SKILLS</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-side-note">
            <span>CODE</span>
            <span>DESIGN</span>
            <span>BUILD</span>
            <span>IMPACT</span>
            <i />
          </div>

          <div
            className="hero-scroll"
            onClick={() => scroll('about')}
          >
            SCROLL TO EXPLORE
            <span>↓</span>
          </div>
        </section>

        {/* ===================================================
            ABOUT
            IMPORTANT: ABOUT IS BEFORE PROJECTS
            =================================================== */}

        <section
          id="about"
          className="section about"
        >
          <div className="about-photo">
            <img
              src="/assets/avatar-3d.png"
              alt="3D avatar of Wajeeha Asad"
            />

            <div className="photo-tag">
              DESIGN + ENGINEERING
            </div>
          </div>

          <div className="about-copy">
            <div className="section-kicker">
              <span />
              ABOUT ME
            </div>

            <h2>
              More Than Just <em>Code</em>
            </h2>

            <p>
              I’m a Computer Science
              undergraduate at The Women
              University, Multan, focused on
              AI/ML, backend engineering and
              full-stack product development.
              I enjoy taking an idea from
              experimentation to a useful,
              polished experience.
            </p>

            <div className="about-facts">
              <div>
                <strong>2023–27</strong>
                <span>
                  BS Computer Science
                </span>
              </div>

              <div>
                <strong>
                  3.80 / 4.00
                </strong>
                <span>
                  Current CGPA
                </span>
              </div>

              <div>
                <strong>
                  AI → Product
                </strong>
                <span>
                  Long-term direction
                </span>
              </div>
            </div>

            <a
              className="text-link"
              href="https://www.linkedin.com/in/wajeehaasad"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <Icon
                name="arrow"
                size={15}
              />
            </a>
          </div>
        </section>

        {/* ===================================================
            PROJECTS
            =================================================== */}

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <span />
                NETFLIX-STYLE SHOWCASE
              </div>

              <h2>
                Featured <em>Projects</em>
              </h2>

              <p className="section-sub">
                A collection of projects built with curiosity, 
                creativity and code. 
                <br></br>
                View the live demos or dive into the source code.
              </p>
            </div>

            <a
              href="https://github.com/wajeeha-asad"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <Icon
                name="external"
                size={15}
              />
            </a>
          </div>

          <div className="netflix-row-shell">
            <button
              className="carousel-control left"
              onClick={() =>
                move(projectRef, -1)
              }
              aria-label="Previous projects"
            >
              <Icon name="left" />
            </button>

            <div
              className="netflix-row"
              ref={projectRef}
            >
              {projects.map((p, i) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  index={i}
                />
              ))}
            </div>

            <button
              className="carousel-control right"
              onClick={() =>
                move(projectRef, 1)
              }
              aria-label="Next projects"
            >
              <Icon name="right" />
            </button>
          </div>
        </section>

        {/* ===================================================
            SKILLS
            SLIDING CARDS
            =================================================== */}

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <span />
                SKILLSET
              </div>

              <h2>
                Tools I <em>Think In</em>
              </h2>

              <p className="section-sub">
                From Python and AI to modern web technologies, 
                these are the tools I use to
                <br></br>
                build practical, 
                intelligent, and meaningful digital experiences.
              </p>
            </div>
          </div>

          <div className="filter-row">
            {groups.map((g) => (
              <button
                className={
                  activeGroup === g
                    ? 'active'
                    : ''
                }
                key={g}
                onClick={() =>
                  setActiveGroup(g)
                }
              >
                {g}
              </button>
            ))}
          </div>

          <div className="skills-carousel-wrap">
            <button
              className="carousel-control left"
              onClick={() =>
                move(skillRef, -1)
              }
              aria-label="Previous skills"
            >
              <Icon name="left" />
            </button>

            <div
              className="skills-row"
              ref={skillRef}
            >
              {filtered.map((s, i) => (
                <SkillCard
                  key={s.name}
                  s={s}
                  index={i}
                />
              ))}
            </div>

            <button
              className="carousel-control right"
              onClick={() =>
                move(skillRef, 1)
              }
              aria-label="Next skills"
            >
              <Icon name="right" />
            </button>
          </div>

          <div className="slider-hint">
            <span>
              DRAG TO EXPLORE
            </span>

            <i />

            <span>
              {filtered.length} CARDS
            </span>
          </div>
        </section>

        {/* ===================================================
            PROCESS
            =================================================== */}

        <section
          id="process"
          className="process-md"
          ref={processRef}
        >
          <div className="process-inner">

            <div className="process-intro">
              <div className="process-badge">
                HOW I WORK
              </div>

              <h2>
                From idea to a{' '}
                <span>
                  real solution.
                </span>
              </h2>

              <p>
                I keep the process simple and
                visible: understand the problem,
                shape the experience, build the
                system, then refine what ships.
              </p>

              <div className="scribble">
                scroll through the process ↘
              </div>
            </div>

            <div className="process-line-bg" />

            <div
              className="process-line-fill"
              style={{
                height: `${Math.max(
                  8,
                  ((activeProcess + 1) / 4) *
                    100,
                )}%`,
              }}
            />

            <div className="process-cards">
              {processSteps.map(
                (s, i) => (
                  <article
                    key={s.n}
                    className={`process-ticket ${
                      activeProcess === i
                        ? 'active'
                        : ''
                    } process-${i}`}
                  >
                    <div className="ticket-hole">
                      <span />
                    </div>

                    <div className="ticket-inner">
                      <span className="process-number">
                        {s.n}
                      </span>

                      <h3>{s.title}</h3>

                      <p>{s.text}</p>

                      <div className="ticket-foot">
                        <span>
                          {i === 0
                            ? 'RESEARCH'
                            : i === 1
                              ? 'DIRECTION'
                              : i === 2
                                ? 'ENGINEERING'
                                : 'QUALITY'}
                        </span>

                        <Icon
                          name="check"
                          size={14}
                        />
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>

            <div className="process-end">
              better systems, better
              experiences.
            </div>
          </div>
        </section>

        {/* ===================================================
            EXPERIENCE
            =================================================== */}

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <span />
                EXPERIENCE & LEADERSHIP
              </div>

              <h2>
                Building Beyond{' '}
                <em>Projects</em>
              </h2>
            </div>
          </div>

          <div className="experience-grid">

            <article className="timeline-card">
              <span className="timeline-dot" />

              <div className="timeline-meta">
                2026 — PRESENT
              </div>

              <h3>
                Independent Technology /
                Software Projects
              </h3>

              <p>
                Developing practical AI/ML,
                Python, backend, full-stack and
                frontend projects; deploying
                publicly, documenting with GitHub,
                and learning through real product
                iteration.
              </p>

              <div className="mini-tags">
                <span>AI / ML</span>
                <span>Backend</span>
                <span>Product</span>
                <span>Cloud</span>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-dot" />

              <div className="timeline-meta">
                UNIVERSITY
              </div>

              <h3>
                Event Organizer Society
              </h3>

              <p>
                Contributed to event planning,
                logistics, team communication and
                academic/social events at
                university.
              </p>

              <div className="mini-tags">
                <span>Teamwork</span>
                <span>Planning</span>
                <span>Communication</span>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-dot" />

              <div className="timeline-meta">
                UNIVERSITY
              </div>

              <h3>
                Media Club Society
              </h3>

              <p>
                Supported content creation,
                promotional materials, media
                coverage and social publicity for
                events.
              </p>

              <div className="mini-tags">
                <span>Creative</span>
                <span>Media</span>
                <span>Design</span>
              </div>
            </article>

            <article className="timeline-card accent-card">
              <span className="timeline-meta">
                DESIGN + CREATIVE
              </span>

              <h3>
                Graphic Design Experience
              </h3>

              <p>
                Branding, logos, social graphics,
                posters, UI layouts, typography
                and visual hierarchy using Figma,
                Illustrator and Canva.
              </p>

              <a
                href="mailto:techwithwajeeha@gmail.com?subject=Design%20collaboration"
              >
                Collaborate
                <Icon
                  name="arrow"
                  size={15}
                />
              </a>
            </article>

          </div>
        </section>

        {/* ===================================================
            CERTIFICATIONS
            =================================================== */}

        <section
          className="section certifications"
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <span />
                CERTIFICATIONS & RECOGNITION
              </div>

              <h2>
                Proof of <em>Progress</em>
              </h2>
            </div>
          </div>

          <div className="cert-grid">

            <article>
              <span className="cert-icon">
                BCG
              </span>

              <div>
                <span className="timeline-meta">
                  FORAGE
                </span>

                <h3>
                  BCG GenAI Job Simulation
                </h3>

                <p>
                  Practical work covering data
                  extraction/initial analysis and
                  an AI-powered financial chatbot.
                </p>
              </div>

              <span className="verified">
                ✓
              </span>
            </article>

            <article>
              <span className="cert-icon">
                H
              </span>

              <div>
                <span className="timeline-meta">
                  ACADEMIC
                </span>

                <h3>
                  Honhaar Scholarship
                </h3>

                <p>
                  Scholarship recipient during
                  undergraduate Computer Science
                  studies.
                </p>
              </div>

              <span className="verified">
                ✓
              </span>
            </article>

            <article>
              <span className="cert-icon">
                TX
              </span>

              <div>
                <span className="timeline-meta">
                  TECH EVENTS
                </span>

                <h3>
                  TECHXPO · Conferences · AI Events
                </h3>

                <p>
                  Participated in university
                  technology conferences and had
                  an abstract published in the
                  TECHXPO Abstract Book.
                </p>
              </div>

              <span className="verified">
                ✓
              </span>
            </article>

          </div>
        </section>

        {/* ===================================================
            CURRENTLY LEARNING
            =================================================== */}

        <section className="section learning">
          <div className="learning-inner">

            <div>
              <div className="section-kicker">
                <span />
                CURRENTLY LEARNING
              </div>

              <h2>
                Always in <em>Beta.</em>
              </h2>

              <p>
                Machine learning evaluation,
                reliable RAG pipelines, embeddings,
                LLM applications, AI agents, FastAPI
                architecture, Docker/cloud deployment
                and AI product development.
              </p>
            </div>

            <div className="learning-cloud">
              {[
                'RAG',
                'LLM Apps',
                'AI Agents',
                'Embeddings',
                'FastAPI',
                'AI SaaS',
              ].map((x) => (
                <span key={x}>
                  {x}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================
            CONTACT
            =================================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-heading">

            <div className="section-kicker">
              <span />
              CONTACT
            </div>

            <h2>
              Let’s make
              <br />
              <em>
                something useful.
              </em>
            </h2>

            <p>
              Use the form to send me a project
              idea, collaboration request,
              internship opportunity or just say
              hello.
            </p>

            <div className="contact-links">

              <a href="mailto:techwithwajeeha@gmail.com">
                <Icon name="mail" />
                techwithwajeeha@gmail.com
              </a>

              <a href="https://www.linkedin.com/in/wajeehaasad" target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                LinkedIn
              </a>

            </div>
          </div>

          <form
            className="contact-form"
            action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={() => setFormState('sending')}
          >

            <input
              type="hidden"
              name="_subject"
              value="New portfolio inquiry — Wajeeha Asad"
            />

            <input
              type="text"
              name="_gotcha"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-row">

              <label>
                Name

                <input
                  name="name"
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                Email

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </label>

            </div>

            <div className="form-row">

              <label>
                Company / Organization

                <input
                  name="company"
                  placeholder="Optional"
                />
              </label>

              <label>
                Project type

                <select
                  name="project_type"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                  >
                    Select one
                  </option>

                  <option>
                    AI / ML
                  </option>

                  <option>
                    Full-stack development
                  </option>

                  <option>
                    Frontend / UI
                  </option>

                  <option>
                    Design
                  </option>

                  <option>
                    Internship / opportunity
                  </option>

                  <option>
                    Other
                  </option>
                </select>
              </label>

            </div>

            <label>
              Message

              <textarea
                name="message"
                required
                placeholder="Tell me what you’re building..."
              />
            </label>

            <div className="form-footer">

              <span>
                
              </span>
              <button
                className="primary"
                type="submit"
                disabled={
                  formState === 'sending'
                }
              >
                {formState === 'sending'
                  ? 'Sending…'
                  : 'Send message'}

                <Icon
                  name="send"
                  size={15}
                />
              </button>

            </div>

          </form>
        </section>
      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer>

        <div className="footer-brand">
          <a
            className="brand"
            href="#home"
          >
            WA<span>.</span>
          </a>

          <p>
            AI Engineer in Progress · Python
            Developer · Full-Stack Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#process">
            Process
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        <div className="footer-contact">

          <a href="mailto:techwithwajeeha@gmail.com">
            techwithwajeeha@gmail.com
          </a>

          <a
            href="https://github.com/wajeeha-asad"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/wajeehaasad"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Wajeeha Asad
          </span>

          <span>
            Designed + engineered with
            intention.
          </span>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  )
}

createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)