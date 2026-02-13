import { useState } from 'react';
import heartIcon from '../assets/heart.png';
import '../styles/QuizGame.css';

const quizQuestions = [
  {
    question: 'What was the first thing I said to you when we met?',
    options: ['You look stunning', 'Is this seat taken?', 'Hi, I\'m nervous', 'Can I buy you a coffee?'],
    correctAnswer: 'Can I buy you a coffee?',
    message: 'I was so nervous, but seeing you made my heart race. I\'ll always be there to share those moments with you.'
  },
  {
    question: 'Where did we go on our first date?',
    options: ['The beach', 'A cozy café', 'A movie theater', 'A park'],
    correctAnswer: 'A cozy café',
    message: 'That café date was just the start. I\'m here for every date, big or small, forever.'
  },
  {
    question: 'What\'s my favorite thing about you?',
    options: ['Your laugh', 'Your kindness', 'Your eyes', 'All of the above'],
    correctAnswer: 'All of the above',
    message: 'You’re everything to me, and I’ll always cherish every part of you.'
  }
];

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showMessage, setShowMessage] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    const question = quizQuestions[currentQuestion];
    if (option === question.correctAnswer) {
      setScore(score + 1);
    }
    setShowMessage(question.message);
    setTimeout(() => {
      setShowMessage('');
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }, 3000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setShowMessage('');
  };

  if (isFinished) {
    return (
      <div className="quiz-container text-center fade-in">
        <img src={heartIcon} alt="Heart" style={{ width: '60px', margin: '0 auto 1.5rem' }} />
        <h2>Quiz Complete!</h2>
        <p>You scored {score} out of {quizQuestions.length}!</p>
        <p>
          No matter the score, my love for you is infinite. I'm here for you, through every moment, forever and always.
        </p>
        <button onClick={restartQuiz}>Play Again</button>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="quiz-container fade-in">
      <img src={heartIcon} alt="Heart" style={{ width: '50px', margin: '0 auto 1.5rem' }} />
      <div className="quiz-progress">
        <div className="quiz-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <h2>Question {currentQuestion + 1}/{quizQuestions.length}</h2>
      <p>{question.question}</p>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {showMessage && <p className="fade-in">{showMessage}</p>}
    </div>
  );
}

export default QuizGame;