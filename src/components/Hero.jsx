import './Hero.css'
import headshot from '../assets/headshot.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Matthew Boling</h1>
          <h2>Senior Site Reliability Engineer</h2>
          <p className="location">Louisville, KY, United States</p>
          <div className="hero-contact">
            <a href="tel:+12709934614">+1 (270) 993-4614</a>
            <span>•</span>
            <a href="mailto:mjboling29@outlook.com">mjboling29@outlook.com</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="headshot-container">
            <img src={headshot} alt="Matthew Boling" className="headshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
