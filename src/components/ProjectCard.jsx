export default function ProjectCard({
  tag,
  name,
  description,
  highlights,
  techs,
  githubUrl,
  accentColor,
  videoSrc,
  imageSrc,
}) {
  return (
    <article className="project-card fade-up">
      {/* Media */}
      <div className="project-card__media">
        {videoSrc ? (
          <video
            className="project-card__video"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : imageSrc ? (
          <img
            className="project-card__image"
            src={imageSrc}
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="project-card__placeholder">
            <div className="project-card__placeholder-icon" style={accentColor ? { background: `${accentColor}18`, color: accentColor } : {}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span>Video demo sẽ được thêm vào đây</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="project-card__info">
        <p className="project-card__tag" style={accentColor ? { color: accentColor } : {}}>
          {tag}
        </p>
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__desc">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="project-card__highlights">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <div className="project-card__techs">
          {techs.map(t => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-card__links">
          {githubUrl && (
            <a
              className="project-card__link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
