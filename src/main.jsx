import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Icon = ({ children, size=20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const Github = ({size=20}) => <Icon size={size}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4c.1-1.2.1-2.4-.1-3.5 0 0-1.2-.4-4 1.5a13.7 13.7 0 0 0-7.3 0C5.1.1 3.9.5 3.9.5A5.4 5.4 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.4-4.2-1.7"/><path d="M16 19c3 .9 3-1.4 4.2-1.7"/></Icon>;
const Linkedin = ({size=20}) => <Icon size={size}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><path d="M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></Icon>;
const Mail = ({size=20}) => <Icon size={size}><path d="m3 5 9 7 9-7"/><rect x="3" y="5" width="18" height="14" rx="2"/></Icon>;
const Arrow = ({size=18}) => <Icon size={size}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon>;
const Spark = ({size=20}) => <Icon size={size}><path d="m12 3-1.4 5.1L6 10l4.6 1.9L12 17l1.4-5.1L18 10l-4.6-1.9L12 3Z"/><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z"/></Icon>;
const MenuIcon = ({size=22}) => <Icon size={size}><path d="M4 6h16M4 12h16M4 18h16"/></Icon>;

const projects = [
  {
    title: "HireSense AI",
    label: "GenAI • RAG • Resume Intelligence",
    text: "AI-powered resume analyzer and interview preparation system that compares resumes with job descriptions, identifies skill gaps, generates match insights, and creates personalized interview questions.",
    stack: ["Python", "FastAPI", "LangChain", "OpenAI API", "FAISS"],
  },
  {
    title: "AI Job Board",
    label: "Full Stack • AI Recommendations",
    text: "A job platform with secure authentication, REST APIs, AI-assisted job-description generation and personalized job recommendations for recruiters and job seekers.",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "GitHub Actions"],
  },
  {
    title: "AI Medical Platform",
    label: "AI Application • Frontend",
    text: "Team project focused on a modern AI-assisted medical experience. Contributed to the frontend, responsive interfaces, user flows, and integration-ready UI.",
    stack: ["React", "Vite", "REST APIs", "JavaScript"],
  }
];

const skills = [
  ["Python", "Backend & AI development"],
  ["FastAPI", "REST APIs & services"],
  ["Generative AI", "LLMs & AI applications"],
  ["RAG", "Grounded knowledge retrieval"],
  ["LangChain", "LLM application workflows"],
  ["LangGraph", "Agentic workflow orchestration"],
  ["FAISS", "Vector similarity search"],
  ["PostgreSQL", "Relational data & APIs"],
  ["Git / GitHub", "Version control & collaboration"],
];

function App() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">CA</span>
          <span>CHARAN<span className="accent">.</span></span>
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["home","about","skills","experience","projects","contact"].map((id) =>
            <button key={id} onClick={() => scrollTo(id)}>{id[0].toUpperCase()+id.slice(1)}</button>
          )}
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu"><MenuIcon/></button>
        <a className="nav-cta" href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact")}}>Let's Talk <Arrow size={16}/></a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="grid-glow"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>BUILDING THE<br/><span className="gradient">INTELLIGENCE</span><br/>BEHIND THE WEB.</h1>
            <p className="hero-sub">I'm <strong>Charan Annangi</strong>, a fresher GenAI Developer focused on building practical AI applications, intelligent APIs, and RAG-powered experiences with Python.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("projects")}>Explore My Work <Arrow/></button>
              <a className="secondary" href="mailto:charanannangi7@gmail.com"><Mail size={18}/> Contact Me</a>
            </div>
            <div className="mini-stats">
              <div><b>6+</b><span>Months GenAI Internship</span></div>
              <div><b>3+</b><span>AI / Full-Stack Projects</span></div>
              <div><b>8.0</b><span>B.Tech CGPA</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb orb-one"></div><div className="orb orb-two"></div>
            <div className="ai-card">
              <div className="card-top"><span>GENAI.DEV</span><span className="live">● LIVE</span></div>
              <div className="neural">
                <span className="node n1"></span><span className="node n2"></span><span className="node n3"></span>
                <span className="node n4"></span><span className="node n5"></span>
                <i className="line l1"></i><i className="line l2"></i><i className="line l3"></i><i className="line l4"></i>
                <div className="core"><Spark size={34}/><span>AI</span></div>
              </div>
              <div className="code-lines">
                <span><em>01</em> retrieval = vector_search(query)</span>
                <span><em>02</em> context = build_context(retrieval)</span>
                <span><em>03</em> response = llm.generate(context)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-tag">01 / ABOUT</div>
          <div className="section-grid">
            <div><h2>Curious by nature.<br/><span className="muted">Builder by choice.</span></h2></div>
            <div className="about-text">
              <p>I'm a Computer Science graduate who enjoys turning ideas into useful software. My current focus is Generative AI, backend development, and building applications that connect LLMs with real-world data.</p>
              <p>During my internship at <strong>Ignitz Solutions</strong>, I worked on AI-driven solutions and learned how to design APIs, retrieval pipelines, prompt workflows, and user-facing AI features.</p>
              <div className="about-pills"><span>Python</span><span>FastAPI</span><span>RAG</span><span>LLMs</span><span>APIs</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-tag">02 / SKILLS</div>
          <div className="skills-heading"><h2>THE TOOLS<br/><span className="gradient">I BUILD WITH.</span></h2><p>Focused on modern AI engineering, backend systems and developer workflows.</p></div>
          <div className="skills-grid">{skills.map(([name,desc],i)=><div className="skill-card" key={name}><span className="skill-num">0{i+1}</span><h3>{name}</h3><p>{desc}</p></div>)}</div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-tag">03 / EXPERIENCE</div>
          <div className="experience-card">
            <div className="exp-date">2026</div>
            <div><p className="role">GenAI Intern</p><h2>Ignitz Solutions</h2><p>Worked on AI-powered application development using Python, FastAPI, LangChain, OpenAI APIs and vector search. Built features around resume intelligence, job matching and interview preparation.</p><div className="exp-tags"><span>6 MONTHS</span><span>GENERATIVE AI</span><span>BACKEND</span></div></div>
          </div>
          <div className="education"><div><span>EDUCATION</span><h2>B.Tech — Computer Science & Engineering</h2><p>Gokula Krishna College of Engineering • CGPA 8.0</p></div><div className="edu-mark">CSE<br/>∞</div></div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-tag">04 / SELECTED WORK</div>
          <div className="projects-head"><h2>PROJECTS THAT<br/><span className="gradient">SOLVE PROBLEMS.</span></h2><p>Hands-on projects combining AI, APIs, data and user experience.</p></div>
          <div className="project-list">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="project-index">0{i+1}</div><div className="project-main"><div className="project-label">{p.label}</div><h3>{p.title}</h3><p>{p.text}</p><div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><Arrow size={28}/></article>)}</div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-glow"></div>
          <div className="section-tag">05 / CONTACT</div>
          <h2>LET'S BUILD<br/><span className="gradient">SOMETHING SMART.</span></h2>
          <p>I'm actively looking for entry-level opportunities in GenAI, Python backend development and AI engineering.</p>
          <div className="contact-actions"><a className="primary" href="mailto:charanannangi7@gmail.com"><Mail/> Email Me</a><a className="secondary" href="https://github.com/CHARAN785" target="_blank" rel="noreferrer"><Github/> GitHub</a><a className="secondary" href="https://www.linkedin.com/in/charan-annangi-b29b38349/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div>
        </section>
      </main>

      <footer><span>© 2026 CHARAN ANNANGI</span><span>GENAI DEVELOPER / PYTHON / AI</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
