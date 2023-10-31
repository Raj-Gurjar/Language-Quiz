import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Quiz from "./components/Quiz";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Levels from "./components/Levels";
import AddQue from "./components/AddQue";

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
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/addQue" element={<AddQue />} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Routes>
          <Route path="/levels" element={<Levels />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
