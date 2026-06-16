const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript'],
  },
  {
    title: 'AI / ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'LlamaIndex', 'LangChain'],
  },
  {
    title: 'Web & Tools',
    items: ['FastAPI', 'Flask', 'Gradio', 'Faiss', 'Qdrant', 'Milvus', 'Git', 'GitHub', 'GitLab CI/CD', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section__label fade-up">
          <span className="section__label-line" />
          Kỹ năng
        </p>
        <h2 className="section__title fade-up">Công nghệ & Công cụ</h2>
        <div className="skills-grid stagger">
          {skillGroups.map(g => (
            <div className="skill-card fade-up" key={g.title}>
              <h3 className="skill-card__title">{g.title}</h3>
              <div className="skill-card__items">
                {g.items.map(item => (
                  <span className="skill-item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
