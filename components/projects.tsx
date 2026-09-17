'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, ArrowDownRight, ScanLine, ShieldCheck, FlaskConical, Sparkles, Check, AudioLines, LockKeyhole, ArrowRight, Plus } from 'lucide-react'
import { Reveal } from '@/components/portfolio-shell'
import { ProjectScene } from '@/components/project-scenes'
import { projects } from '@/lib/portfolio-projects'

function ChemickVisual() {
  return <div className="project-visual chemick-visual" aria-hidden="true">
    <div className="visual-heading"><FlaskConical size={22} /> chemick<span>Know what goes in.</span></div>
    <div className="chemick-orbit" /><div className="chemick-orbit orbit-two" />
    <div className="phone-mockup"><div className="phone-island" /><div className="phone-topline">9:41 <span>•••</span></div><div className="phone-brand"><FlaskConical size={16} /> Chemick</div><h4>A little scan.<br />A lot of clarity.</h4><p>Understand what&apos;s in your everyday.</p><div className="scanner-window"><div className="product-bottle"><div className="bottle-cap" /><div className="bottle-label">daily.<br /><small>VITAMIN C<br />IMMUNITY SUPPORT</small><span>30 TABLETS</span></div></div><span className="scan-line" /><ScanLine className="scanner-icon" size={130} strokeWidth={0.5} /></div><div className="phone-action"><ScanLine size={14} /> Scan a product</div><div className="phone-bottom"><span>Medicine care</span><span>Glow check</span></div></div>
    <div className="floating-result"><span className="result-icon"><Check size={17} /></span><div>Ingredients, understood.<small>AI-powered product insights</small></div><Sparkles size={16} /></div>
    <span className="visual-caption">AI VISION · 7 LANGUAGES</span><div className="voice-chip"><AudioLines size={19} /> Made to be heard.</div>
  </div>
}

function SovereignVisual() {
  return <div className="project-visual sovereign-visual" aria-hidden="true"><div className="visual-heading"><ShieldCheck size={23} /> sovereign<span>Autonomy. With boundaries.</span></div><div className="dashboard-mockup"><div className="dashboard-top"><ShieldCheck size={16} /><strong>SOVEREIGN</strong><span>CONTROL PLANE</span><i /></div><div className="dashboard-body"><div className="dashboard-sidebar"><span className="sidebar-selected">Overview</span><span>Agent console</span><span>Policy engine</span><span>Audit ledger</span><span>Attack lab</span><LockKeyhole size={22} /></div><div className="dashboard-main"><div className="dashboard-title">Your agents. Your rules.<span>All systems protected</span></div><div className="dashboard-stats"><div><small>Policy firewall</small><strong>Active <i /></strong></div><div><small>Human oversight</small><strong>Enabled</strong></div></div><div className="flow-label">EXECUTION PIPELINE</div><div className="agent-flow"><span><Sparkles size={22} />Intent</span><ArrowRight size={17} /><span className="flow-shield"><ShieldCheck size={24} />Policy check</span><ArrowRight size={17} /><span><Check size={23} />Execute</span></div><div className="audit-row"><span className="audit-check"><Check size={12} /></span>Transaction policy verified<span>ALLOW</span></div><div className="audit-row"><span className="audit-check"><LockKeyhole size={12} /></span>Audit receipt secured<span>HASHED</span></div></div></div></div><div className="security-chip"><ShieldCheck size={18} /> Trust is engineered. Not assumed.</div><span className="visual-caption">AGENTIC AI · FINANCIAL SECURITY</span></div>
}

export function Projects() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const updateActiveProject = () => {
    const gallery = galleryRef.current
    if (!gallery) return
    const centre = gallery.scrollLeft + gallery.clientWidth / 2
    let closest = 0
    let distance = Infinity
    Array.from(gallery.children).forEach((card, index) => {
      const cardCentre = (card as HTMLElement).offsetLeft + (card as HTMLElement).offsetWidth / 2
      const nextDistance = Math.abs(cardCentre - centre)
      if (nextDistance < distance) { distance = nextDistance; closest = index }
    })
    setActiveProject(closest)
  }
  return <section id="work" className="work-section section-wrap">
    <Reveal><div className="section-heading"><div><span className="eyebrow section-kicker"><span>01 /</span> THE PROJECT COLLECTION</span><h2>Ideas out in <span className="serif-word">the wild.</span></h2></div><p>From healthcare to heritage.<br />Real problems, explored through code.</p></div><div className="collection-intro"><span><strong>06</strong> featured builds</span><p>AI that explains. Systems that protect. Interfaces that connect.<br />Explore the problem, the approach, and the code behind each project.</p><span className="gallery-swipe-hint">DRAG OR SWIPE <ArrowDownRight size={17} strokeWidth={1.4} /></span></div></Reveal>
    <div ref={galleryRef} className="project-grid expanded-gallery" onScroll={updateActiveProject} aria-label="Swipe through featured projects">
      {projects.map((project, index) => <div key={project.id} className={activeProject === index ? 'gallery-card is-active' : 'gallery-card'}><article className="project detailed-project">
        <a className="project-image-link" href={`https://github.com/Sam240107/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Explore ${project.name} on GitHub`}>
          {project.id === 'chemick' ? <ChemickVisual /> : project.id === 'sovereign' ? <SovereignVisual /> : <ProjectScene kind={project.id} />}
          <span className="project-hover-arrow"><ArrowUpRight size={26} /></span>
        </a>
        <div className="project-body"><div className="project-meta"><span>0{index + 1} / {project.category}</span><span>{project.year}</span></div><div className="project-title"><h3>{project.name}</h3><a href={`https://github.com/Sam240107/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository on GitHub`}><ArrowUpRight size={25} strokeWidth={1.4} /></a></div><p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p>
          <div className="project-highlight"><Sparkles size={19} strokeWidth={1.5} /><div><strong>{project.highlight}</strong><span>{project.highlightLabel}</span></div></div>
          <ul className="project-features">{project.features.map(feature => <li key={feature}><Check size={15} strokeWidth={1.7} />{feature}</li>)}</ul>
          <ul className="tech-tags" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <details className="project-story"><summary>Inside the build<span className="sr-only">: {project.name}</span><Plus size={18} /></summary><div className="project-story-content"><h4>The problem</h4><p>{project.problem}</p><h4>The approach</h4><p>{project.approach}</p><p className="project-scope">{project.scope}</p></div></details>
          <div className="project-links"><a href={`https://github.com/Sam240107/${project.repo}`} target="_blank" rel="noreferrer">Explore source <ArrowUpRight size={17} /><span className="sr-only"> for {project.name}</span></a>{'live' in project && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={17} /></a>}</div>
        </div>
      </article></div>)}
    </div>
    <Reveal><div className="archive-heading"><h3>And a few more chapters.</h3><span>THE EXPERIMENT SHELF</span></div><div className="project-archive">{[{ name: 'DayFlow', repo: 'DayFlow---Odoo', label: 'BUSINESS APPLICATION', copy: 'A TypeScript-based human resource management project, exploring software for everyday workplace operations.', stack: 'TypeScript · HTML · CSS' }, { name: 'Inventory Management', repo: 'Inventory-Management', label: 'FULL-STACK FOUNDATIONS', copy: 'A foundational React inventory-management project, exploring the building blocks behind business stock-management tools.', stack: 'React · JavaScript · CSS' }].map(project => <a key={project.repo} href={`https://github.com/Sam240107/${project.repo}`} target="_blank" rel="noreferrer"><span className="eyebrow">{project.label}</span><h4>{project.name}<ArrowUpRight size={23} /></h4><p>{project.copy}</p><span className="archive-stack">{project.stack}</span></a>)}</div></Reveal>
    <div className="work-bottom"><span>Project details sourced from GitHub. Visuals are illustrative, not live screenshots.</span><a className="text-link" href="https://github.com/Sam240107?tab=repositories" target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={17} /></a></div>
  </section>
}
