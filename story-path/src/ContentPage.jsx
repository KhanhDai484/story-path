import { useState } from 'react';
import './CharacterPage.css';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

const ContentPage = ({ onBack, characterData }) => {
  const lessons = {
    merlin: {
      title: "Sự tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
      subtitle: "Nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam",
      path: "Trang 124 – 125",
      sections: [
        {
          heading: "1. Sự ra đời của Đảng là một tất yếu lịch sử",
          content: "Sự ra đời của Đảng Cộng sản Việt Nam không phải là ngẫu nhiên mà là kết quả tất yếu của quá trình đấu tranh dân tộc và giai cấp trong thời đại mới. Hồ Chí Minh đã vận dụng sáng tạo chủ nghĩa Mác - Lênin vào hoàn cảnh cụ thể của nước ta.",
          details: [
            "Quy luật hình thành đặc thù: Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước.",
            "Ý nghĩa: Việc kết hợp phong trào yêu nước cho thấy Đảng đại diện cho lợi ích chung của cả dân tộc."
          ]
        },
        {
          heading: "2. Vai trò lãnh đạo của Đảng",
          content: "Hồ Chí Minh khẳng định Đảng là nhân tố hàng đầu quyết định thắng lợi. Người ví Đảng như 'người cầm lái' cho con thuyền cách mạng.",
          details: [
            "Sức mạnh tổ chức: 'Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy'.",
            "Bản chất: Là đội tiên phong của giai cấp công nhân, nhân dân lao động và của cả dân tộc Việt Nam."
          ]
        }
      ],
      lessonPoints: [
        "Đảng ra đời là sự kết hợp của 3 nhân tố (Mác-Lênin, phong trào công nhân, phong trào yêu nước).",
        "Đảng là người cầm lái, là nhân tố quyết định thắng lợi.",
        "Đảng không có lợi ích nào khác ngoài lợi ích của nhân dân và dân tộc."
      ]
    },

    arthur: {
      title: "Bản chất và nguyên tắc hoạt động của một Đảng văn minh",
      subtitle: "Đảng là đạo đức, là văn minh",
      path: "Trang 126 – 136",
      sections: [
        {
          heading: "1. Quan điểm về Đảng văn minh",
          content: "Hồ Chí Minh khẳng định: 'Đảng ta là đạo đức, là văn minh'. Đảng văn minh là một Đảng tiêu biểu cho lương tri, trí tuệ và danh dự của dân tộc.",
          details: [
            "Đảng hoạt động trong khuôn khổ Hiến pháp và Pháp luật.",
            "Đội ngũ đảng viên trong sạch, lối sống lành mạnh.",
            "Đảng có năng lực trí tuệ để đề ra đường lối đúng đắn, tiên phong.",
            "Đảng luôn đổi mới, tự chỉnh đốn để phù hợp với sự phát triển của thời đại."
          ]
        },
        {
          heading: "2. Các nguyên tắc xây dựng Đảng kiểu mới",
          content: "Để giữ vững bản chất cách mạng, Đảng phải tuân thủ nghiêm ngặt 8 nguyên tắc tổ chức và sinh hoạt Đảng.",
          details: [
            "Tập trung dân chủ: Là nguyên tắc tổ chức cơ bản nhất (Tập trung trên cơ sở dân chủ, dân chủ dưới sự lãnh đạo tập trung).",
            "Tự phê bình và phê bình: Là quy luật phát triển của Đảng, phải thực hiện thường xuyên như 'rửa mặt mỗi ngày'.",
            "Đoàn kết thống nhất: Đoàn kết là sức mạnh, phải giữ gìn sự đoàn kết như 'giữ gìn con ngươi của mắt mình'.",
            "Kỷ luật nghiêm minh, tự giác: Mọi đảng viên đều bình đẳng trước kỷ luật của Đảng.",
            "Mật thiết liên hệ với nhân dân: Đảng không ở trên dân, không xa rời dân."
          ]
        },
        {
          heading: "3. Đảng lãnh đạo bằng phương pháp khoa học",
          content: "Đảng lãnh đạo thông qua đường lối, chủ trương và bằng sự gương mẫu của đảng viên, không phải bằng mệnh lệnh áp đặt.",
          details: [
            "Lãnh đạo bằng thuyết phục, vận động và nêu gương.",
            "Kiểm tra, kiểm soát là những khâu then chốt trong phương thức lãnh đạo."
          ]
        }
      ],
      lessonPoints: [
        "Đảng phải vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân.",
        "Tập trung dân chủ là nguyên tắc sống còn trong tổ chức Đảng.",
        "Xây dựng Đảng là nhiệm vụ then chốt để đảm bảo vai trò cầm quyền lâu dài."
      ]
    },

    lancelot: {
    id: 3,
    title: "Công tác xây dựng đội ngũ 'gốc của mọi công việc'",
    subtitle: "Cán bộ là cái gốc của mọi công việc, muôn việc thành công hay thất bại đều do cán bộ tốt hay kém",
    path: "Trang 137 – 141",
    sections: [
      {
        heading: "1. Vị trí, vai trò của đội ngũ cán bộ, đảng viên",
        content: "Hồ Chí Minh khẳng định cán bộ là nhân tố quyết định sự thành bại của cách mạng. Người coi cán bộ là 'cái dây chuyền của bộ máy', là 'cầu nối' giữa Đảng, Chính phủ với nhân dân.",
        details: [
          "Vai trò then chốt: 'Cán bộ là cái gốc của mọi công việc'.",
          "Mối liên hệ: Cán bộ có trách nhiệm giải thích chính sách cho dân hiểu và phản hồi nguyện vọng của dân cho Đảng.",
          "Quyết định thành công: 'Muôn việc thành công hay thất bại, đều do cán bộ tốt hay kém'."
        ]
      },
      {
        heading: "2. Tiêu chuẩn của người cán bộ, đảng viên",
        content: "Người yêu cầu cán bộ phải có sự thống nhất giữa 'Đức' và 'Tài', trong đó đạo đức là nền tảng.",
        details: [
          "Về Đạo đức (Cái gốc): Phải có đạo đức cách mạng (Trung với nước, hiếu với dân; Cần, kiệm, liêm, chính, chí công vô tư).",
          "Về Năng lực (Tài): Phải có trình độ chính trị, chuyên môn, nghiệp vụ và năng lực tổ chức thực tiễn.",
          "Mối quan hệ Đức - Tài: Đức là gốc, Tài là quan trọng; có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó."
        ]
      },
      {
        heading: "3. Nội dung công tác cán bộ",
        content: "Hồ Chí Minh chỉ dẫn hệ thống các khâu quan trọng để xây dựng đội ngũ cán bộ vững mạnh.",
        details: [
          "Huấn luyện cán bộ: Phải huấn luyện toàn diện về lý luận, chuyên môn và công tác thực tế.",
          "Đánh giá cán bộ: Phải hiểu đúng cán bộ, tránh cái nhìn phiến diện, hẹp hòi.",
          "Sử dụng cán bộ: Khéo dùng cán bộ, dùng đúng người đúng việc, tránh tình trạng 'thợ rèn bảo đi đóng tủ'.",
          "Chính sách cán bộ: Phải quan tâm, giúp đỡ và tạo điều kiện để cán bộ phát triển."
        ]
      }
    ],
    lessonPoints: [
      "Đạo đức là cái gốc của người cách mạng.",
      "Cán bộ là nhân tố quyết định mọi thắng lợi.",
      "Công tác cán bộ phải khoa học, khách quan và công tâm."
    ]
    },

    galahad: {
      id: 4,
      title: "Bản chất Nhà nước dân chủ (Của dân, Do dân, Vì dân)",
      subtitle: "Tất cả quyền lực nhà nước thuộc về nhân dân",
      path: "Trang 142 – 150",
      sections: [
        {
          heading: "1. Nhà nước của nhân dân",
          content: "Trong tư tưởng Hồ Chí Minh, Nhà nước của dân nghĩa là mọi quyền lực trong Nhà nước và trong xã hội đều thuộc về nhân dân.",
          details: [
            "Nhân dân có quyền bầu ra các đại biểu đại diện cho mình và có quyền bãi miễn nếu họ không xứng đáng.",
            "Luật pháp là công cụ bảo vệ quyền lợi của dân, mọi công dân đều bình đẳng trước pháp luật.",
            "Nhân dân có quyền kiểm soát, phê bình Nhà nước."
          ]
        },
        {
          heading: "2. Nhà nước do nhân dân",
          content: "Nhà nước do nhân dân lập nên, do nhân dân nuôi dưỡng, ủng hộ và do nhân dân quản lý.",
          details: [
            "Nhân dân tham gia vào các công việc của Nhà nước thông qua dân chủ trực tiếp và dân chủ đại diện.",
            "Phương châm: 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh'.",
            "Mọi chính sách, nghị quyết đều phải dựa trên nguyện vọng và sự đồng lòng của dân."
          ]
        },
        {
          heading: "3. Nhà nước vì nhân dân",
          content: "Nhà nước lấy lợi ích của nhân dân làm mục tiêu cao nhất. Mọi hoạt động của bộ máy nhà nước đều phải phục vụ đời sống vật chất và tinh thần của dân.",
          details: [
            "Cán bộ nhà nước phải là 'người đầy tớ trung thành', là 'công bộc' của nhân dân.",
            "Nhà nước chăm lo cho những người yếu thế, đảm bảo ai cũng có cơm ăn, áo mặc, ai cũng được học hành.",
            "Chống đặc quyền, đặc lợi trong bộ máy nhà nước."
          ]
        }
      ],
      lessonPoints: [
        "Quyền lực chính trị thuộc về nhân dân là bản chất của dân chủ.",
        "Dân là chủ và dân làm chủ.",
        "Cán bộ không phải là 'quan cách mạng' mà là người phục vụ nhân dân."
      ]
    },

    percival: {
      id: 5,
      title: "Xây dựng Nhà nước pháp quyền và kiểm soát quyền lực",
      subtitle: "Thượng tôn pháp luật và kiên quyết chống 'giặc nội xâm'",
      path: "Trang 151 – 163",
      sections: [
        {
          heading: "1. Xây dựng Nhà nước hợp hiến, hợp pháp",
          content: "Hồ Chí Minh đặc biệt coi trọng việc quản lý xã hội bằng Hiến pháp và pháp luật. Ngay sau cách mạng tháng Tám, Người đã đề ra nhiệm vụ cấp bách là phải có một Hiến pháp dân chủ.",
          details: [
            "Quản lý bằng pháp luật: Thay thế lối quản lý bằng mệnh lệnh cá nhân bằng hệ thống pháp luật chặt chẽ.",
            "Pháp quyền nhân nghĩa: Pháp luật không chỉ là công cụ trừng trị mà còn phải mang tính giáo dục, vì con người và bảo vệ quyền con người.",
            "Gương mẫu chấp hành: Mọi công dân và cán bộ đều phải 'thượng tôn pháp luật', không có ngoại lệ."
          ]
        },
        {
          heading: "2. Kiểm soát quyền lực Nhà nước",
          content: "Quyền lực luôn có xu hướng bị tha hóa nếu không được kiểm soát. Hồ Chí Minh đã chỉ ra các phương thức để đảm bảo quyền lực luôn thuộc về nhân dân.",
          details: [
            "Kiểm soát từ bên trên: Thông qua công tác kiểm tra, giám sát của Đảng và các cơ quan nhà nước cấp trên.",
            "Kiểm soát từ bên dưới: Phát huy vai trò giám sát của nhân dân. Người khẳng định: 'Dân như nước, có thể chở thuyền nhưng cũng có thể lật thuyền'.",
            "Tự kiểm soát: Sự tự rèn luyện, phê bình và tự phê bình của chính đội ngũ cán bộ, công chức."
          ]
        },
        {
          heading: "3. Đấu tranh chống 'giặc nội xâm'",
          content: "Người coi tham ô, lãng phí, quan liêu là những kẻ thù nguy hiểm của nhân dân và của Nhà nước dân chủ.",
          details: [
            "Tham ô: Là hành động 'ăn cắp của công làm của riêng'.",
            "Lãng phí: Tuy không lấy của công nhưng gây thiệt hại cho dân, cho nước.",
            "Quan liêu: Là nguồn gốc đẻ ra tham ô, lãng phí; cán bộ xa dân, không nắm vững tình hình thực tế.",
            "Giải pháp: Phải kết hợp giữa 'Xây' (giáo dục) và 'Chống' (xử lý nghiêm minh theo kỷ luật Đảng và pháp luật)."
          ]
        }
      ],
      lessonPoints: [
        "Pháp luật là công cụ quan trọng nhất để thực hiện quyền làm chủ của dân.",
        "Kiểm soát quyền lực là việc làm tất yếu để bảo vệ sự trong sạch của bộ máy.",
        "Chống tham ô, lãng phí là một mặt trận quan trọng không kém gì chống giặc ngoại xâm."
      ]
    },

    tristan: {
      id: 6,
      title: "Vận dụng xây dựng Đảng và Nhà nước trong giai đoạn hiện nay",
      subtitle: "Kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      path: "Trang 164 – 167",
      sections: [
        {
          heading: "1. Kiên định nền tảng tư tưởng và mục tiêu cách mạng",
          content: "Trong bối cảnh mới, Đảng phải luôn kiên định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm kim chỉ nam cho mọi hành động.",
          details: [
            "Giữ vững mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
            "Nâng cao năng lực cầm quyền và sức chiến đấu của Đảng trước những thách thức toàn cầu.",
            "Chủ động đấu tranh phản bác các quan điểm sai trái, thù địch."
          ]
        },
        {
          heading: "2. Phát huy dân chủ và sức mạnh đại đoàn kết",
          content: "Đổi mới phương thức lãnh đạo của Đảng gắn liền với việc phát huy quyền làm chủ thực sự của nhân dân.",
          details: [
            "Thực hiện tốt phương châm: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
            "Đảng lãnh đạo nhưng phải dựa vào dân, lắng nghe dân và chịu sự giám sát của nhân dân.",
            "Xây dựng khối đại đoàn kết toàn dân tộc làm động lực phát triển đất nước."
          ]
        },
        {
          heading: "3. Đổi mới phương thức lãnh đạo đối với Nhà nước",
          content: "Đảng lãnh đạo Nhà nước bằng đường lối, bằng công tác cán bộ và sự gương mẫu của đảng viên chứ không làm thay công việc của Nhà nước.",
          details: [
            "Phân định rõ chức năng lãnh đạo của Đảng và chức năng quản lý của Nhà nước.",
            "Đẩy mạnh cải cách hành chính, xây dựng bộ máy nhà nước tinh gọn, hiệu lực, hiệu quả.",
            "Đổi mới phong cách làm việc: Chống quan liêu, xa dân; đề cao tinh thần trách nhiệm cá nhân, nhất là người đứng đầu."
          ]
        }
      ],
      lessonPoints: [
        "Xây dựng Đảng là then chốt, phát triển kinh tế là trung tâm.",
        "Phát huy dân chủ là chìa khóa để giải quyết mọi khó khăn.",
        "Đổi mới phương thức lãnh đạo để Đảng luôn ngang tầm nhiệm vụ lịch sử."
      ]
    }
  };

  // Lấy dữ liệu bài học dựa trên ID, mặc định là merlin nếu không tìm thấy
  const currentLesson = lessons[characterData?.id] || lessons.merlin;

  return (
    <div className={`character-page ${characterData?.bg || 'bg-forest'}`}>
      <FrameClipPath />

      <div className="full-screen-container" style={{ overflowY: 'auto', paddingBottom: '40px' }}>
        <header className="header" style={{ position: 'sticky', top: 0, zIndex: 20 }}>
          <div className="header-left">
            <div className="menu-text" onClick={onBack} style={{ cursor: 'pointer' }}>Trở về</div>
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
              CHƯƠNG: {characterData?.name?.toUpperCase() || "Tư tưởng Hồ Chí Minh"}
            </span>

            <h1 className="character-name" style={{ fontSize: '2.5rem', margin: '15px 0', lineHeight: '1.2' }}>
              {currentLesson.title}
            </h1>

            <h3 style={{ fontStyle: 'italic', color: '#a89968', marginBottom: '25px', fontWeight: '400' }}>
              “{currentLesson.subtitle}”
            </h3>

            {/* Render nội dung chính từ mảng sections */}
            <div className="character-description" style={{ borderLeft: '2px solid rgba(168,153,104,0.4)', paddingLeft: '25px' }}>
              {currentLesson.sections?.map((section, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: '#d8cfa3', marginBottom: '10px', fontSize: '1.2rem' }}>{section.heading}</h4>
                  <p style={{ marginBottom: '12px', color: '#d1cdc0', lineHeight: '1.6' }}>{section.content}</p>
                  {section.details && section.details.length > 0 && (
                    <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                      {section.details.map((detail, idx) => (
                        <li key={idx} style={{ color: '#a89968', marginBottom: '6px', fontSize: '0.95rem' }}>
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="lesson-summary" style={{ marginTop: '35px' }}>
              <h4 className="thumb-name" style={{ color: '#c4b998', marginBottom: '15px' }}>Ghi chú bài học:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {currentLesson.lessonPoints?.map((point, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', color: '#a89968', alignItems: 'flex-start' }}>
                    <span style={{ marginRight: '12px', color: '#fff' }}>★</span>
                    <span>{point}</span>
                  </li>
                ))}
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