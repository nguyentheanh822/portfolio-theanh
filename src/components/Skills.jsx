export default function Skills() {
  return (
    <div className="page-container page-transition">
      <header className="page-header">
        <h1>Tech <span className="accent">Skills</span></h1>
      </header>

      <div className="content-section">
        <div className="content-row">
          <div className="content-label">Languages</div>
          <div>
            <div className="content-subtitle">English (Professional), Vietnamese (Native)</div>
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Programming</div>
          <div className="project-card__techs" style={{ marginTop: 0 }}>
            {['Python', 'C', 'C++', 'Java', 'JavaScript'].map(t => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Frameworks & Libraries</div>
          <div className="project-card__techs" style={{ marginTop: 0 }}>
            {['PyTorch', 'TensorFlow', 'LlamaIndex', 'LangChain', 'FastAPI', 'Flask', 'React', 'Gradio'].map(t => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Tools & Infrastructure</div>
          <div className="project-card__techs" style={{ marginTop: 0 }}>
            {['Faiss', 'Qdrant', 'Milvus', 'Git', 'GitHub', 'GitLab CI/CD', 'Docker'].map(t => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
