import { ArrowRight, Check, FileText, HeartPulse, Landmark, Layers3, QrCode, ShieldCheck, Sparkles, Network, Zap, WifiOff } from 'lucide-react'

export function ProjectScene({ kind }: { kind: string }) {
  if (kind === 'healnet') return <div className="project-visual scene scene-healnet" aria-hidden="true">
    <div className="scene-brand"><HeartPulse /> healnet<span>YOUR POLICY, IN PLAIN LANGUAGE</span></div>
    <div className="document-stack"><FileText size={30} /><strong>Health policy</strong><span>Coverage · Benefits · Exclusions</span><i /><i /><i /><i /><div className="document-count">100+ pages</div></div>
    <div className="answer-card"><span className="scene-label"><Sparkles size={14} /> ASK YOUR POLICY</span><strong>What does my policy cover?</strong><div className="answer-lines"><i /><i /><i /></div><span className="citation"><Check size={13} /> Answers with section references</span></div>
    <span className="scene-footer">UPLOAD → RETRIEVE → UNDERSTAND</span>
  </div>
  if (kind === 'permitpro') return <div className="project-visual scene scene-permit" aria-hidden="true">
    <div className="scene-brand"><ShieldCheck /> permitpro<span>BETTER SYSTEMS. BETTER CITIES.</span></div>
    <div className="permit-pass"><div className="pass-header"><Landmark size={19} /><span>DIGITAL VENDOR PASS</span></div><div className="pass-qr"><QrCode size={91} strokeWidth={1.4} /></div><strong>Permission to thrive.</strong><span className="pass-status"><i /> ACTIVE · 1-HOUR PASS</span><div className="pass-zone">Assigned zone <Check size={14} /></div></div>
    <div className="portal-pills"><span>Vendor <Check size={13} /></span><span>Admin <Check size={13} /></span><span>Inspector <Check size={13} /></span></div><span className="scene-footer">ONE WORKFLOW. THREE PERSPECTIVES.</span>
  </div>
  if (kind === 'cascade') return <div className="project-visual scene scene-cascade" aria-hidden="true">
    <div className="scene-brand"><Network /> cascade<span>EXPLORE THE NEXT WHAT-IF.</span></div>
    <div className="cascade-console"><div className="console-bar"><span className="console-dot" /> COUNTERFACTUAL ENGINE <span>MODELLED</span></div><div className="node-pipeline"><span><Zap size={24} />Incident</span><ArrowRight /><span><Network size={25} />Propagation</span><ArrowRight /><span><ShieldCheck size={25} />Intervention</span></div><div className="scenario-rows"><span>Tamil Nadu grid<i /></span><span>Chennai hospital<i /></span><span>Data center UPS<i /></span></div><div className="resilience-line"><Layers3 size={16} /> Independent second-shock verification</div></div>
    <span className="scene-footer">SIMULATE. COMPARE. STRESS-TEST.</span>
  </div>
  return <div className="project-visual scene scene-civart" aria-hidden="true">
    <div className="scene-brand"><Landmark /> civart guardian<span>PRESERVING WHAT CONNECTS US.</span></div>
    <div className="heritage-disc"><Landmark size={104} strokeWidth={.8} /></div><div className="heritage-orbit" />
    <div className="heritage-report"><span className="scene-label">HERITAGE CARE</span><strong>Every detail<br />has a story.</strong><span>Observe <ArrowRight size={12} /> Report <ArrowRight size={12} /> Connect</span></div><div className="offline-chip"><WifiOff size={15} /> Online & offline</div><span className="scene-footer">BUILT FOR THE PLACES THAT MATTER.</span>
  </div>
}
