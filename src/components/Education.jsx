export default function Education() {
  return (
    <div className="page-container page-transition">
      <header className="page-header">
        <h1>Education <span className="accent">& Honors</span></h1>
      </header>

      <div className="content-section">
        <div className="content-row">
          <div className="content-label">Sep 2022 - Jun 2026</div>
          <div>
            <h2 className="content-title">Saigon International University</h2>
            <div className="content-subtitle">BS in Artificial Intelligence</div>
            <ul className="content-list">
              <li>GPA: 3.4/4.0</li>
              <li>Full 4-year Scholarship (100% tuition fee)</li>
            </ul>
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Nov 2025</div>
          <div>
            <h2 className="content-title">Potential Prize</h2>
            <div className="content-subtitle">Final Round, AI Challenge 2025</div>
            <p className="content-desc">
              Awarded for the project: "Cross Segment Coherence Scorer: A Training Free Temporal Framework for Multimodal Video Retrieval."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
