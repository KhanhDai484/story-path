import { useState } from 'react';
import './CharacterPage.css';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

const ContentPage = ({ onBack, characterData }) => {
  // Dữ liệu 6 bài học chi tiết cho 6 chương
  const lessons = {
    merlin: {
      title: "Huyền Thoại Pháp Sư Merlin",
      subtitle: "Bậc thầy tiên tri và người dẫn dắt các vị vua",
      content: [
        "Merlin không chỉ là một phù thủy quyền năng, ông còn là biểu tượng của sự kết nối giữa thế giới tự nhiên và tri thức nhân loại. Ông là người đã sắp đặt sự ra đời của vua Arthur và bảo vệ vương quốc Camelot bằng tầm nhìn xa trông rộng của mình.",
        "Bài học về Merlin nhấn mạnh rằng trí tuệ và sự chuẩn bị kỹ lưỡng là vũ khí mạnh nhất của một người lãnh đạo."
      ],
      lessonPoints: ["Tầm nhìn chiến lược vượt thời gian", "Sự thấu hiểu quy luật tự nhiên", "Vai trò dẫn dắt thế hệ kế cận"]
    },
    avallach: {
      title: "Tri Thức Cổ Của Avallach",
      subtitle: "Vị trưởng lão bảo tồn những bí mật bị lãng quên",
      content: [
        "Avallach đại diện cho tầng lớp trí thức bảo thủ những giá trị cổ xưa. Ông là người giữ chìa khóa của các cổng không gian và sở hữu vốn hiểu biết sâu rộng về các nền văn minh đã mất.",
        "Nội dung này tập trung vào giá trị của việc nghiên cứu lịch sử và cách mà những bài học từ quá khứ có thể cứu rỗi tương lai."
      ],
      lessonPoints: ["Tôn trọng di sản lịch sử", "Kỹ năng phân tích đa chiều", "Sự tĩnh lặng trong tư duy"]
    },
    morgian: {
      title: "Sức Mạnh Từ Bóng Tối Của Morgian",
      subtitle: "Sự cân bằng giữa ý chí và phép thuật hắc ám",
      content: [
        "Morgian (Morgan le Fay) là một nhân vật phức tạp, sở hữu khả năng biến hóa và chữa lành thần kỳ. Bà đại diện cho sức mạnh tiềm ẩn trong bóng tối mà mỗi cá nhân đều sở hữu.",
        "Bài học từ Morgian giúp chúng ta hiểu rằng mọi sức mạnh đều có hai mặt, và việc kiểm soát được 'phần tối' bên trong là chìa khóa của sự trưởng thành."
      ],
      lessonPoints: ["Sự biến hóa linh hoạt", "Kiểm soát cảm xúc cá nhân", "Khả năng chữa lành từ bên trong"]
    },
    pelleas: {
      title: "Lòng Trung Thành Của Pelleas",
      subtitle: "Bài học về sự kiên định và đức tin",
      content: [
        "Pelleas là biểu tượng của một hiệp sĩ tận hiến. Cuộc đời ông là minh chứng cho việc giữ vững lời thề và lòng trung thành ngay cả trong những hoàn cảnh khó khăn nhất.",
        "Nội dung này đề cao giá trị đạo đức của con người trong các mối quan hệ xã hội và sự trung thực với chính bản thân mình."
      ],
      lessonPoints: ["Sự cam kết bền bỉ", "Đạo đức hiệp sĩ thời đại mới", "Sức mạnh của lời hứa"]
    },
    galahad: {
      title: "Sự Thuần Khiết Của Galahad",
      subtitle: "Hành trình tìm kiếm giá trị cốt lõi (Chén Thánh)",
      content: [
        "Galahad là hiệp sĩ hoàn hảo nhất, người duy nhất có tâm hồn đủ thuần khiết để tìm thấy Chén Thánh. Ông đại diện cho mục tiêu cao cả nhất mà con người hướng tới.",
        "Bài học ở đây là về sự tập trung vào mục tiêu (focus) và loại bỏ những cám dỗ phù phiếm để đạt được thành công thực sự."
      ],
      lessonPoints: ["Tâm thế tập trung cao độ", "Loại bỏ những yếu tố nhiễu", "Theo đuổi lý tưởng cao đẹp"]
    },
    nimue: {
      title: "Quyền Năng Của Nimue",
      subtitle: "Nàng tiên hồ và sự bảo hộ công lý",
      content: [
        "Nimue là người đã trao thanh kiếm Excalibur cho Arthur, biểu tượng của quyền lực chính nghĩa. Bà là người giám sát sự cân bằng của thế giới phép thuật và thực tại.",
        "Nội dung này dạy về trách nhiệm khi nắm giữ quyền lực trong tay và sự công minh trong mọi quyết định."
      ],
      lessonPoints: ["Trách nhiệm với quyền lực", "Giữ gìn sự công bằng", "Bảo hộ các giá trị đúng đắn"]
    }
  };

  const currentLesson = lessons[characterData?.id] || lessons['merlin'];

  return (
    <div className={`character-page ${characterData?.bg || 'bg-forest'}`}>
      <FrameClipPath />
      <div className="full-screen-container" style={{ overflowY: 'auto', paddingBottom: '40px' }}>
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

        <main className="main-layout fade-in" style={{ alignItems: 'flex-start', paddingTop: '4vh' }}>
          <div className="info-box" style={{ flex: '0 1 650px' }}>
            <span className="character-title" style={{ color: '#c4b998', letterSpacing: '3px' }}>
              CHƯƠNG: {characterData?.name.toUpperCase()}
            </span>
            <h1 className="character-name" style={{ fontSize: '2.8rem', margin: '15px 0' }}>
              {currentLesson.title}
            </h1>
            <h3 style={{ fontStyle: 'italic', color: '#a89968', marginBottom: '25px', fontFamily: 'Cormorant Garamond' }}>
              "{currentLesson.subtitle}"
            </h3>
            
            <div className="character-description" style={{ 
              borderLeft: '2px solid rgba(168, 153, 104, 0.4)', 
              paddingLeft: '25px',
              fontSize: '1.15rem',
              lineHeight: '1.8'
            }}>
              {currentLesson.content.map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: '20px', color: '#d1cdc0' }}>{paragraph}</p>
              ))}
            </div>

            <div className="lesson-summary" style={{ 
              background: 'rgba(168, 153, 104, 0.05)', 
              padding: '25px', 
              borderRadius: '4px',
              border: '1px solid rgba(168, 153, 104, 0.2)',
              marginTop: '35px'
            }}>
              <h4 className="thumb-name" style={{ marginBottom: '15px', display: 'block' }}>Ghi chú bài học:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {currentLesson.lessonPoints.map((point, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', color: '#a89968' }}>
                    <span style={{ color: '#fff', marginRight: '15px', fontSize: '0.8rem' }}>★</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="action-buttons" style={{ marginTop: '40px' }}>
              <button className="btn-action primary" onClick={onBack}>
                Xác nhận hoàn thành
              </button>
            </div>
          </div>

          <div className="main-portrait" style={{ position: 'sticky', top: '5vh' }}>
            <div className="portrait-frame" style={{ width: '300px', height: '420px' }}>
              <img src={characterData?.image} alt={characterData?.name} className="portrait-img" />
              <FrameSVG className="svg-border" size="large" />
              <div className="annotation top" style={{ width: '100%', textAlign: 'center', bottom: '-35px', top: 'auto' }}>
                {characterData?.title}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentPage;