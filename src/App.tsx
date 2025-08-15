
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/HeroPage/Hero';
import Saga from './Components/SagaPage/Saga';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/saga" element={<Saga />} />
      </Routes>
    </Router>
  );
}

export default App;
