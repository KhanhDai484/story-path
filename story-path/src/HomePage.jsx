import { useState } from 'react'
import './HomePage.css'
import logoImg from './pictures/6.jpg'

function HomePage({ onEnter }) {
  return (
    <div className="homepage">
      <div className="homepage-container">
        {/* Header */}
        <header className="homepage-header">
          <h1 className="main-title">HÀNH TRÌNH TƯ TƯỞNG<br />HỒ CHÍ MINH</h1>
        </header>

        {/* Main Content */}
        <div className="homepage-content">

          {/* Center Circle with Sword */}
          <div className="hero-section">
            <div className="symbol-circle">
              {/* 4 Symbols around the circle - positioned at 0°, 90°, 180°, 270° */}
              <div className="symbol symbol-1">
                <img src="https://i.pinimg.com/1200x/7a/46/3c/7a463c21fdd361c2048a90c022bca09a.jpg" alt="symbol" className="symbol-img" />
              </div>
              <div className="symbol symbol-2">
                <img src="https://i.pinimg.com/1200x/7d/4f/df/7d4fdfc2066633eb60e4215f8cd16b4e.jpg" alt="symbol" className="symbol-img" />
              </div>
              <div className="symbol symbol-3">
                <img src="https://i.pinimg.com/1200x/7a/46/3c/7a463c21fdd361c2048a90c022bca09a.jpg" alt="symbol" className="symbol-img" />
              </div>
              <div className="symbol symbol-4">
                <img src="https://i.pinimg.com/1200x/7d/4f/df/7d4fdfc2066633eb60e4215f8cd16b4e.jpg" alt="symbol" className="symbol-img" />
              </div>
            </div>

            {/* Center Cross */}
            <div className="sword-container">
              <div className="center-symbol">
                <img src="https://i.pinimg.com/1200x/db/02/67/db02679d039a230d9a37caec679d1b3b.jpg" alt="cross" className="center-cross" />
              </div>
            </div>
          </div>

          {/* Title */}

        </div>

        {/* Footer */}
        <footer className="homepage-footer">
          <button className="footer-btn get-access">
            <span className="arrow-left">←←←←</span>
          </button>

          <div className="title-section">

            <h1 className="subtitle">
              <span className="title-of">“ Từ tìm đường cứu nước đến tư tưởng Độc lập dân tộc gắn liền với CNXH”</span>
            </h1>
          </div>


          <button className="footer-btn view-trailer" onClick={onEnter}>
            Bắt đầu
            <span className="arrow-right">→→→→</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
