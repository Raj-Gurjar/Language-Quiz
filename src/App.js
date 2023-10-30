import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import Quiz from './components/Quiz';
import SignUp from './components/SignUp';



function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Routes>
          <Route path="/leaderBoard" element={<LeaderBoard />} />
        </Routes>

        <Routes>
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;
