export default function Navigation({ onNavigate }) {
  return (
    <nav className="top-nav">
      <div className="top-nav__logo" onClick={() => onNavigate('home')}>
        Thế Anh
      </div>
      <button className="top-nav__back" onClick={() => onNavigate('home')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </button>
    </nav>
  )
}
