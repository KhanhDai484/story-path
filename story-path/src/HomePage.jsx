import { useState } from 'react'
import './HomePage.css'
import logoImg from './pictures/6.jpg'

function HomePage({ onEnter }) {
  return (
    <div className="homepage">
      <div className="homepage-container">
        {/* Header */}
        <header className="homepage-header">
          <div className="menu-text">Menu</div>
          <button className="more-button">⋯</button>
        </header>

        {/* Main Content */}
        <div className="homepage-content">
          
          {/* Center Circle with Sword */}
          <div className="hero-section">
            <div className="symbol-circle">
              {/* Symbols around the circle */}
              <div className="symbol symbol-1">⚔</div>
              <div className="symbol symbol-2">❄</div>
              <div className="symbol symbol-3">🐺</div>
              <div className="symbol symbol-4">🦌</div>
              <div className="symbol symbol-5">⚜</div>
              <div className="symbol symbol-6">🐉</div>
              <div className="symbol symbol-7">🌙</div>
              <div className="symbol symbol-8">☀</div>
            </div>
            
            {/* Sword */}
            <div className="sword-container">
              <div className="sword"></div>
            </div>
          </div>

          {/* Title */}
          
        </div>

        {/* Footer */}
        <footer className="homepage-footer">
          <button className="footer-btn get-access" onClick={onEnter}>
            <span className="arrow-left">←←←←</span>
            Get Access
          </button>

          <div className="title-section">
            <h4 className="subtitle">THE PENDRAGON CYCLE</h4>
            <h1 className="main-title">
              Rise <span className="title-of">of the</span> MerliN
            </h1>
          </div>
          
          
          <button className="footer-btn view-trailer" onClick={onEnter}>
            View trailer
            <span className="arrow-right">→→→→</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
