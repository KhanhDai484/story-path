import { useState, useRef } from 'react';
import './CharacterPage.css';

import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';
import VisitorCounter from './components/VisitorCounter';
import { sendMessageToClaude } from './services/claudeService';


import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.png';
import img5 from './assets/5.jpeg';
import img6 from './assets/6.jpg';

function CharacterPage({
  onBack,
  onGoToContent,
  onGoToQuiz,
  initialStage = 'Stage1',
  onStageChange
}) {
  // Đã sửa: Chuyển thành chữ 'stages' thường để đồng bộ với code bên dưới
  const stages = {
    Stage1: {
      id: 'merlin',
      name: 'Sự Ra Đời Của Đảng',
      title: 'Sự tất yếu & Vai trò lãnh đạo',
      bg: 'bg-forest',
      image: "https://static.wixstatic.com/media/9d8ed5_539110379ea84470a31956ed3e4a6b1f~mv2.jpg/v1/fill/w_800,h_1221,al_c,q_85,enc_avif,quality_auto/9d8ed5_539110379ea84470a31956ed3e4a6b1f~mv2.jpg",
      desc: 'Khẳng định Đảng là nhân tố quyết định thắng lợi, ra đời từ sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và yêu nước.'
    },

    Stage2: {
      id: 'arthur',
      name: 'Đảng Văn Minh',
      title: 'Bản chất & Nguyên tắc hoạt động',
      bg: 'bg-mountain',
      image: 'https://vb.1cdn.vn/2025/08/29/static-images.vnncdn.net-vps_images_publish-000001-000003-2025-8-28-_w-49ab1cf456adddf384bc-4046.jpg',
      desc: 'Khám phá tư tưởng "Đảng là đạo đức, là văn minh" cùng 8 nguyên tắc xây dựng Đảng kiểu mới để giữ vững bản chất cách mạng.'
    },

    Stage3: {
      id: 'lancelot',
      name: 'Cái Gốc Công Việc',
      title: 'Xây dựng đội ngũ Cán bộ',
      bg: 'bg-castle',
      image: "https://vnn-imgs-f.vgcloud.vn/2021/12/31/20/nhung-cau-noi-tham-thia-cua-tong-bi-thu-trong-nam-2021-4.jpg ",
      desc: 'Tập trung vào tư tưởng "Cán bộ là cái gốc của mọi công việc", tiêu chuẩn Đức - Tài và rèn luyện tư cách người cách mạng.'
    },

    Stage4: {
      id: 'galahad',
      name: 'Chủ Quyền Nhân Dân',
      title: 'Nhà nước của, do, vì Dân',
      bg: 'bg-cave',
      image: "https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-bo-doi-1.jpg",
      desc: 'Làm rõ bản chất nhà nước dân chủ, nơi tất cả quyền lực thuộc về nhân dân và cán bộ đóng vai trò là "công bộc" trung thành.'
    },

    Stage5: {
      id: 'percival',
      name: 'Pháp Quyền Nhân Nghĩa',
      title: 'Pháp luật & Kiểm soát quyền lực',
      bg: 'bg-lake',
      image: "https://png.pngtree.com/thumb_back/fw800/background/20230930/pngtree-symbol-of-justice-balanced-scales-of-law-and-hammer-on-wooden-image_13542850.png",
      desc: 'Xây dựng nhà nước thượng tôn pháp luật gắn liền với đạo đức và các biện pháp quyết liệt phòng chống "giặc nội xâm".'
    },

    Stage6: {
      id: 'tristan',
      name: 'Đổi Mới Hiện Nay',
      title: 'Vận dụng trong giai đoạn mới',
      bg: 'bg-ocean',
      image: "https://toplist.vn/images/800px/thanh-pho-ho-chi-minh-558976.jpg",
      desc: 'Kiên định mục tiêu độc lập dân tộc và CNXH, đồng thời đổi mới phương thức lãnh đạo của Đảng trong bối cảnh thời đại mới.'
    }
  };

  const stageKeys = Object.keys(stages);
  const [currentKey, setCurrentKey] = useState(initialStage);
  const [isExiting, setIsExiting] = useState(false);
  
  // AI Chatbot states
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Draggable AI icon states
  const [aiIconPosition, setAiIconPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  const handleStageChange = (key) => {
    if (key === currentKey) return;

    setIsExiting(true);

    setTimeout(() => {
      setCurrentKey(key);
      setIsExiting(false);
      onStageChange?.(key);
    }, 400);
  };
  
  // Draggable AI icon handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: aiIconPosition.x,
      initialY: aiIconPosition.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;
    setAiIconPosition({
      x: dragRef.current.initialX + deltaX,
      y: dragRef.current.initialY + deltaY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAiIconClick = (e) => {
    if (!isDragging) {
      setShowChatbot(!showChatbot);
    }
  };

  const handleSendMessage = async () => {
    if (chatInput.trim() && !isLoading) {
      const userMessage = chatInput;
      setChatMessages([...chatMessages, { type: 'user', text: userMessage }]);
      setChatInput('');
      setIsLoading(true);
      
      try {
        const aiResponse = await sendMessageToClaude(userMessage, current);
        setChatMessages(prev => [...prev, { 
          type: 'ai', 
          text: aiResponse
        }]);
      } catch (error) {
        setChatMessages(prev => [...prev, { 
          type: 'ai', 
          text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.' 
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const current = stages[currentKey];

  return (
    <div 
      className={`character-page ${current.bg}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <FrameClipPath />
      <VisitorCounter />
      
      <div className="full-screen-container">
        <header className="header">
          <div className="header-left">
            <div className="menu-text" onClick={onBack} style={{ cursor: 'pointer' }}>Trở về</div>
            <div className="header-line"></div>
          </div>
          <div className="header-right">
            <div className="header-line"></div>
            <button className="more-button">⋯</button>
          </div>
        </header>

        <main className={`main-layout ${isExiting ? 'fade-out' : 'fade-in'}`}>
          <div className="info-box">
            <h1 className="character-name">{current.name}</h1>
            <h2 className="character-title">{current.title}</h2>
            <p className="character-description">{current.desc}</p>

            <div className="action-buttons">
              <button
                className="btn-action primary"
                onClick={() => onGoToContent(current)}
              >
                Nội dung chi tiết
              </button>
              <button
                className="btn-action secondary"
                onClick={() => onGoToQuiz(current)}
              >
                Quiz
              </button>
            </div>
          </div>

          <div className="main-portrait">
            <div className="portrait-frame">
              <img
                src={current.image}
                alt={current.name}
                className="portrait-img"
              />
              <FrameSVG className="svg-border" size="large" />
            </div>
          </div>
        </main>

        <footer className="journey-footer">
          <div className="journey-row">
            {stageKeys.map((key) => (
              <div
                key={key}
                className={`journey-item ${currentKey === key ? 'active' : 'inactive'}`}
                onClick={() => handleStageChange(key)}
              >
                <div className="thumb-container">
                  <img
                    src={stages[key].image}
                    alt={stages[key].name}
                    className="thumb-img"
                  />
                  <FrameSVG className="thumb-svg" size="small" />
                </div>
                <span className="thumb-name">{stages[key].name}</span>
              </div>
            ))}
          </div>
          <div className="decorative-line"></div>
        </footer>
      </div>
      
      {/* Draggable AI Icon */}
      <div
        className={`ai-chat-icon ${isDragging ? 'dragging' : ''}`}
        style={{
          left: `${aiIconPosition.x}px`,
          top: `${aiIconPosition.y}px`
        }}
        onMouseDown={handleMouseDown}
        onClick={handleAiIconClick}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#aiGradient)" />
          <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="10" r="1.5" fill="white"/>
          <circle cx="15" cy="10" r="1.5" fill="white"/>
          <path d="M9 14c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <defs>
            <linearGradient id="aiGradient" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#c4b998" />
              <stop offset="100%" stopColor="#8b7355" />
            </linearGradient>
          </defs>
        </svg>
        <div className="ai-icon-pulse"></div>
      </div>

      {/* Chatbot Dialog */}
      {showChatbot && (
        <div className="chatbot-dialog">
          <div className="chatbot-header">
            <h3>Tư tưởng Hồ Chí Minh</h3>
            <button className="chatbot-close" onClick={() => setShowChatbot(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {chatMessages.length === 0 && (
              <div className="chatbot-welcome">
                Xin chào! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh. Hãy hỏi tôi về các giá trị, triết lý, lịch sử cách mạng và di sản Bác Hồ!
              </div>
            )}
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="chat-message ai loading">
                <span className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            )}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage} 
              className="chatbot-send"
              disabled={isLoading || !chatInput.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterPage;