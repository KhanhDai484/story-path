import React from 'react';

const stages = [
  { id: 1, title: "Chặng 1: Khát vọng Độc lập", desc: "Sự tất yếu và vai trò lãnh đạo của Đảng", color: "bg-red-600" },
  { id: 2, title: "Chặng 2: Đảng là Đạo đức, Văn minh", desc: "Bản chất và nguyên tắc hoạt động của Đảng", color: "bg-orange-500" },
  { id: 3, title: "Chặng 3: Người Công bộc của Dân", desc: "Công tác xây dựng đội ngũ Cán bộ, Đảng viên", color: "bg-yellow-500" },
  { id: 4, title: "Chặng 4: Quyền lực thuộc về Nhân dân", desc: "Bản chất Nhà nước dân chủ: Của dân, Do dân, Vì dân", color: "bg-green-600" },
  { id: 5, title: "Chặng 5: Thượng tôn Pháp luật", desc: "Nhà nước pháp quyền và Kiểm soát quyền lực", color: "bg-blue-600" },
  { id: 6, title: "Chặng 6: Vững bước tương lai", desc: "Vận dụng xây dựng Đảng & Nhà nước giai đoạn hiện nay", color: "bg-purple-700" },
];

const JourneyMap = () => {
  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-16 text-stone-800 uppercase tracking-widest">
          Hành trình Tư tưởng & Lãnh đạo
        </h2>

        {/* SVG Path - Đường nối uốn lượn */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full h-[85%] hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 400 1000" fill="none" className="stroke-stone-300 stroke-[4px] stroke-dasharray-8">
            <path d="M200,0 C350,150 50,300 200,450 C350,600 50,750 200,900" 
                  fill="none" 
                  strokeDasharray="12" />
          </svg>
        </div>

        <div className="space-y-24 relative z-10">
          {stages.map((stage, index) => (
            <div 
              key={stage.id} 
              className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Thẻ nội dung */}
              <div className="w-1/2 px-6">
                <div className={`p-6 rounded-2xl shadow-xl bg-white border-b-4 border-r-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer
                  ${index % 2 === 0 ? 'border-red-500' : 'border-blue-500'}`}>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{stage.title}</h3>
                  <p className="text-stone-600 text-sm italic">{stage.desc}</p>
                </div>
              </div>

              {/* Nút điểm mốc (Point) */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold ${stage.color} ring-8 ring-stone-100`}>
                  {stage.id}
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;