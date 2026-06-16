import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="header__inner">
          <a className="header__logo" href="#">
            <span className="header__logo-dot" />
            Thế Anh
          </a>
          <nav>
            <ul className="header__nav">
              {links.map(l => (
                <li key={l.href}>
                  <a className="header__link" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="header__menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-nav__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map(l => (
          <a key={l.href} className="mobile-nav__link" href={l.href} onClick={handleLinkClick}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
