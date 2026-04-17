import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="nf-page">
      <div className="nf-glow nf-glow-left" aria-hidden="true" />
      <div className="nf-glow nf-glow-right" aria-hidden="true" />

      <section className="nf-card">
        <p className="nf-tag">404: aisle not found</p>
        <h1 className="nf-title">This page rolled away with the shopping cart.</h1>
        <p className="nf-subtitle">
          We checked every shelf, behind every discount sticker, and even inside
          the mystery box. Nothing.
        </p>

        <div className="nf-doodle" aria-hidden="true">
          <div className="nf-wheel nf-wheel-left" />
          <div className="nf-wheel nf-wheel-right" />
          <span className="nf-doodle-text">still buffering snacks...</span>
        </div>

        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn-primary">
            Take Me Home
          </Link>
          <button className="nf-btn nf-btn-secondary" onClick={() => window.history.back()}>
            Undo My Bad Decisions
          </button>
        </div>
      </section>
    </main>
  )
}

export default NotFound