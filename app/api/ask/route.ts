import { NextResponse } from 'next/server'
import { projects } from '@/lib/portfolio-projects'

const profileContext = `
Shamuthrika S P is a Computer Science Engineering student at Chennai Institute of Technology in Chennai, graduating in 2028, with an 8.82 CGPA. She works across React, Next.js, TypeScript, Python, Node.js, SQL, MongoDB, Firebase, Flutter, Kotlin, AI APIs, NLP, OCR, and automation.
Experience: Data Analyst & QA Testing Intern at Dejavoo, Data Science Intern at GyanData, and Software Developer Intern at Fourth Dimension.
Achievements: 790+ LeetCode problems solved, Knight badge with a 2000+ peak rating, Top 2 in Tamil Nadu at ICPC AlgoQueen 2026, 59th nationally, and 4x hackathon finalist.
LinkedIn profile: https://www.linkedin.com/in/shamuthrika-s-p-6a2108313
Contact: shamuthrika240107@gmail.com
`

function fallbackAnswer(question: string) {
  const query = question.toLowerCase()
  if (query.includes('contact') || query.includes('email')) return 'You can reach Shamuthrika at shamuthrika240107@gmail.com. She is open to opportunities.'
  if (query.includes('project') || query.includes('build') || query.includes('github')) return 'The featured projects include Chemick, Sovereign AI, HealNet, PermitPro, CASCADE, and CivArt Guardian. Their GitHub repositories are linked directly in the project titles and source links above.'
  if (query.includes('skill') || query.includes('stack') || query.includes('tech')) return 'Her core stack includes React, Next.js, TypeScript, Python, Node.js, SQL, MongoDB, Firebase, Flutter, Kotlin, NLP, OCR, automation, and AI APIs.'
  if (query.includes('experience') || query.includes('resume') || query.includes('intern')) return 'Her experience includes internships at Dejavoo, GyanData, and Fourth Dimension, spanning QA automation, data science, NLP, SQL, and full-stack development.'
  return 'Ask about Shamuthrika\'s projects, GitHub work, skills, internships, achievements, LinkedIn profile, or contact details.'
}

async function getGithubContext() {
  try {
    const response = await fetch('https://api.github.com/users/Sam240107/repos?sort=updated&per_page=30', { headers: { Accept: 'application/vnd.github+json' }, next: { revalidate: 300 } })
    if (!response.ok) return 'GitHub data is temporarily unavailable.'
    const repositories = await response.json() as Array<{ name: string; description: string | null; language: string | null; html_url: string; updated_at: string }>
    return repositories.map(repository => `${repository.name}: ${repository.description || 'No description'} | ${repository.language || 'various technologies'} | updated ${repository.updated_at} | ${repository.html_url}`).join('\n')
  } catch {
    return 'GitHub data is temporarily unavailable.'
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { question?: string } | null
  const question = body?.question?.trim()
  if (!question) return NextResponse.json({ answer: 'Please ask a question about Shamuthrika.' }, { status: 400 })

  const githubContext = await getGithubContext()
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: fallbackAnswer(question) })

  const response = await fetch(process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', temperature: 0.2, messages: [
      { role: 'system', content: `Answer questions about Shamuthrika using only the supplied context. Be concise, warm, and specific. Do not invent experience, awards, project features, or personal details. Mention when information is not available.\n\nPROFILE AND RESUME:\n${profileContext}\n\nPROJECTS:\n${projects.map(project => `${project.name}: ${project.description} Features: ${project.features.join(', ')} Technologies: ${project.tags.join(', ')} Repository: https://github.com/Sam240107/${project.repo}`).join('\n')}\n\nLIVE GITHUB REPOSITORIES:\n${githubContext}` },
      { role: 'user', content: question },
    ] }),
  })
  if (!response.ok) return NextResponse.json({ answer: fallbackAnswer(question) })
  const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> }
  return NextResponse.json({ answer: data.choices?.[0]?.message?.content || fallbackAnswer(question) })
}
