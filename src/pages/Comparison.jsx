import ComparisonGame from '../components/ComparisonGame';

function Comparison() {
  return (
    <div className="page-container" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-4114818c4b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
      <h1 className="fade-in">You’re the Best!</h1>
      <p className="fade-in" style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.2rem' }}>
        Let’s have some fun comparing you to the stars. Spoiler: you always win!
      </p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <ComparisonGame />
      </div>
    </div>
  );
}

export default Comparison;