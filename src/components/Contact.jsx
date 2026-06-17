export default function Contact() {
  return (
    <div className="page-container page-transition">
      <header className="page-header">
        <h1>Get in <span className="accent">Touch</span></h1>
      </header>

      <div className="content-section">
        <div className="content-row">
          <div className="content-label">Email</div>
          <div>
            <h2 className="content-title">
              <a href="mailto:theanheleven2o3@gmail.com" className="project-card__link" style={{ display: 'inline-block', border: 'none', padding: 0, fontSize: '2rem', textTransform: 'none' }}>
                theanheleven2o3@gmail.com
              </a>
            </h2>
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Phone</div>
          <div>
            <h2 className="content-title">0948 204 856</h2>
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Social</div>
          <div>
            <h2 className="content-title">
              <a href="https://github.com/nguyentheanh822" target="_blank" rel="noopener noreferrer" className="project-card__link" style={{ display: 'inline-block', border: 'none', padding: 0, fontSize: '2rem', textTransform: 'none' }}>
                github.com/nguyentheanh822
              </a>
            </h2>
          </div>
        </div>
        
        <div className="content-row">
          <div className="content-label">Location</div>
          <div>
            <h2 className="content-title">Ho Chi Minh City, Vietnam</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
