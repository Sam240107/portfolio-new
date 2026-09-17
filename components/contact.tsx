'use client'

import { FormEvent, useState } from 'react'
import { ArrowUp, ArrowUpRight, Asterisk, CornerDownLeft } from 'lucide-react'
import { Reveal, CopyEmail } from '@/components/portfolio-shell'

export function Contact() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('Ask about projects, skills, or how to get in touch.')
  const [isAsking, setIsAsking] = useState(false)
  async function ask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const submittedQuestion = question.trim()
    if (!submittedQuestion || isAsking) return
    setIsAsking(true)
    setAnswer('Thinking from the resume, projects, GitHub, and profile...')
    try {
      const response = await fetch('/api/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: submittedQuestion }) })
      const data = await response.json() as { answer?: string }
      setAnswer(data.answer || 'I could not find an answer just yet. Try asking about projects, skills, experience, or contact details.')
    } catch {
      setAnswer('The assistant is temporarily unavailable. Try asking about projects, skills, experience, or contact details.')
    } finally {
      setIsAsking(false)
    }
    setQuestion('')
  }
  return <><section className="terminal-section section-wrap" aria-label="Ask about Shamuthrika"><Reveal><div className="mini-terminal"><div className="terminal-bar"><span><i /><i /><i /></span><strong>ask-shamuthrika — terminal</strong><small>ONLINE</small></div><div className="terminal-body"><p><span>visitor@portfolio:~$</span> Ask anything.</p><p className="terminal-answer"><span>shamuthrika@portfolio:~$</span> {answer}</p><form onSubmit={ask}><label className="sr-only" htmlFor="portfolio-question">Ask a question</label><span>visitor@portfolio:~$</span><input id="portfolio-question" value={question} onChange={event => setQuestion(event.target.value)} placeholder="What would you like to know?" /><button aria-label="Submit question" type="submit"><CornerDownLeft size={17} /></button></form></div></div></Reveal></section><section id="contact" className="contact-section"><div className="section-wrap"><Reveal><div className="contact-top"><span className="eyebrow">04 / GOOD THINGS START WITH A HELLO</span><span className="availability"><i /> OPEN TO OPPORTUNITIES</span></div><div className="contact-heading"><h2>Have a little<br /><span className="serif-word">something in mind?</span></h2><a className="contact-arrow" href="mailto:shamuthrika240107@gmail.com" aria-label="Email Shamuthrika"><ArrowUpRight size={70} strokeWidth={1} /></a></div><div className="contact-bottom"><p>An idea, an opportunity, or just a good conversation.<br />I&apos;d love to hear from you.</p><div className="contact-email"><a href="mailto:shamuthrika240107@gmail.com">shamuthrika240107@gmail.com <ArrowUpRight size={19} /></a><CopyEmail /></div></div></Reveal></div><Asterisk className="contact-asterisk" size={200} strokeWidth={0.7} aria-hidden="true" /></section><footer className="footer section-wrap"><a href="#home" className="wordmark">shamuthrika<span className="logo-dot">.</span></a><span>Built with intention. And a little magic. © {new Date().getFullYear()}</span><div><a href="https://github.com/Sam240107" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/shamuthrika-s-p-6a2108313" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a></div></footer></>
}
