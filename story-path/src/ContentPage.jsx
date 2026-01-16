import { useState } from 'react';
import './CharacterPage.css';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

const ContentPage = ({ onBack, characterData }) => {
  const lessons = {
    merlin: {
      title: "Hành trình tìm đường cứu nước của Hồ Chí Minh (1911–1920)",
      subtitle: "Từ nỗi đau mất nước đến khát vọng tìm ra con đường giải phóng dân tộc đúng đắn",
      content: [
        "Đầu thế kỷ XX, dân tộc Việt Nam chìm trong ách đô hộ của thực dân Pháp. Các phong trào yêu nước theo khuynh hướng phong kiến và tư sản lần lượt thất bại, để lại một câu hỏi lớn chưa có lời giải: Làm thế nào để cứu nước và giành lại độc lập cho dân tộc?",
        "Sinh ra trong hoàn cảnh đất nước bị áp bức, Hồ Chí Minh sớm nhận thức sâu sắc nỗi đau mất nước và số phận khổ cực của nhân dân. Người không bằng lòng với những con đường cứu nước cũ vốn đã chứng minh là không hiệu quả.",
        "Năm 1911, Hồ Chí Minh rời Tổ quốc, bắt đầu hành trình bôn ba qua nhiều quốc gia và châu lục. Qua thực tiễn sống và lao động cùng người lao động nghèo, Người nhận ra bản chất thật sự của các chế độ thực dân.",
        "Từ thực tiễn ấy, Người đi đến kết luận quan trọng: cách mạng tư sản không thể giải phóng triệt để các dân tộc bị áp bức. Việt Nam cần một con đường cách mạng mới, triệt để hơn.",
        "Giai đoạn 1911–1920 đặt nền móng tư tưởng cho việc lựa chọn con đường cách mạng vô sản trong giai đoạn tiếp theo."
      ],
      lessonPoints: [
        "Nhận thức sớm về sự bế tắc của các con đường cứu nước cũ.",
        "Quyết tâm ra đi tìm đường cứu nước bằng thực tiễn, không sao chép máy móc.",
        {
          title: "Trải nghiệm thực tế giúp Hồ Chí Minh:",
          items: [
            "Hiểu rõ bản chất của chủ nghĩa thực dân.",
            "Nhận ra hạn chế của cách mạng tư sản."
          ]
        },
        "Khẳng định tinh thần độc lập, sáng tạo và vì dân tộc trong tư duy Hồ Chí Minh."
      ]
    },

    arthur: {
      title: "Tiếp thu chủ nghĩa Mác – Lênin và xác định con đường cứu nước (1920–1930)",
      subtitle: "Bước ngoặt tư tưởng quyết định trong hành trình cách mạng",
      content: [
        "Năm 1920, Hồ Chí Minh tiếp cận Luận cương về vấn đề dân tộc và thuộc địa của Lênin.",
        "Người nhận ra cách mạng giải phóng dân tộc phải gắn liền với cách mạng vô sản.",
        "Đây là sự lựa chọn có chọn lọc, phù hợp với điều kiện lịch sử Việt Nam."
      ],
      lessonPoints: [
        "Chủ nghĩa Mác – Lênin là cơ sở lý luận khoa học.",
        "Cách mạng Việt Nam phải do giai cấp công nhân lãnh đạo.",
        "Bước ngoặt tư tưởng mang tính quyết định."
      ]
    },

    lancelot: {
      title: "Thành lập Đảng Cộng sản Việt Nam (1930)",
      subtitle: "Tất yếu lịch sử của cách mạng Việt Nam",
      content: [
        "Phong trào cách mạng phát triển nhưng thiếu tổ chức thống nhất.",
        "Hồ Chí Minh chuẩn bị đầy đủ về tư tưởng, chính trị và tổ chức.",
        "Đảng Cộng sản Việt Nam ra đời năm 1930."
      ],
      lessonPoints: [
        "Sự ra đời của Đảng là tất yếu lịch sử.",
        "Đảng là nhân tố quyết định thắng lợi cách mạng.",
        "Cách mạng Việt Nam có tổ chức lãnh đạo thống nhất."
      ]
    },

    galahad: {
      title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam cầm quyền",
      subtitle: "Lãnh đạo nhưng không đứng trên nhân dân",
      content: [
        "Đảng cầm quyền phải giữ vững đạo đức cách mạng.",
        "Phải chống quan liêu, tham nhũng, xa rời quần chúng.",
        "Đảng là người lãnh đạo và là người đầy tớ trung thành của nhân dân."
      ],
      lessonPoints: [
        "Đạo đức là nền tảng của Đảng cầm quyền.",
        "Mọi quyền lực đều bắt nguồn từ nhân dân.",
        "Đảng lãnh đạo để phục vụ."
      ]
    },

    percival: {
      title: "Nhà nước của dân, do dân, vì dân",
      subtitle: "Nhân dân là chủ thể tối cao của quyền lực",
      content: [
        "Nhà nước Việt Nam là Nhà nước của nhân dân.",
        "Nhân dân có quyền giám sát và làm chủ.",
        "Cán bộ là công bộc của dân."
      ],
      lessonPoints: [
        "Quyền lực thuộc về nhân dân.",
        "Nhà nước tồn tại vì lợi ích của dân.",
        "Dân chủ là bản chất của chế độ."
      ]
    },

    tristan: {
      title: "Giá trị tư tưởng Hồ Chí Minh trong thời đại ngày nay",
      subtitle: "Kim chỉ nam cho sự phát triển bền vững",
      content: [
        "Tư tưởng Hồ Chí Minh có giá trị bền vững.",
        "Là nền tảng tư tưởng của Đảng.",
        "Soi đường cho sự phát triển đất nước."
      ],
      lessonPoints: [
        "Giá trị lý luận sâu sắc.",
        "Giá trị thực tiễn lâu dài.",
        "Ý nghĩa trong xây dựng Nhà nước pháp quyền."
      ]
    }
  };

  const currentLesson = lessons[characterData?.id] || lessons.merlin;

  return (
    <div className={`character-page ${characterData?.bg || 'bg-forest'}`}>
      <FrameClipPath />

      <div className="full-screen-container" style={{ overflowY: 'auto', paddingBottom: '40px' }}>
        <header className="header" style={{ position: 'sticky', top: 0, zIndex: 20 }}>
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
              CHƯƠNG: {characterData?.name?.toUpperCase()}
            </span>

            <h1 className="character-name" style={{ fontSize: '2.8rem', margin: '15px 0' }}>
              {currentLesson.title}
            </h1>

            <h3 style={{ fontStyle: 'italic', color: '#a89968', marginBottom: '25px' }}>
              “{currentLesson.subtitle}”
            </h3>

            <div className="character-description" style={{ borderLeft: '2px solid rgba(168,153,104,0.4)', paddingLeft: '25px' }}>
              {currentLesson.content.map((p, i) => (
                <p key={i} style={{ marginBottom: '18px', color: '#d1cdc0' }}>{p}</p>
              ))}
            </div>

            <div className="lesson-summary" style={{ marginTop: '35px' }}>
              <h4 className="thumb-name">Ghi chú bài học:</h4>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {currentLesson.lessonPoints.map((point, i) => {
                  if (typeof point === 'string') {
                    return (
                      <li key={i} style={{ marginBottom: '12px', display: 'flex', color: '#a89968' }}>
                        <span style={{ marginRight: '12px', color: '#fff' }}>★</span>
                        {point}
                      </li>
                    );
                  }

                  return (
                    <li key={i} style={{ marginBottom: '14px' }}>
                      <strong style={{ color: '#d8cfa3' }}>✦ {point.title}</strong>
                      <ul style={{ listStyle: 'none', paddingLeft: '18px', marginTop: '6px' }}>
                        {point.items.map((sub, j) => (
                          <li key={j} style={{ color: '#a89968', marginBottom: '6px' }}>
                            • {sub}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="btn-action primary" onClick={onBack} style={{ marginTop: '30px' }}>
              Xác nhận hoàn thành
            </button>
          </div>

          <div className="main-portrait" style={{ position: 'sticky', top: '8vh' }}>
            <div className="portrait-frame">
              <img src={characterData?.image} alt={characterData?.name} className="portrait-img" />
              <FrameSVG className="svg-border" size="large" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentPage;
