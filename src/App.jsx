import { useState, useRef, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CharacterGrid from './components/CharacterGrid'
import CharacterGuide from './components/CharacterGuide'
import { charactersData } from './data/charactersData'
import logo from './img/2XKO-Outline-logo-external.png'
import ImpoprtantMessageBar from './components/ImpoprtantMessageBar'
import InstallPWA from './components/InstallPWA'

// Helper to get character from URL path
const getCharacterFromPath = () => {
  const path = window.location.pathname.slice(1).toLowerCase() // Remove leading slash
  if (!path) return null
  return charactersData.find(char => char.name.toLowerCase() === path)
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState(() => getCharacterFromPath())
  const guideRef = useRef(null)

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const character = getCharacterFromPath()
      setSelectedCharacter(character)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Scroll to guide when character is selected from URL on initial load
  useEffect(() => {
    if (selectedCharacter && guideRef.current) {
      setTimeout(() => {
        guideRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, []) // Only run on mount

  // Update document title based on selected character
  useEffect(() => {
    if (selectedCharacter) {
      document.title = `How to 2XKO - ${selectedCharacter.name}`
    } else {
      document.title = 'How to 2XKO'
    }
  }, [selectedCharacter])

  const filteredCharacters = charactersData.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character)
    setSearchTerm('')
    // Update URL without adding to history stack if same character
    const newPath = `/${character.name.toLowerCase()}`
    if (window.location.pathname !== newPath) {
      window.history.pushState({ character: character.name }, '', newPath)
    }
    // Scroll to the character guide after a short delay to ensure it renders
    setTimeout(() => {
      guideRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setSelectedCharacter(null)
    // Clear URL when searching
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
    }
  }

  const handleCloseGuide = () => {
    setSelectedCharacter(null)
    // Clear URL when closing guide
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
    }
  }

  return (
    <div className="app">
      {<ImpoprtantMessageBar/>}
      <h1>How to</h1>
      <div className="logo-container">
        <img src={logo} alt="2XKO Logo" className="logo" />
      </div>
      
      <SearchBar value={searchTerm} onChange={handleSearch} />
      
      <InstallPWA />
      
      <CharacterGrid 
        characters={filteredCharacters} 
        onCharacterClick={handleCharacterClick}
        selectedCharacter={selectedCharacter}
      />

      <CharacterGuide 
        ref={guideRef}
        character={selectedCharacter} 
        onClose={handleCloseGuide} 
      />
    </div>
  )
}

export default App
