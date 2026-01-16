import { useState } from 'react';
import './CharacterPage.css';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

const QuizPage = ({ onBack, characterData }) => {
  // 1. Dữ liệu 6 bộ câu hỏi (mỗi bộ 3 câu) cho 6 nhân vật
  const allQuizzes = {
    merlin: [
      {
        question: "Vật phẩm nào gắn liền với quyền năng của Merlin?",
        options: ["Trượng gỗ sồi", "Quả cầu tiên tri", "Sách cổ tích", "Kiếm gãy"],
        correct: 0
      },
      {
        question: "Merlin đã giúp ai lên ngôi vua?",
        options: ["Lancelot", "Arthur", "Gawain", "Mordred"],
        correct: 1
      },
      {
        question: "Nơi ẩn cư cuối cùng của Merlin được cho là ở đâu?",
        options: ["Đáy hồ", "Trong một thân cây cổ thụ", "Đỉnh núi tuyết", "Lâu đài Camelot"],
        correct: 1
      }
    ],
    arthur: [
      {
        question: "Arthur thuộc dòng dõi nào?",
        options: ["Người phàm", "Hoàng gia Pendragon", "Người khổng lồ", "Phù thủy hắc ám"],
        correct: 1
      },
      {
        question: "Biểu tượng quyền lực của Arthur là gì?",
        options: ["Rèn vũ khí", "Rút thanh kiếm trong đá", "Xây dựng thành trì", "Chinh phạt lục địa"],
        correct: 1
      },
      {
        question: "Arthur đã thành lập hội gì?",
        options: ["Hội kín", "Hội Hiệp sĩ Bàn Tròn", "Hội Pháp sư", "Hội Thợ rèn"],
        correct: 1
      }
    ],
    lancelot: [
      {
        question: "Lancelot được mệnh danh là gì?",
        options: ["Kẻ phản bội", "Hiệp sĩ tài ba nhất", "Phù thủy đen", "Người nông dân"],
        correct: 1
      },
      {
        question: "Vũ khí ưa thích của Lancelot là gì?",
        options: ["Kiếm (Arondight)", "Cung tên", "Rìu chiến", "Gậy phép"],
        correct: 0
      },
      {
        question: "Lancelot có quan hệ tình cảm với ai?",
        options: ["Guinevere", "Morgan Le Fay", "Lady of the Lake", "Merlin"],
        correct: 0
      }
    ],
    percival: [
      {
        question: "Percival nổi tiếng vì điều gì?",
        options: ["Sự ngây thơ và thuần khiết", "Sự tàn bạo", "Khả năng bay", "Giàu có"],
        correct: 1
      },
      {
        question: "Percival đã chứng kiến vật gì?",
        options: ["Chén Thánh (Holy Grail)", "Vương miện quỷ", "Rồng lửa", "Kho báu bị nguyền rủa"],
        correct: 0
      },
      {
        question: "Percival gia nhập Hội Bàn Tròn sau ai?",
        options: ["Gawain", "Lancelot", "Không ai cả", "Merlin"],
        correct: 1
      }
    ],
    galahad: [
      {
        question: "Galahad được coi là hiệp sĩ như thế nào?",
        options: ["Mạnh nhất", "Thuần khiết nhất", "Giàu có nhất", "Thông minh nhất"],
        correct: 1
      },
      {
        question: "Vật phẩm duy nhất Galahad có thể chạm vào là gì?",
        options: ["Excalibur", "Chén Thánh (Holy Grail)", "Vương miện vàng", "Khiên rồng"],
        correct: 1
      },
      {
        question: "Cha của Galahad là ai?",
        options: ["Vua Arthur", "Hiệp sĩ Lancelot", "Pháp sư Merlin", "Vua Ban"],
        correct: 1
      }
    ],
    tristan: [
      {
        question: "Tristan nổi tiếng với câu chuyện tình với ai?",
        options: ["Isolde", "Guinevere", "Morgana", "Elaine"],
        correct: 0
      },
      {
        question: "Tristan là hiệp sĩ đến từ đâu?",
        options: ["Cornwall", "Rome", "Pháp", "Bắc Cực"],
        correct: 0
      },
      {
        question: "Vũ khí sở trường của Tristan?",
        options: ["Cung tên và Kiếm", "Búa chiến", "Roi da", "Phép thuật"],
        correct: 0
      }
    ]
  };

  // Lấy dữ liệu câu hỏi dựa trên ID truyền vào
  const questions = allQuizzes[characterData?.id] || allQuizzes['merlin'];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    // DYNAMIC BACKGROUND: Lấy từ characterData.bg (bg-forest, bg-mountain, v.v.)
    <div className={`character-page ${characterData?.bg || 'bg-forest'}`}>
      <FrameClipPath />
      <div className="full-screen-container">
        <header className="header">
          <div className="header-left">
            <div className="menu-text" onClick={onBack}>Trở về</div>
            <div className="header-line"></div>
          </div>
          <div className="header-right">
            <div className="header-line"></div>
            <button className="more-button">⋯</button>
          </div>
        </header>

        <main className="main-layout fade-in">
          {!showResult ? (
            <div className="info-box" style={{ maxWidth: '600px' }}>
              <span className="character-title">Câu hỏi {currentQuestion + 1} / {questions.length}</span>
              <h2 className="character-name" style={{ fontSize: '1.8rem', marginBottom: '30px', minHeight: '80px' }}>
                {questions[currentQuestion].question}
              </h2>

              <div className="quiz-options" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`btn-action ${selectedAnswer === index ? 'primary' : ''}`}
                    style={{ textAlign: 'left', width: '100%', textTransform: 'none', padding: '15px 20px' }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="info-box text-center">
              <h1 className="character-name">Hoàn thành!</h1>
              <h2 className="character-title">Kiến thức về {characterData?.name}</h2>
              <p className="character-description" style={{ fontSize: '2.5rem', color: '#c4b998', margin: '20px 0' }}>
                {score} / {questions.length}
              </p>
              <div className="action-buttons" style={{ justifyContent: 'center', marginTop: '30px' }}>
                <button className="btn-action primary" onClick={handleRestart}>
                  Thử lại
                </button>
                <button className="btn-action secondary" onClick={onBack}>
                  Kết thúc
                </button>
              </div>
            </div>
          )}

          <div className="main-portrait" style={{ opacity: 0.9 }}>
            <div className="portrait-frame">
              {/* Hiển thị ảnh của nhân vật chương đó */}
              <img
                src={characterData?.image}
                alt={characterData?.name}
                className="portrait-img"
                style={{ filter: showResult ? 'sepia(0.5)' : 'none' }}
              />
              <FrameSVG className="svg-border" size="large" />
            </div>
          </div>
        </main>

        <footer className="journey-footer">
          <div className="decorative-line"></div>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;