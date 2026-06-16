export default function Hero() {
  return (
    <section className="hero container" id="about">
      <div className="hero__content stagger">
        <div className="hero__badge fade-up">
          <span className="hero__badge-dot" />
          Open to work
        </div>

        <h1 className="hero__title fade-up">
          Xin chào, mình là{' '}
          <span>Thế Anh</span>.
        </h1>

        <p className="hero__desc fade-up">
          AI Engineer với nền tảng vững chắc về Xử lý Ngôn ngữ Tự nhiên (NLP), 
          Thị giác Máy tính (CV) và Trí tuệ Nhân tạo Tạo sinh (GenAI). 
          Mình luôn tìm kiếm cơ hội áp dụng kiến thức vào các dự án thực tế.
        </p>

        <div className="hero__actions fade-up">
          <a
            href="https://github.com/nguyentheanh822"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <svg className="btn__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="mailto:theanheleven2o3@gmail.com" className="btn btn--ghost">
            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4l-10 8L2 4"/>
            </svg>
            Liên hệ
          </a>
        </div>
      </div>
    </section>
  )
}
