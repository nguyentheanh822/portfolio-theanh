export default function About() {
  return (
    <div className="page-container page-transition">
      <header className="page-header">
        <h1>About <span className="accent">Me</span></h1>
      </header>

      <div className="content-section">
        <h2 className="content-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
          Nguyễn Thế Anh
        </h2>
        <p className="content-desc" style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
          AI engineer with a strong foundation in Natural Language Processing (NLP), Computer Vision (CV), Generative AI (GenAI). I am seeking an opportunity to apply my knowledge to real-world projects.
        </p>

        <div className="content-row" style={{ gridTemplateColumns: '1fr' }}>
          <div className="content-label" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '16px' }}>
            Core Focus
          </div>
          <ul className="content-list" style={{ marginTop: 0 }}>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision (CV)</li>
            <li>Generative AI (GenAI)</li>
            <li>Multimodal AI Systems</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
