import QuizGame from '../components/QuizGame';
import HeroSection from '../components/HeroSection';
import smol from '../assets/smol.jpg';

function Home() {
  return (
    <div className="page-container" style={{ backgroundImage: 'linear-gradient(120deg, #fffaf0 0%, #ffe4ec 100%)' }}>
      <HeroSection
        title="To My Heart and Soul"
        message="My dearest, I fully understand your decision to take time, and I respect it with all my heart. I want you to know that I will always be here for you, waiting patiently, loving you endlessly, and supporting you through every step of our journey. You are my everything, and this site is a small reflection of my unwavering commitment to you. Scroll down to play a quiz I crafted to celebrate our beautiful moments together."
        photo={smol}
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <QuizGame />
      </div>
    </div>
  );
}

export default Home;