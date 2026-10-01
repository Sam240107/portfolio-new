'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, MotionConfig, useScroll, useSpring } from 'motion/react'
import { ArrowUpRight, Menu, X, Asterisk, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

const links = [{ label: 'Home', href: '#home' }, { label: 'About', href: '#about' }, { label: 'Work', href: '#work' }, { label: 'Experience', href: '#experience' }]

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [motionPaused, setMotionPaused] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? 'paused' : 'running'
    return () => { delete document.documentElement.dataset.motion }
  }, [motionPaused])
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
    }, { rootMargin: '-20% 0px -55% 0px' })
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])

  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#main">Skip to content</a>
    <motion.div className="scroll-progress" style={{ scaleX }} />
    <header className="site-header">
      <div className="nav-inner">
        <a href="#home" className="wordmark" aria-label="Shamuthrika home">shamuthrika<span className="logo-dot">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? 'location' : undefined}>{link.label}<span /></a>)}</nav>
        <a href="mailto:shamuthrika240107@gmail.com" className="nav-contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[...links, { label: 'Contact', href: '#contact' }].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={20} /></a>)}</nav>}
    </header>
    <div className="portfolio-content">{children}</div>
    <button className="motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused} aria-label={motionPaused ? 'Resume ambient animations' : 'Pause ambient animations'}>{motionPaused ? <Play size={14} /> : <Pause size={14} />}<span>{motionPaused ? 'Motion off' : 'Motion on'}</span></button>
  </MotionConfig>
}

export function SkillMarquee() {
  const items = ['FULL-STACK DEVELOPMENT', 'CREATIVE PROBLEM SOLVING', 'AI & AUTOMATION', 'BUILT WITH CURIOSITY']
  return <div className="marquee" aria-label={items.join(', ')}><div className="marquee-track" aria-hidden="true">{[0, 1, 2, 3].map(copy => <div className="marquee-group" key={copy}>{items.map(item => <span key={item}>{item}<Asterisk size={27} strokeWidth={1.7} /></span>)}</div>)}</div></div>
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2500)
    return () => clearTimeout(timer)
  }, [copied])
  async function copy() {
    try { await navigator.clipboard.writeText('shamuthrika240107@gmail.com'); setCopied(true); setFailed(false) }
    catch { setFailed(true) }
  }
  return <div className="copy-email"><button onClick={copy}>{copied ? 'Copied to clipboard!' : 'Copy email address'} <span aria-hidden="true">{copied ? '✓' : '+'}</span></button><span className="sr-only" role="status">{copied ? 'Email address copied' : ''}</span>{failed && <small>Select and copy: shamuthrika240107@gmail.com</small>}</div>
}
