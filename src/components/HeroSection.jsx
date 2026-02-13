import '../styles/HeroSection.css';

function HeroSection({ title, message, photo }) {
  return (
    <div className="hero-section fade-in">
      <div className="hero-content">
        <div className="hero-photo-wrap">
          {photo && <img src={photo} alt="My Love" className="hero-photo" />}
        </div>
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{message}</p>
          <div className="cta-row">
            <span className="heart-pulse">❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;