import { ABOUT_CARDS } from '../config'

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <h2 className="section-title">What We're About</h2>
        <p className="section-subtitle">Section under construction.</p>
        <div className="card-grid">
          {ABOUT_CARDS.map((c, i) => (
            <div key={i} className="card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
