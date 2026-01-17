import React, { useState, useEffect } from 'react';
import { MapPin, Star, Flag, Compass } from 'lucide-react';

const stages = [
  { id: 1, title: "Chặng 1: Khát vọng Độc lập", desc: "Sự tất yếu và vai trò lãnh đạo của Đảng", color: "bg-[#c0392b]", position: 0 },
  { id: 2, title: "Chặng 2: Đảng là Đạo đức, Văn minh", desc: "Bản chất và nguyên tắc hoạt động của Đảng", color: "bg-[#d35400]", position: 20 },
  { id: 3, title: "Chặng 3: Người Công bộc của Dân", desc: "Công tác xây dựng đội ngũ Cán bộ, Đảng viên", color: "bg-[#f39c12]", position: 40 },
  { id: 4, title: "Chặng 4: Quyền lực thuộc về Nhân dân", desc: "Bản chất Nhà nước dân chủ: Của dân, Do dân, Vì dân", color: "bg-[#27ae60]", position: 60 },
  { id: 5, title: "Chặng 5: Thượng tôn Pháp luật", desc: "Nhà nước pháp quyền và Kiểm soát quyền lực", color: "bg-[#2980b9]", position: 80 },
  { id: 6, title: "Chặng 6: Vững bước tương lai", desc: "Vận dụng xây dựng Đảng & Nhà nước giai đoạn hiện nay", color: "bg-[#8e44ad]", position: 100 },
];

const JourneyMap = ({ onSelectStage }) => {
  const [activeStage, setActiveStage] = useState(null);
  const [animatedStages, setAnimatedStages] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    // Animation cho đường thẳng
    const lineTimer = setInterval(() => {
      setLineProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 30);

    // Animation cho từng stage xuất hiện tuần tự
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setAnimatedStages(prev => [...prev, stage.id]);
      }, 800 + index * 500);
    });

    return () => clearInterval(lineTimer);
  }, []);

  const handleStageClick = (stage) => {
    setActiveStage(activeStage === stage.id ? null : stage.id);
    if (onSelectStage) onSelectStage(stage.id);
  };

  return (

    <div className="min-h-screen py-12 px-4 relative overflow-hidden" style={{
      fontFamily: "'Lora', serif",
      backgroundImage: "url('https://i.pinimg.com/736x/f8/fc/19/f8fc192d9b85f76677e44c40e83124a4.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-3 mb-6">
            <Compass className="w-10 h-10 text-[#a89968] animate-spin-slow" />
            <h1 className="text-5xl md:text-6xl text-[#c4b998] drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 0 20px rgba(196, 185, 152, 0.3)" }}>
              Hành trình Tư tưởng & Lãnh đạo
            </h1>
            <Compass className="w-10 h-10 text-[#a89968] animate-spin-slow" />
          </div>
          <p className="text-[#8a8580] text-xl italic font-light">
            Theo dấu chân lịch sử, vẽ tương lai vững vàng
          </p>
        </div>

        {/* Main Journey Path */}
        <div className="relative bg-[#1c1917]/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-[#a89968]/30 shadow-2xl">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#a89968]/10 via-[#a89968]/30 to-[#a89968]/10"></div>

            {/* Animated progress line */}
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#c0392b] via-[#f39c12] to-[#8e44ad] transition-all duration-1000 shadow-lg"
              style={{
                height: `${lineProgress}%`,
                boxShadow: '0 0 20px rgba(168, 153, 104, 0.5)'
              }}
            ></div>

            {/* Glowing effect at the end */}
            {lineProgress > 95 && (
              <div
                className="absolute w-4 h-4 bg-purple-400 rounded-full -left-1.5 animate-pulse"
                style={{ top: `${lineProgress}%` }}
              ></div>
            )}
          </div>

          {/* Journey Stages */}
          <div className="relative space-y-24 md:space-y-32">
            {stages.map((stage, index) => {
              const isAnimated = animatedStages.includes(stage.id);
              const isActive = activeStage === stage.id;
              const isLeft = index % 2 === 0;

              return (
                <div key={stage.id} className="relative">
                  {/* Center Point */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={() => handleStageClick(stage)}
                      className={`relative group transition-all duration-500 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                    >
                      {/* Outer glow ring */}
                      <div className={`absolute inset-0 ${stage.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow`}></div>

                      {/* Main circle */}
                      <div className={`relative w-20 h-20 ${stage.color} rounded-full shadow-2xl flex items-center justify-center border-4 border-white transform transition-all duration-300 ${isActive ? 'scale-125 ring-4 ring-white/50' : 'group-hover:scale-110'
                        }`}>
                        {index === 0 ? (
                          <Flag className="w-10 h-10 text-white animate-wave" />
                        ) : index === stages.length - 1 ? (
                          <Star className="w-10 h-10 text-white animate-pulse" />
                        ) : (
                          <MapPin className="w-10 h-10 text-white" />
                        )}

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      {/* Stage number badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-800 border-2 border-gray-200 z-10">
                        {stage.id}
                      </div>

                      {/* Connecting dots */}
                      <div className={`absolute top-1/2 ${isLeft ? 'right-full mr-4' : 'left-full ml-4'} -translate-y-1/2 flex gap-1.5`}>
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-white/40 rounded-full"
                            style={{
                              animationDelay: `${i * 0.2}s`,
                              animation: 'pulse 2s ease-in-out infinite'
                            }}
                          ></div>
                        ))}
                      </div>
                    </button>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`relative w-full md:w-5/12 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      } ${isLeft ? 'md:mr-auto md:pr-24' : 'md:ml-auto md:pl-24'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      onClick={() => handleStageClick(stage)}
                      className={`bg-[#1c1917] backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#a89968]/20 cursor-pointer transform transition-all duration-300 ${isActive
                        ? 'scale-105 shadow-[0_0_30px_rgba(196,185,152,0.2)] ring-1 ring-[#c4b998]/50'
                        : 'hover:scale-102 hover:shadow-xl hover:border-[#a89968]/50'
                        }`}
                    >
                      {/* Colored accent bar */}
                      <div className={`h-1.5 ${stage.color} rounded-full mb-4 shadow-lg`}></div>

                      <h3 className="text-2xl font-bold text-[#c4b998] mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {stage.title}
                      </h3>
                      <p className="text-[#8a8580] leading-relaxed italic">
                        {stage.desc}
                      </p>

                      {/* Expand indicator */}
                      <div className={`mt-4 flex items-center gap-2 text-sm transition-all ${isActive ? 'text-[#c4b998] font-semibold' : 'text-[#5a5550]'
                        }`}>
                        <div className={`w-2 h-2 rounded-full ${stage.color}`}></div>
                        <span>{isActive ? 'Đang xem' : 'Nhấn để xem chi tiết'}</span>
                      </div>

                      {/* Corner decoration */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#a89968]/30 rounded-tr-lg`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#a89968]/30 rounded-bl-lg`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Start and End Markers */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
            <Flag className="w-5 h-5" />
            <span className="font-bold text-sm">Điểm Khởi Đầu</span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
            <Star className="w-5 h-5" />
            <span className="font-bold text-sm">Đích Đến</span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-center gap-3 flex-wrap animate-fade-in-up">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => handleStageClick(stage)}
              className={`px-5 py-2.5 rounded-sm font-medium transition-all duration-300 border ${activeStage === stage.id
                ? `bg-[#a89968] text-[#0c0a09] border-[#c4b998] shadow-[0_0_15px_rgba(168,153,104,0.4)] scale-110`
                : 'bg-transparent text-[#8a8580] border-[#5a5550] hover:text-[#c4b998] hover:border-[#a89968]'
                }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chặng {stage.id}
            </button>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-white/60 text-sm italic">
          💡 Nhấn vào các điểm hoặc thẻ để khám phá chi tiết từng chặng
        </div>
      </div>

    </div >
  );
};

export default JourneyMap;