import './Hero.css';

function Hero(props) {
  return (
    <section className="hero">
      <img 
        src="https://placehold.co/1200x400/667eea/ffffff?text=Welcome" 
        alt="Hero Banner" 
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-subtitle">{props.subtitle}</p>
        <h2 className="hero-cta">{props.ctaText}</h2>
      </div>
    </section>
  );
}

export default Hero;
