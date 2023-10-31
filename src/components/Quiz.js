import React, { useState, useEffect } from "react";
import "../styles/quiz.scss";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Quiz = () => {
  const [cookies] = useCookies(["access_token"]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(15);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const language = searchParams.get("language");
  const difficulty = searchParams.get("difficulty");

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `http://localhost:5000/api/score/addScore`,
        {
          score,
          language,
        },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      if (result.data.success) {
        navigate("/selectLang");
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  const fetchQuestions = async () => {
    try {
      const result = await axios.post(
        `http://localhost:5000/api/question/getQuestion`,
        {
          language,
          difficulty,
        },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      setQuizQuestions(result.data.questions);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    let countdown;
    if (timer > 0 && !quizCompleted) {
      countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 2000);
    }

    if (timer === 0) {
      moveToNextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer, quizCompleted]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setTimer(15);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerClick = (selectedOption) => {
    if (quizCompleted) return;

    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    moveToNextQuestion();
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz_cls section_padding">
      <h1>This Is The English Lang Quiz</h1>

      {!quizCompleted ? (
        <div className="quiz_box">
          {currentQuestion ? (
            <div className="que">
              <h2>{currentQuestion.question}</h2>
            </div>
          ) : null}
          <div className="options">
            {currentQuestion
              ? currentQuestion.options.map((option, index) => (
                  <h3 key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                  </h3>
                ))
              : null}
          </div>
          <div className="timer">
            <p>Time Left: {timer} seconds</p>
          </div>
        </div>
      ) : (
        <div className="score-summary">
          <p>Quiz completed! Your total score is: {score}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      <div className="score">
        {!quizCompleted ? <p>Score: {score}</p> : null}
      </div>
    </div>
  );
};

export default Quiz;