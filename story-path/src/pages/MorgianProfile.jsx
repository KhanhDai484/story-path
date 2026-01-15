import React from 'react';

const MorgianProfile = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-300 font-serif min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-700">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-background-light opacity-100 dark:opacity-0 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599940824399-b87987ce0799?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-0 dark:opacity-40 transition-opacity duration-700 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute inset-0 opacity-10 dark:opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-6 h-full flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="flex items-center justify-between py-6 border-b border-stone-400/30 dark:border-stone-600/30 mb-8 md:mb-16">
          <div className="flex items-center gap-4 w-1/3">
            <button className="font-display uppercase tracking-widest text-sm hover:text-primary transition-colors flex items-center gap-2 group">
              <span className="block w-6 h-0.5 bg-current transition-all group-hover:w-8"></span>
              Menu
            </button>
          </div>
          
          <div className="w-1/3 flex justify-center relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-400 dark:via-stone-500 to-transparent -translate-y-1/2 -z-10"></div>
            <div className="bg-background-light dark:bg-background-dark px-4 rounded-full border border-stone-300 dark:border-stone-700 p-2 shadow-lg">
              <span className="material-icons text-primary text-2xl">auto_awesome</span>
            </div>
          </div>

          <div className="w-1/3 flex justify-end">
            <button className="w-10 h-10 rounded-full border border-stone-400/50 dark:border-stone-600/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <span className="material-icons text-sm">more_horiz</span>
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-8 animate-fade-in">
            <div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-stone-900 dark:text-stone-100 tracking-tight leading-none mb-4">
                Morgian
              </h1>
              <h2 className="font-serif italic text-2xl md:text-3xl text-primary font-light mb-6">
                The Queen of Air and Darkness
              </h2>
              <p className="text-lg md:text-xl text-stone-700 dark:text-stone-400 font-light leading-relaxed max-w-md">
                Wielder of forbidden power, whose shadow tilts the balance toward ruin. Her reign is whispered in fear, her lineage etched in blood.
              </p>
            </div>

            <div className="pt-8 md:pt-16 space-y-6">
              {['The People', 'The Clans'].map((link) => (
                <a key={link} className="flex items-center gap-4 group text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                  <span className="material-icons transform group-hover:-translate-x-1 transition-transform">east</span>
                  <span className="font-display uppercase tracking-widest text-sm inline-block">
                    {link}
                  </span>
                  <span className="h-[1px] w-8 bg-current"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center items-center py-10 lg:py-0 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 dark:bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative w-full max-w-md aspect-[3/4] p-1">
              <div className="absolute inset-0 bg-stone-300 dark:bg-stone-700 frame-stepped shadow-2xl"></div>
              <div className="absolute inset-[3px] bg-background-light dark:bg-background-dark frame-stepped flex items-center justify-center">
                <div className="absolute inset-[4px] border border-primary/30 frame-stepped z-10 pointer-events-none"></div>
                <div className="w-full h-full p-2 frame-stepped overflow-hidden relative">
                  <img 
                    alt="Morgian Portrait" 
                    className="w-full h-full object-cover frame-stepped grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105" 
                    src="https://via.placeholder.com/600x800?text=Morgian"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none frame-stepped"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Characters & Lineages */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full pl-0 lg:pl-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-xl text-stone-600 dark:text-stone-300">Next Character</h3>
                <div className="h-[1px] flex-grow bg-stone-300 dark:bg-stone-700"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Pelleas', 'Charis'].map((name) => (
                  <div key={name} className="group cursor-pointer">
                    <div className="relative w-full aspect-[3/4] p-[1px] mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-stone-400 dark:bg-stone-600 frame-stepped-sm"></div>
                      <div className="absolute inset-[1px] bg-background-light dark:bg-background-dark frame-stepped-sm overflow-hidden">
                        <img alt={name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={`https://via.placeholder.com/150x200?text=${name}`} />
                      </div>
                    </div>
                    <p className="font-display text-center text-lg text-stone-500 dark:text-stone-400 group-hover:text-primary transition-colors">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end lg:mt-auto mt-8">
              <a className="flex flex-col items-end gap-1 group text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                <span className="font-display uppercase tracking-widest text-sm">Charis</span>
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-current"></span>
                  <span className="material-icons text-sm">keyboard_double_arrow_right</span>
                  <span className="font-display text-xl">The Lineages</span>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MorgianProfile;