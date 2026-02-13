import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Comparison from './pages/Comparison';
import Promise from './pages/Promise';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/promise" element={<Promise />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;