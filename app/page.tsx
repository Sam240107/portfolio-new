import { PortfolioShell, SkillMarquee } from '@/components/portfolio-shell'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { AboutExperience } from '@/components/about-experience'
import { Contact } from '@/components/contact'

export default function Page() {
  return <PortfolioShell><main id="main"><Hero /><SkillMarquee /><Projects /><AboutExperience /><Contact /></main></PortfolioShell>
}
