import { useState } from 'react';
import HomePage from './HomePage';
import CharacterPage from './CharacterPage';
import ContentPage from './ContentPage'; // Đảm bảo đã import trang này
import QuizPage from './QuizPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCharacterData, setActiveCharacterData] = useState(null);
  const [currentStageKey, setCurrentStageKey] = useState('Stage1');

  // Hàm xử lý khi nhấn "Nội dung chi tiết"
  const handleGoToContent = (characterObj) => {
    setActiveCharacterData(characterObj);
    setCurrentPage('content');
  };

  // Hàm xử lý khi nhấn "Quiz"
  const handleGoToQuiz = (characterObj) => {
    setActiveCharacterData(characterObj);
    setCurrentPage('quiz');
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onEnter={() => setCurrentPage('character')} />}

      {currentPage === 'character' && (
        <CharacterPage
          onBack={() => setCurrentPage('home')}
          onGoToContent={handleGoToContent} // QUAN TRỌNG: Phải có dòng này
          onGoToQuiz={handleGoToQuiz}
          initialStage={currentStageKey}
          onStageChange={setCurrentStageKey}
        />
      )}

      {currentPage === 'content' && (
        <ContentPage
          onBack={() => setCurrentPage('character')}
          characterData={activeCharacterData}
        />
      )}

      {currentPage === 'quiz' && activeCharacterData && (
        <QuizPage
          onBack={() => setCurrentPage('character')}
          characterData={activeCharacterData}
        />
      )}
    </>
  );
}

export default App;