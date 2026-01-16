import { useState } from 'react';
import './CharacterPage.css';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

const QuizPage = ({ onBack, characterData }) => {
  // 1. Dữ liệu 6 bộ câu hỏi (mỗi bộ 3 câu) cho 6 nhân vật
  const allQuizzes = {
    merlin: [
      {
        question: "Theo Hồ Chí Minh, quy luật ra đời của Đảng Cộng sản Việt Nam là sự kết hợp của những nhân tố nào?",
        options: ["Chủ nghĩa Mác - Lênin và phong trào công nhân", "Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước", "Chủ nghĩa Mác - Lênin và phong trào yêu nước", "Phong trào công nhân và phong trào yêu nước"],
        correct: 1
      },
      {
        question: "Nhân tố nào được Hồ Chí Minh khẳng định là quyết định mọi thắng lợi của cách mạng Việt Nam?",
        options: ["Sức mạnh của quân đội", "Sự giúp đỡ của quốc tế", "Sự lãnh đạo của Đảng Cộng sản", "Truyền thống yêu nước"],
        correct: 2
      },
      {
        question: "Trong tác phẩm 'Đường cách mệnh', Hồ Chí Minh ví Đảng như bộ phận nào của con thuyền?",
        options: ["Cánh buồm", "Mỏ neo", "Người cầm lái", "Thân thuyền"],
        correct: 2
      },
      {
        question: "Việc đưa thêm nhân tố 'Phong trào yêu nước' vào quy luật hình thành Đảng cho thấy điều gì?",
        options: ["Sự vận dụng sáng tạo chủ nghĩa Mác - Lênin của Hồ Chí Minh", "Sự dập khuôn lý luận phương Tây", "Sự coi nhẹ vai trò giai cấp công nhân", "Sự thiếu hụt lý luận Mác-xít"],
        correct: 0
      },
      {
        question: "Đảng Cộng sản Việt Nam là đội tiên phong của những lực lượng nào?",
        options: ["Chỉ riêng giai cấp công nhân", "Tầng lớp trí thức và địa chủ", "Giai cấp công nhân, nhân dân lao động và cả dân tộc Việt Nam", "Các doanh nghiệp và thương nhân"],
        correct: 2
      },
      {
        question: "Vì sao sự ra đời của Đảng Cộng sản Việt Nam được coi là một tất yếu lịch sử?",
        options: ["Vì sự sụp đổ của các triều đại phong kiến", "Vì yêu cầu của thực tiễn cuộc đấu tranh dân tộc và giai cấp", "Vì sự áp đặt từ quốc tế", "Vì ý muốn chủ quan của các cá nhân"],
        correct: 1
      },
      {
        question: "Hồ Chí Minh khẳng định: 'Đảng có vững cách mệnh mới...', vế tiếp theo là gì?",
        options: ["Phát triển", "Thành công", "Bền lâu", "Mạnh mẽ"],
        correct: 1
      },
      {
        question: "Đảng Cộng sản Việt Nam đại diện cho lợi ích của ai?",
        options: ["Lợi ích của các đảng viên", "Lợi ích của giai cấp công nhân, nhân dân lao động và của cả dân tộc", "Lợi ích của tầng lớp thượng lưu", "Lợi ích của cá nhân lãnh đạo"],
        correct: 1
      },
      {
        question: "Nội dung nào thuộc Chặng 1 trong giáo trình Tư tưởng Hồ Chí Minh (trang 124-125)?",
        options: ["Xây dựng nhà nước pháp quyền", "Sự tất yếu và vai trò lãnh đạo của Đảng", "Công tác cán bộ đảng viên", "Kiểm soát quyền lực nhà nước"],
        correct: 1
      },
      {
        question: "Hồ Chí Minh đã tiếp thu và vận dụng lý luận nào để xây dựng Đảng?",
        options: ["Chủ nghĩa hiện thực", "Chủ nghĩa Mác - Lênin", "Nho giáo truyền thống", "Lý thuyết dân chủ phương Tây"],
        correct: 1
      }
    ],
    arthur: [
      {
        question: "Hồ Chí Minh khẳng định bản chất của Đảng ta bằng cụm từ nổi tiếng nào?",
        options: ["Đảng của giai cấp", "Đảng là đạo đức, là văn minh", "Đảng là sức mạnh tuyệt đối", "Đảng là đội quân tiên phong"],
        correct: 1
      },
      {
        question: "Theo Hồ Chí Minh, nguyên tắc tổ chức cơ bản nhất của Đảng Cộng sản Việt Nam là gì?",
        options: ["Tự phê bình và phê bình", "Đoàn kết thống nhất", "Tập trung dân chủ", "Kỷ luật nghiêm minh"],
        correct: 2
      },
      {
        question: "Hồ Chí Minh ví việc 'Tự phê bình và phê bình' trong Đảng giống như hoạt động nào hàng ngày?",
        options: ["Ăn cơm", "Uống nước", "Rửa mặt", "Quét nhà"],
        correct: 2
      },
      {
        question: "Để giữ gìn sự đoàn kết thống nhất trong Đảng, Hồ Chí Minh căn dặn phải giữ gìn nó như giữ gìn bộ phận nào?",
        options: ["Bàn tay của mình", "Trái tim của mình", "Con ngươi của mắt mình", "Khối óc của mình"],
        correct: 2
      },
      {
        question: "Đặc điểm nào dưới đây thể hiện một Đảng 'Văn minh' theo tư tưởng Hồ Chí Minh?",
        options: ["Hoạt động ngoài khuôn khổ pháp luật", "Đề ra đường lối đúng đắn và luôn đổi mới", "Chỉ tập trung vào lợi ích của đảng viên", "Sử dụng mệnh lệnh thay cho thuyết phục"],
        correct: 1
      },
      {
        question: "Nguyên tắc nào được coi là 'quy luật phát triển' của Đảng?",
        options: ["Kỷ luật tự giác", "Tự phê bình và phê bình", "Liên hệ mật thiết với nhân dân", "Đoàn kết quốc tế"],
        correct: 1
      },
      {
        question: "Hồ Chí Minh yêu cầu Đảng phải hoạt động trong khuôn khổ nào để trở thành một Đảng văn minh?",
        options: ["Điều lệ riêng của Đảng", "Hiến pháp và Pháp luật", "Các phong tục tập quán", "Các quy ước quốc tế"],
        correct: 1
      },
      {
        question: "Kỷ luật của Đảng theo tư tưởng Hồ Chí Minh mang tính chất gì?",
        options: ["Cưỡng chế tuyệt đối", "Nghiêm minh và tự giác", "Lỏng lẻo tùy tình hình", "Chỉ dành cho đảng viên cấp dưới"],
        correct: 1
      },
      {
        question: "Trong tư tưởng Hồ Chí Minh, mục đích cao nhất của Đảng là gì?",
        options: ["Củng cố quyền lực cho Đảng", "Xây dựng đội ngũ cán bộ đông đảo", "Phục vụ lợi ích của nhân dân và dân tộc", "Mở rộng quan hệ quốc tế"],
        correct: 2
      },
      {
        question: "Sự đoàn kết trong Đảng phải dựa trên cơ sở lý luận nào?",
        options: ["Chủ nghĩa Mác - Lênin và đường lối của Đảng", "Kinh nghiệm cá nhân người lãnh đạo", "Sự thỏa hiệp giữa các nhóm", "Lợi ích kinh tế trước mắt"],
        correct: 0
      }
    ],
    lancelot: [
      {
        question: "Hồ Chí Minh khẳng định yếu tố nào là 'cái gốc của mọi công việc'?",
        options: ["Tiền bạc và cơ sở vật chất", "Cán bộ", "Vũ khí và trang bị", "Sự hỗ trợ từ quốc tế"],
        correct: 1
      },
      {
        question: "Theo Hồ Chí Minh, 'Muôn việc thành công hay thất bại, đều do...'?",
        options: ["Thời thế quyết định", "Cán bộ tốt hay kém", "Lãnh đạo cấp cao", "Sự may mắn"],
        correct: 1
      },
      {
        question: "Trong mối quan hệ giữa 'Đức' và 'Tài', Hồ Chí Minh xác định yếu tố nào là gốc?",
        options: ["Tài là gốc", "Cả hai bằng nhau", "Đạo đức là gốc", "Năng lực chuyên môn là gốc"],
        correct: 2
      },
      {
        question: "Hồ Chí Minh quan niệm thế nào về người 'Có Tài mà không có Đức'?",
        options: ["Làm việc gì cũng khó", "Vẫn có thể lãnh đạo", "Là người vô dụng", "Được nhân dân tin tưởng"],
        correct: 2
      },
      {
        question: "Hồ Chí Minh quan niệm thế nào về người 'Có Đức mà không có Tài'?",
        options: ["Là người vô dụng", "Làm việc gì cũng khó", "Không thể làm cách mạng", "Vẫn hoàn thành xuất sắc nhiệm vụ"],
        correct: 1
      },
      {
        question: "Hệ thống 4 đức tính cách mạng 'Cần, Kiệm, Liêm, Chính' thuộc về tiêu chuẩn nào của cán bộ?",
        options: ["Năng lực chuyên môn", "Trình độ lý luận", "Đạo đức cách mạng", "Kỹ năng giao tiếp"],
        correct: 2
      },
      {
        question: "Hồ Chí Minh ví cán bộ có vai trò gì giữa Đảng, Chính phủ và nhân dân?",
        options: ["Người ra lệnh", "Cầu nối và dây chuyền", "Người giám sát", "Người trung gian"],
        correct: 1
      },
      {
        question: "Trong công tác đánh giá cán bộ, Hồ Chí Minh yêu cầu phải tránh điều gì?",
        options: ["Cái nhìn phiến diện, hẹp hòi", "Đánh giá quá chi tiết", "Khen ngợi cán bộ", "Sử dụng tiêu chuẩn chuyên môn"],
        correct: 0
      },
      {
        question: "'Khéo dùng cán bộ' theo tư tưởng Hồ Chí Minh nghĩa là gì?",
        options: ["Dùng người thân cận", "Dùng đúng người, đúng việc", "Dùng người nghe lời", "Dùng người có bằng cấp cao nhất"],
        correct: 1
      },
      {
        question: "Tại sao cán bộ, đảng viên phải thường xuyên rèn luyện đạo đức cách mạng?",
        options: ["Để được tăng lương", "Để giữ vững bản chất cách mạng và tránh tha hóa", "Để có vị trí cao hơn", "Để lấy lòng quần chúng"],
        correct: 1
      }
    ],
    percival: [
      {
        question: "Theo Hồ Chí Minh, trong Nhà nước dân chủ, quyền lực tối cao thuộc về ai?",
        options: ["Chính phủ", "Quốc hội", "Nhân dân", "Đảng Cộng sản"],
        correct: 2
      },
      {
        question: "Khái niệm 'Nhà nước của dân' trong tư tưởng Hồ Chí Minh nhấn mạnh điều gì?",
        options: ["Dân là người nộp thuế cho nhà nước", "Tất cả quyền lực nhà nước thuộc về nhân dân", "Dân phải tuân thủ tuyệt đối mệnh lệnh cán bộ", "Nhà nước quản lý toàn bộ đời sống của dân"],
        correct: 1
      },
      {
        question: "Hình thức dân chủ nào cho phép nhân dân bầu ra các đại biểu thay mặt mình quản lý nhà nước?",
        options: ["Dân chủ trực tiếp", "Dân chủ đại diện", "Dân chủ sơ khai", "Dân chủ tập trung"],
        correct: 1
      },
      {
        question: "Câu nói: 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh' thể hiện bản chất nào của Nhà nước?",
        options: ["Nhà nước của dân", "Nhà nước do dân", "Nhà nước vì dân", "Nhà nước pháp quyền"],
        correct: 2
      },
      {
        question: "Hồ Chí Minh khẳng định vị thế của nhân dân đối với Nhà nước bằng hai chữ nào?",
        options: ["Chủ và Làm chủ", "Khách và Người phục vụ", "Dân và Quan", "Người bị trị và Người trị"],
        correct: 0
      },
      {
        question: "Trong Nhà nước dân chủ, nhân dân có quyền gì nếu các đại biểu không xứng đáng?",
        options: ["Khen thưởng", "Bãi miễn", "Cách chức ngay lập tức", "Không có quyền can thiệp"],
        correct: 1
      },
      {
        question: "Cụm từ nào thể hiện đúng nhất vai trò của cán bộ nhà nước trong mối quan hệ với dân?",
        options: ["Cha mẹ của dân", "Quan cách mạng", "Công bộc, người đầy tớ của dân", "Người chỉ huy"],
        correct: 2
      },
      {
        question: "Theo Hồ Chí Minh, nguồn gốc sức mạnh của Nhà nước nằm ở đâu?",
        options: ["Sức mạnh quân sự", "Sự ủng hộ và lòng dân", "Tiềm lực kinh tế", "Sự hỗ trợ từ quốc tế"],
        correct: 1
      },
      {
        question: "Đặc điểm của 'Nhà nước do dân' là gì?",
        options: ["Dân lập nên, dân nuôi dưỡng và dân quản lý", "Dân đứng ngoài các hoạt động chính trị", "Dân chỉ đi bầu cử một lần rồi thôi", "Dân làm thay mọi việc của Chính phủ"],
        correct: 0
      },
      {
        question: "Mối quan hệ giữa nhân dân và pháp luật trong tư tưởng Hồ Chí Minh là gì?",
        options: ["Pháp luật dùng để trừng trị dân", "Pháp luật là công cụ để dân thực hiện quyền làm chủ", "Dân không cần biết pháp luật", "Chỉ cán bộ mới cần hiểu pháp luật"],
        correct: 1
      }
    ],
    galahad: [
      {
        question: "Đặc điểm nổi bật nhất của Nhà nước pháp quyền theo tư tưởng Hồ Chí Minh là gì?",
        options: ["Quản lý xã hội bằng mệnh lệnh cá nhân", "Quản lý xã hội bằng Hiến pháp và Pháp luật", "Không cần hệ thống pháp luật phức tạp", "Chỉ ưu tiên thực hiện đạo đức"],
        correct: 1
      },
      {
        question: "Hồ Chí Minh quan niệm thế nào về tính chất của pháp luật nước ta?",
        options: ["Pháp luật chỉ để trừng trị", "Pháp luật nhân nghĩa, vì con người", "Pháp luật phục vụ lợi ích giai cấp thống trị", "Pháp luật là bất biến, không thể thay đổi"],
        correct: 1
      },
      {
        question: "Theo Hồ Chí Minh, loại giặc nào được coi là 'giặc nội xâm'?",
        options: ["Giặc đói và giặc dốt", "Tham ô, lãng phí và quan liêu", "Giặc ngoại xâm từ biên giới", "Các phần tử phản động quốc tế"],
        correct: 1
      },
      {
        question: "Vì sao phải thực hiện kiểm soát quyền lực Nhà nước?",
        options: ["Để gây khó khăn cho cán bộ", "Để đảm bảo quyền lực luôn thuộc về nhân dân và tránh tha hóa", "Để thay đổi chính phủ thường xuyên", "Để tăng cường quyền lực cho Đảng"],
        correct: 1
      },
      {
        question: "Hồ Chí Minh ví 'Dân như nước, có thể chở thuyền nhưng cũng có thể lật thuyền' nhằm nhấn mạnh vai trò gì của nhân dân?",
        options: ["Vai trò lao động sản xuất", "Vai trò đóng góp tài chính", "Vai trò giám sát và kiểm soát quyền lực", "Vai trò hưởng thụ lợi ích"],
        correct: 2
      },
      {
        question: "Hành vi nào được Hồ Chí Minh định nghĩa là 'ăn cắp của công làm của riêng'?",
        options: ["Lãng phí", "Quan liêu", "Tham ô", "Hách dịch"],
        correct: 2
      },
      {
        question: "Căn bệnh nào được coi là nguồn gốc đẻ ra tham ô và lãng phí?",
        options: ["Bệnh chủ quan", "Bệnh quan liêu", "Bệnh nể nang", "Bệnh lười biếng"],
        correct: 1
      },
      {
        question: "Trong quản lý Nhà nước, Hồ Chí Minh yêu cầu kết hợp giữa các yếu tố nào?",
        options: ["Pháp trị và Đức trị", "Mệnh lệnh và Cưỡng chế", "Khen thưởng và Trừng phạt", "Tự do và Kỷ luật"],
        correct: 0
      },
      {
        question: "Người dân có quyền làm gì khi thấy cán bộ, cơ quan nhà nước làm sai?",
        options: ["Im lặng chịu đựng", "Phê bình và giám sát", "Tự ý thay đổi luật pháp", "Không có quyền can thiệp"],
        correct: 1
      },
      {
        question: "Để pháp luật được thực thi nghiêm minh, Hồ Chí Minh yêu cầu cán bộ phải như thế nào?",
        options: ["Đứng trên pháp luật", "Nêu gương và thượng tôn pháp luật", "Chỉ áp dụng luật cho nhân dân", "Linh hoạt bỏ qua lỗi của người thân"],
        correct: 1
      }
    ],
    tristan: [
      {
        question: "Trong giai đoạn hiện nay, nhiệm vụ nào được xác định là 'nhiệm vụ then chốt'?",
        options: ["Phát triển kinh tế", "Xây dựng Đảng", "Phát triển văn hóa", "Mở rộng quan hệ quốc tế"],
        correct: 1
      },
      {
        question: "Phương châm dân chủ nào mới được bổ sung trong giai đoạn hiện nay theo tư tưởng Hồ Chí Minh?",
        options: ["Dân biết, dân bàn", "Dân làm, dân kiểm tra", "Dân giám sát, dân thụ hưởng", "Dân ủng hộ, dân giúp đỡ"],
        correct: 2
      },
      {
        question: "Đảng lãnh đạo Nhà nước bằng phương thức nào là chủ yếu?",
        options: ["Làm thay công việc của các cơ quan nhà nước", "Đề ra đường lối, chủ trương và thông qua công tác cán bộ", "Sử dụng mệnh lệnh hành chính trực tiếp", "Quản lý trực tiếp các nguồn lực kinh tế"],
        correct: 1
      },
      {
        question: "Yêu cầu đối với đội ngũ cán bộ trong bối cảnh mới là gì?",
        options: ["Chỉ cần có bằng cấp cao", "Vừa hồng vừa chuyên, có năng lực thích ứng với hội nhập", "Chỉ cần lòng nhiệt tình", "Tuyệt đối nghe lời cấp trên"],
        correct: 1
      },
      {
        question: "Để xây dựng Nhà nước hiệu lực, hiệu quả hiện nay, cần tập trung vào khâu đột phá nào?",
        options: ["Tăng thêm số lượng cán bộ", "Cải cách hành chính và tinh gọn bộ máy", "Mua sắm thêm trang thiết bị", "Hạn chế quyền giám sát của dân"],
        correct: 1
      },
      {
        question: "Kiên định mục tiêu nào là nội dung cốt lõi trong vận dụng tư tưởng Hồ Chí Minh hiện nay?",
        options: ["Độc lập dân tộc gắn liền với chủ nghĩa xã hội", "Chỉ tập trung phát triển kinh tế thị trường", "Mở cửa bằng mọi giá", "Ưu tiên phát triển công nghiệp nặng"],
        correct: 0
      },
      {
        question: "Vai trò của nhân dân đối với Đảng trong giai đoạn hiện nay là gì?",
        options: ["Chỉ là đối tượng được lãnh đạo", "Nguồn sức mạnh, đối tượng phục vụ và chủ thể giám sát Đảng", "Người thực hiện các nghĩa vụ thuế", "Người đứng ngoài các quyết định chính trị"],
        correct: 1
      },
      {
        question: "Đảng phải làm gì để nâng cao năng lực cầm quyền trong thời đại 4.0?",
        options: ["Giữ nguyên phương thức làm việc cũ", "Thường xuyên tự đổi mới, tự chỉnh đốn và nâng cao trí tuệ", "Tăng cường kiểm soát thông tin mạng", "Chỉ tập trung vào công tác tư tưởng"],
        correct: 1
      },
      {
        question: "Đâu là thước đo giá trị của một Nhà nước dân chủ hiện nay?",
        options: ["Số lượng các dự án lớn", "Sự hài lòng và niềm tin của nhân dân", "Diện tích lãnh thổ", "Tốc độ tăng trưởng GDP đơn thuần"],
        correct: 1
      },
      {
        question: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước có giá trị như thế nào đối với cách mạng Việt Nam?",
        options: ["Chỉ có giá trị trong quá khứ", "Là nền tảng tư tưởng và kim chỉ nam cho hành động", "Chỉ mang tính lý thuyết sách vở", "Là tài liệu tham khảo không bắt buộc"],
        correct: 1
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

    // Delay transition to allow user to see the result (Green/Red)
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000); // 2 seconds delay
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
                    className={`btn-action ${selectedAnswer !== null
                        ? index === questions[currentQuestion].correct
                          ? 'correct'
                          : selectedAnswer === index
                            ? 'wrong'
                            : ''
                        : selectedAnswer === index ? 'primary' : ''
                      }`}
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