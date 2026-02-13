import heartIcon from '../assets/heart.png';
import promiseVideo from '../assets/promise-video.MP4';
import '../styles/Promise.css';

function Promise() {
  return (
    <div className="page-container promise-container">
      <h1 className="fade-in">My Promise to You</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <video src={promiseVideo} controls style={{ maxWidth: '100%', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(255,105,180,0.13)' }} poster={heartIcon} />
      </div>
      <div className="promise-card fade-in">
        <p>
          My love, I respect your need for time, and I’m here, waiting with all the love in my heart. My promise is to always support you, cherish every moment we share, and build a future together when you’re ready. You are my home, and I’ll never stop being there for you, no matter what.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <img src={heartIcon} alt="Heart" style={{ width: '60px' }} className="heart-pulse" />
        </div>
      </div>
    </div>
  );
}

export default Promise;