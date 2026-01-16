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
    avallach: [
      {
        question: "Avallach thuộc chủng tộc nào trong truyền thuyết?",
        options: ["Người phàm", "Tộc Tiên (Elf)", "Người khổng lồ", "Phù thủy hắc ám"],
        correct: 1
      },
      {
        question: "Nhiệm vụ cao cả nhất của Avallach là gì?",
        options: ["Rèn vũ khí", "Bảo hộ huyết thống cổ xưa", "Xây dựng thành trì", "Chinh phạt lục địa"],
        correct: 1
      },
      {
        question: "Kỹ năng đặc biệt nhất của Avallach là gì?",
        options: ["Sức mạnh cơ bắp", "Du hành xuyên không gian", "Điều khiển lửa", "Chế tạo thuốc độc"],
        correct: 1
      }
    ],
    morgian: [
      {
        question: "Morgian thường xuất hiện với hình tượng nào?",
        options: ["Nữ vương băng giá", "Nữ pháp sư quyền năng", "Nữ hiệp sĩ", "Nông dân"],
        correct: 1
      },
      {
        question: "Mối quan hệ giữa Morgian và Arthur là gì?",
        options: ["Vợ chồng", "Chị em cùng cha khác mẹ", "Kẻ thù truyền kiếp", "Thầy trò"],
        correct: 1
      },
      {
        question: "Đảo Avalon là nơi Morgian làm gì?",
        options: ["Chôn cất báu vật", "Chữa trị vết thương cho Arthur", "Luyện kiếm", "Giam giữ Merlin"],
        correct: 1
      }
    ],
    pelleas: [
      {
        question: "Pelleas là thành viên của tổ chức nào?",
        options: ["Hội kín", "Hiệp sĩ Bàn Tròn", "Đội quân đánh thuê", "Học viện pháp thuật"],
        correct: 1
      },
      {
        question: "Pelleas nổi tiếng với phẩm chất gì?",
        options: ["Sự mưu mô", "Lòng trung thành và tình yêu si mê", "Sự tàn nhẫn", "Tài ca hát"],
        correct: 1
      },
      {
        question: "Vũ khí chính của Pelleas thường dùng là gì?",
        options: ["Cung tên", "Thương và Khiên", "Gậy phép", "Song đao"],
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
    nimue: [
      {
        question: "Nimue còn được gọi là gì?",
        options: ["Nữ hoàng bóng đêm", "Nàng tiên hồ (Lady of the Lake)", "Thần rừng", "Bà chúa tuyết"],
        correct: 1
      },
      {
        question: "Vật phẩm quan trọng Nimue đã trao cho Arthur là gì?",
        options: ["Nhẫn vàng", "Kiếm Excalibur", "Áo choàng tàng hình", "Bản đồ Avalon"],
        correct: 1
      },
      {
        question: "Nimue có vai trò gì đối với phép thuật của Merlin?",
        options: ["Học trò và người phong ấn Merlin", "Kẻ thù", "Con gái", "Người phục vụ"],
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