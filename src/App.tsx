import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Compass,
  Database,
  Grid2X2,
  Network,
  RefreshCw,
  TimerReset,
  Search,
  Bot,
  Brain,
  Quote,
  CheckCircle2,
  GraduationCap,
  Rocket,
  Users,
  ArrowUpRight,
  UserPlus,
  Layers,
  Briefcase,
  Building,
  Wand2,
  TrendingUp,
  ShieldCheck,
  Gem,
  BarChart3,
} from 'lucide-react'
import './App.css'

const slides = [
  [
    'TEC DE MONTERREY / 2026',
    'El aprendizaje no termina cuando encontramos la respuesta.',
    'Una solución educativa que transforma el conocimiento explícito en comprensión duradera: recuperar, practicar y conectar ideas hasta convertirlas en esquemas que guían el pensamiento.',
  ],
  [
    '02 / THE MEMORY PARADOX',
    'Oakley’s “Memory Paradox” — Why Our Brains Need Knowledge in an AI Era',
    'Barbara Oakley’s “Memory Paradox” describes the counterintuitive situation where, as external tools like AI and calculators become more capable, our internal memory systems risk atrophy, undermining reasoning, expertise, and long-term learning. Like the article explains: the more we offload knowledge to digital aids, the less we exercise and strengthen our own declarative and procedural memory systems. This creates a structural cognitive paradox: technology should augment human capability, but overreliance can ero',
  ],
  [
    'SLIDE 3 | WHAT HAPPENS WHEN AI REPLACES PART OF OUR COGNITIVE EFFORT?',
    'Your Brain on ChatGPT',
    'A study by MIT Media Lab researchers found measurable differences in brain activity, memory and sense of authorship depending on the tool used for writing.',
  ],
  [
    'INTRODUCING',
    'Introducing',
    '',
  ],
  [
    'CLOSING | WHAT IS HUMAN OS?',
    'An AI-powered ecosystem of capabilities',
    'Human OS turns manuals, policies, playbooks and other source material into atomic, verifiable Engrams, organized into a connected knowledge structure.',
  ],
  [
    'TEC 360 | THE TEC IS WITH YOU',
    'A lifelong relationship with Tec',
    "Your relationship with Tec evolves with you: we're with you while you study, when you start your career, whenever you need to upskill, and when you're ready to give back.",
  ],
  [
    'DEMO',
    'Human OS Demo',
    '',
  ],
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]
  const moveSlide = (direction: number) =>
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') moveSlide(1)
      if (event.key === 'ArrowLeft') moveSlide(-1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="presentation-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <img className="tec360-topbar-logo" src="/tec360.png" alt="Tec 360" />
          <span className="brand-mark">
            <Compass size={18} />
          </span>
          <span>TEC360</span>
        </div>
        <p className="differentiator-tag">We teach one to one, not one to many.</p>
        <div className="topbar-meta">
          <span>MONTERREY</span>
          <span className="meta-divider" />
          <span>SCREEN 01</span>
        </div>
        <button className="icon-button" type="button" aria-label="View all slides">
          <Grid2X2 size={19} />
        </button>
      </header>

      <section className="slide" aria-label={`Slide ${activeSlide + 1}`}>
        {activeSlide === 1 ? (
          <div className="memory-slide-content">
            <div className="memory-heading">
              <div>
                <p className="eyebrow">{slide[0]}</p>
                <h1 key={activeSlide}>{slide[1]}</h1>
              </div>
              <p className="memory-lead">{slide[2]}</p>
            </div>
            <div className="concept-grid">
              <article className="concept-card">
                <span className="concept-icon">
                  <BrainCircuit size={22} />
                </span>
                <div>
                  <h2>Cognitive offloading</h2>
                  <p>
                    Delegating information to devices reduces immediate effort, but overreliance
                    can weaken the formation of internal memory.
                  </p>
                </div>
              </article>
              <article className="concept-card">
                <span className="concept-icon">
                  <Database size={22} />
                </span>
                <div>
                  <h2>Engrams</h2>
                  <p>
                    The physical trace left by learning: neural connections that grow stronger
                    each time an idea is retrieved and used.
                  </p>
                </div>
              </article>
              <article className="concept-card">
                <span className="concept-icon">
                  <Network size={22} />
                </span>
                <div>
                  <h2>Schemata</h2>
                  <p>
                    Mental frameworks that organize what has been learned and allow us to recognize
                    patterns, transfer knowledge and solve problems.
                  </p>
                </div>
              </article>
              <article className="concept-card">
                <span className="concept-icon">
                  <RefreshCw size={22} />
                </span>
                <div>
                  <h2>Retrieval practice</h2>
                  <p>
                    Actively recalling, rather than just rereading, reactivates connections and turns
                    knowledge into lasting understanding.
                  </p>
                </div>
              </article>
              <article className="concept-card">
                <span className="concept-icon">
                  <TimerReset size={22} />
                </span>
                <div>
                  <h2>Spaced learning</h2>
                  <p>
                    Spreading practice over time strengthens retention and avoids the illusion of
                    mastery produced by cramming.
                  </p>
                </div>
              </article>
            </div>
            <p className="source-note">
              Source:{' '}
              <a
                href="https://papers.cnl.salk.edu/PDFs/Memory%20Paradox_%20Why%20Our%20Brains%20Need%20Knowledge%20in%20an%20Age%20of%20AI%202025-4676.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Memory Paradox: Why Our Brains Need Knowledge in an Age of AI
              </a>{' '}
              — Barbara Oakley, Michael Johnston, Ken-Zen Chen, Eulho Jung and Terrence Sejnowski.
            </p>
          </div>        ) : activeSlide === 5 ? (
          <div className="humanos-slide-content">
            <div className="humanos-heading">
              <p className="eyebrow">{slide[0]}</p>
              <h1 key={activeSlide}>{slide[1]}</h1>
              <p className="humanos-lead">{slide[2]}</p>
            </div>

            <div className="humanos-tec-section">
              <div className="humanos-tec-header">
                <span className="humanos-tec-eyebrow">Tec Companionship</span>
                <h2>The Tec is with you</h2>
                <p>
                  Your relationship with Tec evolves with you. We're with you while you study, when
                  you start your career, whenever you need to upskill, and when you're ready to
                  give back.
                </p>
                <a className="humanos-card-link" href="http://localhost:5180/tec-contigo" target="_blank" rel="noreferrer">
                  View full experience <ArrowUpRight size={14} />
                </a>
              </div>

              <video className="humanos-video-player" src="/EngramFinal.m4v" controls preload="metadata" />

              <div className="humanos-stage-grid">
                <article className="humanos-stage-card current-stage">
                  <div className="humanos-stage-top">
                    <span className="humanos-stage-number">01</span>
                    <span className="humanos-stage-icon">
                      <GraduationCap size={18} />
                    </span>
                  </div>
                  <h3>While you study</h3>
                  <p>Complete your academic stage, strengthen your knowledge and prepare for your next opportunity.</p>
                  <span className="humanos-stage-tag">You are here</span>
                </article>
                <article className="humanos-stage-card">
                  <div className="humanos-stage-top">
                    <span className="humanos-stage-number">02</span>
                    <span className="humanos-stage-icon">
                      <Rocket size={18} />
                    </span>
                  </div>
                  <h3>Start your career</h3>
                  <p>Turn your training and evidence into a professional transition with direction.</p>
                  <span className="humanos-stage-tag muted">Next stage</span>
                </article>
                <article className="humanos-stage-card">
                  <div className="humanos-stage-top">
                    <span className="humanos-stage-number">03</span>
                    <span className="humanos-stage-icon">
                      <RefreshCw size={18} />
                    </span>
                  </div>
                  <h3>Stay current</h3>
                  <p>Update your capabilities and respond to changes in your industry.</p>
                  <span className="humanos-stage-tag muted">Throughout your career</span>
                </article>
                <article className="humanos-stage-card">
                  <div className="humanos-stage-top">
                    <span className="humanos-stage-number">04</span>
                    <span className="humanos-stage-icon">
                      <Users size={18} />
                    </span>
                  </div>
                  <h3>Connect and contribute</h3>
                  <p>Turn your experience into knowledge, connections and opportunities for the Tec community.</p>
                  <span className="humanos-stage-tag muted">Throughout your life</span>
                </article>
              </div>

              <div className="humanos-audience-note">
                <span className="humanos-audience-icon">
                  <UserPlus size={18} />
                </span>
                <p>
                  These stages aren't just for people currently studying at Tec: they're also open to
                  moms, dads and anyone who wants to accompany or resume their learning, whether or
                  not they studied with us, even if they never finished high school or were never a
                  Tec student. The Tec is with you no matter where you are in your life.
                </p>
              </div>
            </div>
          </div>        ) : activeSlide === 2 ? (
          <div className="mit-slide-container mit-roomy">
            <div className="mit-header">
              <p className="eyebrow">{slide[0]}</p>
              <h1 className="mit-title">{slide[1]}</h1>
              <p className="mit-lab-credit">MIT Media Lab</p>
              <p className="mit-subtitle">{slide[2]}</p>
            </div>

            <div className="mit-section">
              <div className="mit-section-title">
                <h2>THE EXPERIMENT</h2>
                <span className="mit-section-badge">54 participants · EEG and authorship</span>
              </div>
              <div className="mit-cards-grid three-col">
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Brain size={18} /></span>
                    <h3>BRAIN ONLY</h3>
                  </div>
                  <p className="mit-card-body">No external tools.</p>
                  <p className="mit-card-result">→ Stronger brain networks and greater sense of authorship.</p>
                </div>
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Search size={18} /></span>
                    <h3>SEARCH ENGINE</h3>
                  </div>
                  <p className="mit-card-body">With access to a search engine.</p>
                  <p className="mit-card-result">→ Intermediate neural engagement, between brain-only and LLM.</p>
                </div>
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Bot size={18} /></span>
                    <h3>LLM</h3>
                  </div>
                  <p className="mit-card-body">With access to ChatGPT.</p>
                  <p className="mit-card-result">→ Weaker connectivity and greater difficulty quoting what was written.</p>
                </div>
              </div>
            </div>

            <div className="mit-stat-card">
              <div className="mit-stat-value">83.3%</div>
              <div className="mit-stat-info">
                <h4>of the LLM group could not quote a sentence from the essay they had just written.</h4>
                <p>
                  A small-sample preprint (54 participants, ages 18–39); it does not prove permanent
                  brain damage, but does suggest a possible cognitive cost of delegating writing to the LLM.{' '}
                  <a href="https://www.media.mit.edu/publications/your-brain-on-chatgpt/" target="_blank" rel="noreferrer">[media.mit.edu]</a>
                </p>
              </div>
            </div>

            <div className="mit-takeaway-box">
              <div className="mit-takeaway-header">
                <Quote size={20} className="mit-takeaway-quote-icon" />
                <span>EXECUTIVE TAKEAWAY</span>
              </div>
              <div className="mit-takeaway-quotes">
                <p className="takeaway-main">The evidence does not say that using AI reduces our intelligence.</p>
                <p className="takeaway-secondary">It does warn that delegating cognitive effort can reduce how much we process, remember and feel is our own.</p>
              </div>
            </div>

            <p className="mit-footer-note">
              <strong>Source:</strong> Nataliya Kosmyna et al., <em>Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task</em>, MIT Media Lab, 2025, arXiv:2506.08872.{' '}
              <a href="https://www.media.mit.edu/publications/your-brain-on-chatgpt/" target="_blank" rel="noreferrer">[media.mit.edu]</a>
            </p>
          </div>
        ) : activeSlide === 3 ? (
          <div className="presentamos-slide">
            <h1 key={activeSlide}>{slide[1]}</h1>
            <div className="presentamos-logo-row">
              <img className="presentamos-logo" src="/HumanOsLogo.png" alt="Human OS" />
              <img className="presentamos-logo" src="/tec360.png" alt="Tec 360" />
            </div>
            <p className="presentamos-note">
              This AI product is designed for enterprises, but we have adapted some modules to
              demonstrate a possible architecture and solution applied to Tec 360.
            </p>
          </div>
        ) : activeSlide === 4 ? (
          <div className="mit-slide-container hos-compact">
            <div className="mit-header">
              <p className="eyebrow">{slide[0]}</p>
              <h1 className="mit-title">{slide[1]}</h1>
              <p className="mit-subtitle">{slide[2]}</p>
            </div>

            <div className="mit-section">
              <div className="mit-section-title">
                <h2>AN INTEGRATED ECOSYSTEM OF AI CAPABILITIES</h2>
              </div>
              <div className="mit-cards-grid two-col">
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Layers size={18} /></span>
                    <h3>ENGRAM ACADEMY</h3>
                  </div>
                  <p className="mit-card-body">Personalized learning and progression toward mastery.</p>
                </div>
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Briefcase size={18} /></span>
                    <h3>HUMAN OS EMPLOYEE</h3>
                  </div>
                  <p className="mit-card-body">Personalized growth, demonstrated mastery and career progression.</p>
                </div>
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Building size={18} /></span>
                    <h3>HUMAN OS ENTERPRISE</h3>
                  </div>
                  <p className="mit-card-body">Role architecture and development paths.</p>
                </div>
                <div className="mit-card condition-card">
                  <div className="mit-card-header">
                    <span className="mit-card-icon"><Wand2 size={18} /></span>
                    <h3>ENGRAMS STUDIO</h3>
                  </div>
                  <p className="mit-card-body">Turns source material into learning experiences.</p>
                </div>
              </div>
            </div>

            <div className="mit-section">
              <div className="mit-section-title">
                <h2>HOW KNOWLEDGE BECOMES CAPABILITY</h2>
              </div>
              <p className="hos-highlight-note">
                A one-to-one experience, similar to a human one: employees can speak naturally with
                AI agents that understand their role, capabilities, goals, progress and organizational
                context, providing relevant guidance and teaching exactly when it's needed.
              </p>
            </div>

            <div className="mit-cards-grid two-col">
              <div className="mit-conclusion-card">
                <div className="mit-card-header">
                  <span className="mit-card-icon"><CheckCircle2 size={18} /></span>
                  <h3>WHY HUMAN OS IS DIFFERENT</h3>
                </div>
                <ul className="hos-list">
                  <li>One-to-one learning designed around each employee's role, résumé, gaps and goals.</li>
                  <li>Structured mastery journey, not free-form chatbot use.</li>
                  <li>Role and organizational context, not a generic learner profile.</li>
                  <li>Knowledge grounded in sources, not unsupported model answers.</li>
                  <li>Real retention and application, not passive completion.</li>
                </ul>
              </div>

              <div className="mit-limits-card">
                <div className="mit-card-header limits-header">
                  <span className="mit-card-icon"><BarChart3 size={18} /></span>
                  <h3>BUSINESS BENEFITS</h3>
                </div>
                <ul className="hos-list">
                  <li><TrendingUp size={13} /> Faster workforce readiness.</li>
                  <li><Gem size={13} /> Higher performance and real application of knowledge.</li>
                  <li><ShieldCheck size={13} /> Lower organizational risk and fewer errors.</li>
                  <li><Users size={13} /> Greater talent value: career, mobility and retention.</li>
                  <li><BarChart3 size={13} /> Measurable ROI: less wasted training spend.</li>
                </ul>
              </div>
            </div>

            <div className="mit-takeaway-box">
              <div className="mit-takeaway-header">
                <Quote size={20} className="mit-takeaway-quote-icon" />
                <span>IN ONE SENTENCE</span>
              </div>
              <div className="mit-takeaway-quotes">
                <p className="takeaway-main">Human OS doesn't replace human learning: it structures it.</p>
                <p className="takeaway-secondary">It turns organizational knowledge into demonstrated capability, one employee at a time.</p>
              </div>
            </div>
          </div>
        ) : activeSlide === 6 ? (
          <div className="presentamos-slide">
            <h1 key={activeSlide}>{slide[1]}</h1>
            <img className="presentamos-logo presentamos-logo-xl" src="/tec360.png" alt="Tec 360" />
          </div>
        ) : (
          <>
            <div className="slide-copy">
              <p className="eyebrow">{slide[0]}</p>
              <h1 key={activeSlide}>{slide[1]}</h1>
              <p className="description">{slide[2]}</p>
            </div>
            <div className="slide-art" aria-label="Logo Human OS">
              <img
                className="tec360-logo"
                src="/HumanOsLogo.png"
                alt="Human OS, always with you to maximize your human potential"
              />
            </div>
          </>
        )}
      </section>

      <footer className="bottom-bar">
        <div className="bottom-bar-row">
          <div className="progress">
            <span>
              0{activeSlide + 1} / 0{slides.length}
            </span>
            <div className="progress-track">
              <span style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }} />
            </div>
          </div>
          <div className="navigation">
            <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous slide">
              <ArrowLeft size={18} />
            </button>
            <span>0{activeSlide + 1}</span>
            <button type="button" onClick={() => moveSlide(1)} aria-label="Next slide">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <p className="confidential-note">Confidential · Prepared exclusively for Tec de Monterrey · Please do not share with third parties or vendors without Human OS authorization</p>
      </footer>
    </main>
  )
}

export default App
