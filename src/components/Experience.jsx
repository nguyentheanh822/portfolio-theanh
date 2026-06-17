export default function Experience() {
  return (
    <div className="page-container page-transition">
      <header className="page-header">
        <h1>Work <span className="accent">Experience</span></h1>
      </header>

      <div className="content-section">
        <div className="content-row">
          <div className="content-label">Oct 2025 - Feb 2026</div>
          <div>
            <h2 className="content-title">Vietnam Communication Corporation - VCCorp</h2>
            <div className="content-subtitle">AI Intern | HCMC</div>
            <ul className="content-list">
              <li>Researched sign language translation and reproduced prior experiments to guide dataset construction.</li>
              <li>Built a data pipeline for automated data collection, preprocessing, and annotation generation.</li>
              <li>Designed metadata structure and quality checks to ensure dataset consistency.</li>
            </ul>
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Jun 2024 - Oct 2024</div>
          <div>
            <h2 className="content-title">The Data and Artificial Intelligence Center - SIU AI Lab</h2>
            <div className="content-subtitle">AI Intern | HCMC</div>
            <ul className="content-list">
              <li>Conducted research and development on a medical assistant chatbot for cancer patient support.</li>
              <li>Explored advanced RAG methods to improve contextual accuracy.</li>
              <li>Investigated multi-agent collaboration frameworks to improve conversational quality and user experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
