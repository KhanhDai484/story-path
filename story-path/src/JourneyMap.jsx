import React from 'react';
import { Flag, ShieldCheck, Users, Landmark, Gavel, TrendingUp } from 'lucide-react';

const stages = [
  { id: 1, title: "Khát vọng Độc lập", subtitle: "Chặng 1", icon: <Flag size={32} /> },
  { id: 2, title: "Đảng là Đạo đức, Văn minh", subtitle: "Chặng 2", icon: <ShieldCheck size={32} /> },
  { id: 3, title: "Người Công bộc của Dân", subtitle: "Chặng 3", icon: <Users size={32} /> },
  { id: 4, title: "Quyền lực thuộc về Nhân dân", subtitle: "Chặng 4", icon: <Landmark size={32} /> },
  { id: 5, title: "Thượng tôn Pháp luật", subtitle: "Chặng 5", icon: <Gavel size={32} /> },
  { id: 6, title: "Vững bước tương lai", subtitle: "Chặng 6", icon: <TrendingUp size={32} /> },
];

const JourneyMap = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-['Montserrat'] relative">

      {/* Background Layer - Fixed & Full Screen */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Cinematic background"
          className="w-full h-full object-fill opacity-40"
          src="https://i.pinimg.com/736x/7d/23/19/7d2319136bcd9206c25ebc3b670742b9.jpg"
        />
        {/* Gradient Overlay để làm dịu ảnh nền */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col justify-center items-start">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">

            {/* Header */}
            <header className="mb-12 max-w-4xl">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-6 leading-tight drop-shadow-2xl">
                Hành trình <br /> Tư tưởng & Lãnh đạo
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 tracking-widest font-light border-l-4 border-[#da251d] pl-6 uppercase">
                Theo dấu lịch sử – Kiến tạo tương lai
              </p>
            </header>

            {/* Navigation Stages */}
            <nav className="space-y-2 max-w-2xl">
              {stages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#stage-${stage.id}`}
                  className="group flex items-center p-4 transition-all duration-300 hover:bg-white/5 rounded-lg"
                >
                  <div className="mr-6 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
                    {stage.icon}
                  </div>
                  <div>
                    <span className="block text-[#D4AF37]/70 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      {stage.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-white group-hover:text-[#D4AF37] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                      {stage.title}
                    </h2>
                  </div>
                </a>
              ))}
            </nav>

            {/* Action Button & Divider */}

          </div>
        </main>

        {/* Footer */}

      </div>


    </div>
  );
};

export default JourneyMap;