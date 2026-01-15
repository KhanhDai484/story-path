import { useState } from 'react';
import './CharacterPage.css';

// import logoImg from './pictures/6.jpg';
import FrameSVG from './components/FrameSVG';
import FrameClipPath from './components/FrameClipPath';

// Import 6 ảnh tương ứng 6 chặng
import img1 from './pictures/1.jpg';
import img2 from './pictures/2.jpg';
import img3 from './pictures/3.jpg';
import img4 from './pictures/4.jpg';
import img5 from './pictures/5.jpg';
import img6 from './pictures/6.jpg';

function CharacterPage({ onBack }) {
  const stages = {
    Stage1: { name: 'Merlin', title: 'The Prophet', bg: 'bg-forest', image: img1, desc: 'Merlin is the Soul of Britain, and he is Immortal.' },
    Stage2: { name: 'Avallach', title: 'The Wise Elder', bg: 'bg-mountain', image: img2, desc: 'Ancient guardian of the old ways, keeper of forgotten knowledge.' },
    Stage3: { name: 'Morgian', title: 'The Mystic', bg: 'bg-castle', image: img3, desc: 'A fierce protector of the realm, wielding both blade and magic.' },
    Stage4: { name: 'Pelleas', title: 'The Shadow', bg: 'bg-cave', image: img4, desc: 'A mysterious figure bound by ancient oaths and dark secrets.' },
    Stage5: { name: 'Galahad', title: 'The Knight', bg: 'bg-lake', image: img5, desc: 'The pure of heart, destined to find the sacred grail.' },
    Stage6: { name: 'Nimue', title: 'The Lady', bg: 'bg-ocean', image: img6, desc: 'Keeper of Excalibur, guiding the fate of kings.' },
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
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="menu-text" onClick={onBack}>Menu</div>
            <div className="header-line"></div>
          </div>
          {/* <img src={logoImg} alt="Logo" className="logo" /> */}
          <div className="header-right">
            <div className="header-line"></div>
            <button className="more-button">⋯</button>
          </div>
        </header>

        {/* Middle: Content */}
        <div className={`main-layout ${isExiting ? 'fade-out' : 'fade-in'}`}>
          <div className="info-box">
            <h1 className="character-name">{current.name}</h1>
            <h2 className="character-title">{current.title}</h2>
            <p className="character-description">{current.desc}</p>
          </div>

          <div className="main-portrait">
            <div className="portrait-frame">
              <img src={current.image} alt={current.name} className="portrait-img" />
              <FrameSVG className="svg-border" size="large" />
            </div>
          </div>
        </div>

        {/* Bottom: Journey Navigation */}
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