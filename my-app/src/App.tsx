import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import QuizPage from './Pages/QuizPage/QuizPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App w-[335px] mx-auto">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
