import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import CharacterPage from './CharacterPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleEnter = () => {
    setCurrentPage('character')
  }

  const handleBack = () => {
    setCurrentPage('home')
  }

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onEnter={handleEnter} />
      ) : (
        <CharacterPage onBack={handleBack} />
      )}
    </>
  )
}

export default App
