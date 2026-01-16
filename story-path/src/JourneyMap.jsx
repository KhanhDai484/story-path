import React, { useState, useEffect } from 'react';
import { MapPin, Star, Flag, Compass } from 'lucide-react';

const stages = [
  { id: 1, title: "Chặng 1: Khát vọng Độc lập", desc: "Sự tất yếu và vai trò lãnh đạo của Đảng", color: "bg-red-600", position: 0 },
  { id: 2, title: "Chặng 2: Đảng là Đạo đức, Văn minh", desc: "Bản chất và nguyên tắc hoạt động của Đảng", color: "bg-orange-500", position: 20 },
  { id: 3, title: "Chặng 3: Người Công bộc của Dân", desc: "Công tác xây dựng đội ngũ Cán bộ, Đảng viên", color: "bg-yellow-500", position: 40 },
  { id: 4, title: "Chặng 4: Quyền lực thuộc về Nhân dân", desc: "Bản chất Nhà nước dân chủ: Của dân, Do dân, Vì dân", color: "bg-green-600", position: 60 },
  { id: 5, title: "Chặng 5: Thượng tôn Pháp luật", desc: "Nhà nước pháp quyền và Kiểm soát quyền lực", color: "bg-blue-600", position: 80 },
  { id: 6, title: "Chặng 6: Vững bước tương lai", desc: "Vận dụng xây dựng Đảng & Nhà nước giai đoạn hiện nay", color: "bg-purple-700", position: 100 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Animated stars */}
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
            <Compass className="w-10 h-10 text-yellow-400 animate-spin-slow" />
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
              Hành trình Tư tưởng & Lãnh đạo
            </h1>
            <Compass className="w-10 h-10 text-yellow-400 animate-spin-slow" />
          </div>
          <p className="text-blue-200 text-xl italic font-light">
            Theo dấu chân lịch sử, vẽ tương lai vững vàng
          </p>
        </div>

        {/* Main Journey Path */}
        <div className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/10"></div>
            
            {/* Animated progress line */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500 transition-all duration-1000 shadow-lg"
              style={{ 
                height: `${lineProgress}%`,
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
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
                      className={`relative group transition-all duration-500 ${
                        isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    >
                      {/* Outer glow ring */}
                      <div className={`absolute inset-0 ${stage.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow`}></div>
                      
                      {/* Main circle */}
                      <div className={`relative w-20 h-20 ${stage.color} rounded-full shadow-2xl flex items-center justify-center border-4 border-white transform transition-all duration-300 ${
                        isActive ? 'scale-125 ring-4 ring-white/50' : 'group-hover:scale-110'
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
                    className={`relative w-full md:w-5/12 transition-all duration-700 ${
                      isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${isLeft ? 'md:mr-auto md:pr-24' : 'md:ml-auto md:pl-24'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div 
                      onClick={() => handleStageClick(stage)}
                      className={`bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 cursor-pointer transform transition-all duration-300 ${
                        isActive 
                          ? 'scale-105 shadow-3xl ring-2 ring-white/50' 
                          : 'hover:scale-102 hover:shadow-3xl'
                      }`}
                    >
                      {/* Colored accent bar */}
                      <div className={`h-1.5 ${stage.color} rounded-full mb-4 shadow-lg`}></div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed italic">
                        {stage.desc}
                      </p>

                      {/* Expand indicator */}
                      <div className={`mt-4 flex items-center gap-2 text-sm transition-all ${
                        isActive ? 'text-gray-700 font-semibold' : 'text-gray-500'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${stage.color}`}></div>
                        <span>{isActive ? 'Đang xem' : 'Nhấn để xem chi tiết'}</span>
                      </div>

                      {/* Corner decoration */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 ${stage.color} rounded-full opacity-20`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-4 h-4 ${stage.color} rounded-full opacity-20`}></div>
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
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeStage === stage.id
                  ? `${stage.color} text-white shadow-xl scale-110 ring-2 ring-white/50`
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20'
              }`}
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

    </div>
  );
};

export default JourneyMap;