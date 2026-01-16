import { useState } from 'react';
import './CharacterPage.css';

import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';




import img3 from './pictures/3.jpg';
import img4 from './pictures/4.jpg';
import img5 from './pictures/5.jpg';
import img6 from './pictures/6.jpg';

function CharacterPage({ onBack, onGoToContent, onGoToQuiz }) {
const stages = {
  Stage1: {
    id: 'merlin',
    name: 'RỜI QUÊ HƯƠNG (1911)',
    title: 'KHỞI NGUỒN CÂU HỎI LỚN',
    bg: 'bg-forest',
    image: 'https://i.pinimg.com/736x/89/ca/4b/89ca4bb279d861de352644d5cbf1074a.jpg',
    desc: 'Đầu thế kỷ XX, Việt Nam mất độc lập, các phong trào yêu nước theo khuynh hướng phong kiến và tư sản đều thất bại, bộc lộ mâu thuẫn giữa tinh thần yêu nước và con đường cứu nước chưa đúng đắn.'

  },

  Stage2: {
    id: 'arthur',
    name: ' THẾ GIỚI TƯ BẢN (1911–1917)',
    title: 'NHẬN DIỆN GIỚI HẠN CỦA “TỰ DO” ',
    bg: 'bg-mountain',
    image: 'https://i.pinimg.com/736x/ef/66/2f/ef662f401a39b312846792caea80aad9.jpg',
    desc: 'Nguyễn Ái Quốc chứng kiến sự bóc lột, bất công trong xã hội tư bản, trái ngược với các khẩu hiệu tự do, bình đẳng.'
  },

  Stage3: {
    id: 'lancelot',
    name: 'ÁNH SÁNG CÁCH MẠNG THÁNG MƯỜI (1917–1920)',
    title: 'LÝ LUẬN KHOA HỌC ',
    bg: 'bg-castle',
    image: "https://media.baobinhphuoc.com.vn/Content/UploadFiles/EditorFiles/images/2017/Quy4/ccc26102017105816.jpg",
    desc: 'Cách mạng Tháng Mười Nga thành công, mở ra thời đại mới cho phong trào cách mạng thế giới.'
  },

  Stage4: {
    id: 'galahad',
    name: 'TỪ NGƯỜI YÊU NƯỚC ĐẾN NGƯỜI CỘNG SẢN (1920)',
    title: 'BƯỚC NGOẶT LỊCH SỬ',
    bg: 'bg-cave',
    image: "https://cdn.cungcap.net/media/img/2019/04/15/ncG7c-1555272912.jpeg",
    desc: 'Nguyễn Ái Quốc tham gia phong trào cộng sản quốc tế và trở thành đảng viên cộng sản.'
  },

  Stage5: {
    id: 'percival',
    name: 'VẬN DỤNG SÁNG TẠO CHO VIỆT NAM (1921–1930)',
    title: 'KHÔNG THỂ ÁP DỤNG MÁY MÓC',
    bg: 'bg-lake',
    image: img5,
    desc: 'Việt Nam là nước thuộc địa nửa phong kiến, có điều kiện đặc thù, không thể áp dụng máy móc mô hình cách mạng nước ngoài.'
  },

  Stage6: {
    id: 'tristan',
    name: 'KẾT TINH TƯ TƯỞNG – GIÁ TRỊ LÂU DÀI',
    title: 'TƯ TƯỞNG HỒ CHÍ MINH',
    bg: 'bg-ocean',
    image: "https://i.vnask.com/Data/image/2021/04/10/tho-bac-ho-thieu-nhi-1.jpg",
    desc: 'Tư tưởng Hồ Chí Minh hình thành từ sự kết hợp giữa lý luận Mác – Lênin và thực tiễn cách mạng Việt Nam.'
  }
};


  const stageKeys = Object.keys(stages);
  const [currentKey, setCurrentKey] = useState('Stage1');
  const [isExiting, setIsExiting] = useState(false);

  const handleStageChange = (key) => {
    if (key === currentKey) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentKey(key);
      setIsExiting(false);
    }, 400);
  };

  const current = stages[currentKey];

  return (
    <div className={`character-page ${current.bg}`}>
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

        <main className={`main-layout ${isExiting ? 'fade-out' : 'fade-in'}`}>
          <div className="info-box">
            <h1 className="character-name">{current.name}</h1>
            <h2 className="character-title">{current.title}</h2>
            <p className="character-description">{current.desc}</p>

            <div className="action-buttons">
              <button className="btn-action primary" onClick={() => onGoToContent(current)}>
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
              <img src={current.image} alt={current.name} className="portrait-img" />
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
                  <img src={stages[key].image} alt={key} className="thumb-img" />
                  <FrameSVG className="thumb-svg" size="small" />
                </div>
                <span className="thumb-name">{stages[key].name}</span>
              </div>
            ))}
          </div>
          <div className="decorative-line"></div>
        </footer>
      </div>
    </div>
  );
}

export default CharacterPage;