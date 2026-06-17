export default function Home({ onNavigate }) {
  const cards = [
    { id: 'about', label: '01', title: 'About' },
    { id: 'experience', label: '02', title: 'Experience' },
    { id: 'projects', label: '03', title: 'Projects' },
    { id: 'education', label: '04', title: 'Education' },
    { id: 'skills', label: '05', title: 'Skills' },
    { id: 'contact', label: '06', title: 'Contact' },
  ]

  return (
    <div className="home page-transition">
      <header className="home__header">
        <h1 className="home__title">
          Portfolio<br />
          <span className="accent">của Thế Anh</span>
        </h1>
      </header>

      <div className="home__grid">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="home-card"
            onClick={() => onNavigate(card.id)}
          >
            <span className="home-card__label">Section {card.label}</span>
            <h2 className="home-card__title">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
