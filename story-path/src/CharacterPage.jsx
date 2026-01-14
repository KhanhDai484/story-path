import { useState } from 'react'
import './CharacterPage.css'

// Import images
import merlinImg from './pictures/2.jpg'
import avallachImg from './pictures/3.jpg'
import morgianImg from './pictures/4.jpg'
import pelleasImg from './pictures/5.jpg'
import logoImg from './pictures/6.jpg'
import FrameSVG from './components/FrameSVG'
import FrameClipPath from './components/FrameClipPath'

function CharacterPage({ onBack }) {
  const [currentCharacter, setCurrentCharacter] = useState('Merlin')

  const characters = {
    Merlin: {
      name: 'Merlin',
      title: 'The Immortal Soul of Britain',
      description: 'King, Prophet, Bard. Merlin is the Soul of Britain, and he is Immortal.',
      image: merlinImg
    },
    Avallach: {
      name: 'Avallach',
      title: 'The Wise Elder',
      description: 'Ancient guardian of the old ways, keeper of forgotten knowledge.',
      image: avallachImg
    },
    Morgian: {
      name: 'Morgian',
      title: 'The Mystic Warrior',
      description: 'A fierce protector of the realm, wielding both blade and magic.',
      image: morgianImg
    },
    Pelleas: {
      name: 'Pelleas',
      title: 'The Shadow Knight',
      description: 'A mysterious figure bound by ancient oaths and dark secrets.',
      image: pelleasImg
    }
  }

  const nextCharacters = [
    { name: 'Avallach', image: avallachImg },
    { name: 'Morgian', image: morgianImg },
    { name: 'Pelleas', image: pelleasImg }
  ]

  const current = characters[currentCharacter]

  return (
    <div className="character-page">
      {/* SVG Clip Path Definition */}
      <FrameClipPath />
      
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="menu-text" onClick={onBack}>Menu</div>
            <div className="header-line"></div>
          </div>
          <img src={logoImg} alt="Logo" className="logo" />
          <div className="header-right">
            <div className="header-line"></div>
            <button className="more-button">⋯</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* Left Section - Character Info */}
          <section className="left-section">
            <h1 className="character-name">{current.name}</h1>
            <h2 className="character-title">{current.title}</h2>
            <p className="character-description">{current.description}</p>

            {/* Navigation */}
            <nav className="navigation-section">
              <div className="nav-item">
                <h3>The People</h3>
                <span className="nav-arrows">←←←←</span>
              </div>
            </nav>
          </section>

          {/* Center Section - Main Character Image */}
          <section className="center-section">
            <div className="main-character-frame">
              <img 
                src={current.image} 
                alt={current.name} 
                className="main-character-image"
              />
              <FrameSVG className="frame-border" size="large" />
            </div>
          </section>

          {/* Right Section - Next Characters */}
          <section className="right-section">
            <h2 className="next-character-title">Next Character</h2>
            <div className="character-grid">
              {nextCharacters.map((char) => (
                <div 
                  key={char.name}
                  className="character-card"
                  onClick={() => setCurrentCharacter(char.name)}
                >
                  <div className="character-card-frame">
                    <img 
                      src={char.image} 
                      alt={char.name} 
                      className="character-card-image"
                    />
                    <FrameSVG className="card-frame-border" size="small" />
                  </div>
                  <h3 className="character-card-name">{char.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer Navigation */}
        <footer className="footer-nav">
          <div className="footer-left">
            <h3>The Clans</h3>
            <span className="nav-arrows">←←←←</span>
          </div>
          <div className="footer-right">
            <span className="nav-arrows">→→→→</span>
            <h3>The Lineages</h3>
          </div>
          <div className="footer-line-full"></div>
        </footer>
      </div>
    </div>
  )
}

export default CharacterPage
