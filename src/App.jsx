
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/HeroPage/Hero';
import Saga from './Components/SagaPage/Saga';
import SagaBook from './Components/BookPage/Book';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/saga" element={<Saga />} />
        <Route path="/book" element={<SagaBook />} />
      </Routes>
    </Router>
  );
}

export default App;
