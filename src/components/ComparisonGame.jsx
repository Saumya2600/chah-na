import { useState } from 'react';
import heartIcon from '../assets/heart.png';
import chah from '../assets/cha1.jpg';
import makeup from '../assets/makeup.jpeg';
import ang from '../assets/ang.jpeg';
import yap from '../assets/yap1.jpeg';
import eat from '../assets/eat.jpeg';
import happy from '../assets/happy.jpeg';
import '../styles/ComparisonGame.css';

const comparisonQuestions = [
  {
    question: 'Who’s the best yapper: Chah or Taylor Swift?',
    options: [
      { name: 'Taylor Swift', image: 'data:image/jpeg;base64,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' },
      { name: 'Chah', image: yap }
    ],
    correctAnswer: 'Chah',
    message: 'Chah’s yap game is on fire—Taylor’s just singing backup now, haha!'
  },
  {
    question: 'Who eats the most amount of Maggi: Chah or Dr. Hathi?',
    options: [
      { name: 'Dr. Hathi', image: 'https://static.toiimg.com/thumb/msid-64928339,width-400,resizemode-4/64928339.jpg' },
      { name: 'Chah', image: eat }
    ],
    correctAnswer: 'Chah',
    message: 'Chah’s Maggi munching beats Dr. Hathi’s wobbly attempts—total noodle champ!'
  },
  {
    question: 'Who sings the best: Chah or Jungkook?',
    options: [
      { name: 'Jungkook', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg/250px-Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg' },
      { name: 'Chah', image: happy }
    ],
    correctAnswer: 'Chah',
    message: 'Chah’s vocals leave Jungkook crying in the K-pop corner—legend status!'
  },
  {
    question: 'Who does the best makeup: Chah or Dua Lipa?',
    options: [
      { name: 'Dua Lipa', image: 'https://www.rollingstone.com/wp-content/uploads/2022/08/dua-lipa.jpg' },
      { name: 'Chah', image: makeup }
    ],
    correctAnswer: 'Chah',
    message: 'Chah’s makeup skills slay Dua Lipa—Queen D’s just jealous now, lol!'
  },
  {
    question: 'Who looks more scary when angry: Chah or Chimpanzee?',
    options: [
      { name: 'Chimpanzee', image: 'https://africageographic.com/wp-content/uploads/2024/10/Dirk-Johnen-Chimpanzee-Kibale-Forest-Uganda-cover.jpg' },
      { name: 'Chah', image: ang }
    ],
    correctAnswer: 'Chah',
    message: 'Chah’s angry face scares the chimps back to the jungle—unstoppable fury!'
  }
];

function ComparisonGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showMessage, setShowMessage] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    const question = comparisonQuestions[currentQuestion];
    setShowMessage(option === question.correctAnswer ? question.message : 'Chal chal have');
    setTimeout(() => {
      setShowMessage('');
      if (currentQuestion < comparisonQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }, 3000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setIsFinished(false);
    setShowMessage('');
  };

  if (isFinished) {
    return (
      <div className="comparison-container text-center fade-in">
        <img src={heartIcon} alt="Heart" style={{ width: '60px', margin: '0 auto 1.5rem' }} />
        <h2>Game Complete!</h2>
        <p>You’re the best in every way, my love. No one could ever compare to you!</p>
        <button onClick={restartGame}>Play Again</button>
      </div>
    );
  }

  const question = comparisonQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / comparisonQuestions.length) * 100;

  return (
    <div className="comparison-container fade-in">
      <img src={heartIcon} alt="Heart" style={{ width: '50px', margin: '0 auto 1.5rem' }} />
      <div className="quiz-progress">
        <div className="quiz-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <h2>Question {currentQuestion + 1}/{comparisonQuestions.length}</h2>
      <p>{question.question}</p>
      <div className="comparison-options">
        {question.options.map((option, index) => (
          <div key={index} className="comparison-option">
            <img src={option.image} alt={option.name} />
            <button onClick={() => handleAnswer(option.name)}>
              {option.name}
            </button>
          </div>
        ))}
      </div>
      {showMessage && <p className="fade-in">{showMessage}</p>}
    </div>
  );
}

export default ComparisonGame;