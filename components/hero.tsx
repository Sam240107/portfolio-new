'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, Code2 } from 'lucide-react'
import { Reveal } from '@/components/portfolio-shell'

export function Hero() {
  return <section id="home" className="hero section-wrap">
    <div className="hero-topline"><span className="eyebrow">A CURIOUS MIND. A CREATIVE DEVELOPER.</span><span className="availability"><i /> OPEN TO OPPORTUNITIES</span></div>
    <div className="hero-grid">
      <div className="hero-copy">
        <Reveal><div className="hero-intro"><span className="little-line" /> Hey there, I&apos;m Shamuthrika</div></Reveal>
        <Reveal delay={0.08}><h1>A little logic.<br />A lot of <span className="magic-word">magic<svg viewBox="0 0 310 20" aria-hidden="true"><path d="M4 13 Q145 -3 302 8 M16 18 Q154 8 287 15" /></svg></span><span className="title-dot">.</span></h1></Reveal>
        <Reveal delay={0.16}><p className="hero-description">I&apos;m a full-stack engineer who turns <em>complex ideas</em> into digital experiences that feel clear, useful, and a little bit magical.</p></Reveal>
        <Reveal delay={0.24}><div className="hero-actions"><a className="pill-button dark-button" href="#work">Explore my work <ArrowUpRight size={20} /></a><a href="/shamuthrika-resume.pdf" className="resume-link" target="_blank" rel="noreferrer">My résumé <ArrowDown size={17} /></a></div></Reveal>
        <Reveal delay={0.3}><div className="hero-socials"><a href="https://github.com/Sam240107" target="_blank" rel="noreferrer" aria-label="Shamuthrika on GitHub"><span className="social-label">GitHub <ArrowUpRight size={13} /></span></a><a href="https://www.linkedin.com/in/shamuthrika-s-p-6a2108313" target="_blank" rel="noreferrer" aria-label="Shamuthrika on LinkedIn"><span className="social-label">LinkedIn <ArrowUpRight size={13} /></span></a><span className="social-divider" /><span>Based in Chennai, India</span></div></Reveal>
      </div>
      <motion.div className="portrait-stage" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }}>
        <div className="portrait-orbit" aria-hidden="true" /><div className="portrait-orbit second-orbit" aria-hidden="true" />
        <Asterisk className="hero-asterisk" size={70} strokeWidth={1.25} aria-hidden="true" />
        <motion.div className="portrait-image avatar-image"><Image src="/images/shamuthrika-avatar-cut.png" alt="Illustrated avatar of Shamuthrika" width={1136} height={1385} priority sizes="(max-width: 700px) 90vw, 480px" /></motion.div>
        <div className="portrait-note">nice to meet you!<ArrowDownRight size={35} strokeWidth={1.2} /></div>
        <div className="code-sticker"><Code2 size={26} strokeWidth={1.6} /><span>Made of curiosity<br /><strong>& diet coke.</strong></span></div>
        <div className="builder-sticker"><Asterisk size={21} strokeWidth={1.5} aria-hidden="true" /> BUILDER AT HEART</div>
        <span className="tiny-spark spark-one" aria-hidden="true">+</span><span className="tiny-spark spark-two" aria-hidden="true">+</span>
      </motion.div>
    </div>
  </section>
}
