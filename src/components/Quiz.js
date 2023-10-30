import React, { useState, useEffect } from 'react';
import quizQuestions from './QuizData'; // Import your quiz data here
import '../styles/quiz.scss';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(15); // Initial timer value (15 seconds)

  useEffect(() => {
    let countdown;
    if (timer > 0 && !quizCompleted) {
      countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      // When the timer reaches 0, automatically move to the next question
      moveToNextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer, quizCompleted]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setTimer(15); // Reset the timer for the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerClick = (selectedOption, event) => {
    if (quizCompleted) return; // Don't allow selecting answers after quiz completion.

    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    moveToNextQuestion();
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className='quiz_cls section_padding'>
      <h1>This Is The English Lang Quiz</h1>

      {!quizCompleted ? (
        <div className="quiz_box">
          <div className='que'>
            <h2>{currentQuestion.question}</h2>
          </div>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <h3
                key={index}
                onClick={(event) => handleAnswerClick(option, event)}
              >
                {option}
              </h3>
            ))}
          </div>
          <div className='timer'>
            <p>Time Left: {timer} seconds</p>
          </div>
        </div>
      ) : (
        <div className="score-summary">
          <p>Quiz completed! Your total score is: {score}</p>
        </div>
      )}

      <div className='score'>
        {!quizCompleted ? (
          <p>Score: {score}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
