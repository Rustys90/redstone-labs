import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import '../styles/tokens.css';
import './Portfolio.css';

type ProjectType = 'web' | 'mobile' | 'open-source';
type Filter = 'all' | ProjectType;

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  types: ProjectType[];
  status: string;
  links: ProjectLink[];
}

const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'open-source', label: 'Open source' },
];

const PROJECTS: Project[] = [
  {
    id: 'folio',
    name: 'Folio',
    tagline: 'Open-source Notion alternative',
    description:
      'A free, MIT-licensed workspace you own outright — fast block editor, nested pages, database table and kanban views, Ctrl+K command palette, realtime collaboration, and a Tauri desktop app. Local-first: everything is saved on your machine; sync is a bonus, not a requirement.',
    tags: ['TypeScript', 'React', 'TipTap', 'Yjs', 'Tauri'],
    types: ['open-source', 'web'],
    status: 'Open source',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Rustys90/folio' }],
  },
  {
    id: 'skillforge',
    name: 'SkillForge',
    tagline: 'The registry for AI agent skills',
    description:
      'A production registry of public SKILL.md files for Claude, Cursor, Codex, and more — with daily discovery from public GitHub, safety scanning before anything goes live, and one-command install.',
    tags: ['Next.js', 'PostgreSQL', 'Vercel', 'Three.js'],
    types: ['web', 'open-source'],
    status: 'Live',
    links: [
      { label: 'Visit live site', href: 'https://skillforge-jet-chi.vercel.app' },
      { label: 'Source on GitHub', href: 'https://github.com/Rustys90/skillforge' },
    ],
  },
  {
    id: 'mock-gps',
    name: 'Mock-GPS tools',
    tagline: 'Region-locked location tools for Android',
    description:
      'Land-only mock-location teleporters for the Falkland Islands and the Atlantic Islands — offline map tiles, strict persistent no-repeat placement, and jumps every few seconds. Shipped as installable APKs.',
    tags: ['Kotlin', 'Android', 'Offline mapping'],
    types: ['mobile'],
    status: 'Shipped',
    links: [],
  },
  {
    id: 'airlines-travel',
    name: 'Airlines Travel',
    tagline: 'Travel agency site with flight search',
    description:
      'A travel agency website with flight search, built on an Express backend with Supabase handling data and auth.',
    tags: ['Express', 'Supabase', 'TypeScript'],
    types: ['web'],
    status: 'Built',
    links: [],
  },
  {
    id: 'larp-wallet',
    name: 'Larp Wallet',
    tagline: 'Multi-skin wallet simulator',
    description:
      'A wallet simulator shipped as a progressive web app, with switchable skins that reskin the whole experience.',
    tags: ['PWA', 'Web'],
    types: ['web'],
    status: 'Built',
    links: [],
  },
  {
    id: 'dreamcore-landing',
    name: 'Dreamcore Landing',
    tagline: 'Immersive parallax landing page',
    description:
      'A dreamcore-styled landing page built around layered parallax and motion — atmosphere first, information second.',
    tags: ['Landing page', 'Motion design'],
    types: ['web'],
    status: 'Built',
    links: [],
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.types.includes(filter))),
    [filter],
  );

  return (
    <article className="portfolio">
      <header className="portfolio-hero">
        <Reveal>
          <p className="portfolio-eyebrow">Portfolio</p>
          <h1 className="portfolio-title">What I&apos;ve built so far.</h1>
          <p className="portfolio-lede">
            Real projects, shipped by one builder. Same approach every time: build it
            properly, put it out, see what happens.
          </p>
        </Reveal>
      </header>

      <Reveal>
        <div
          className="portfolio-filters"
          role="group"
          aria-label="Filter projects by type"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`portfolio-filter${filter === f.value ? ' is-active' : ''}`}
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <p className="portfolio-count" role="status" aria-live="polite">
        Showing {visible.length} of {PROJECTS.length} projects
      </p>

      <ul className="portfolio-grid" aria-label="Projects">
        {visible.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={(index % 3) * 80}>
              <article className="portfolio-card">
                <div className="portfolio-card-top">
                  <p className="portfolio-status">{project.status}</p>
                  <h2 className="portfolio-card-name">{project.name}</h2>
                  <p className="portfolio-card-tagline">{project.tagline}</p>
                </div>
                <p className="portfolio-card-desc">{project.description}</p>
                <ul className="portfolio-tags" aria-label={`Technologies used in ${project.name}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="portfolio-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="portfolio-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        {link.label}
                        <span aria-hidden="true">&nbsp;↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </article>
  );
}
