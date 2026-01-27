//Impoprt necessary modules and components
import { useState, useEffect, forwardRef } from 'react'
import './CharacterGuide.css'
import KeyMovesTab from './KeyMovesTab'
import SoloCombosTab from './SoloCombosTab'
import TopPlayersTab from './TopPlayersTab'
import MatchupsTab from './MatchupsTab'
import TeamSynergiesTab from './TeamSynergiesTab'
import GuidesTab from './GuidesTab'
  /* start of file
  File: src/components/CharacterGuide.jsx
  Purpose: Component to display a character guide with multiple tabs
  Params:
    - character: Object containing character data and tabs
      NOTE: the character object gets its info from Data(folder)/charactersData.js
    - onClose: Function to close the guide
  */

// Helper function to get the appropriate hero image offset based on screen width
const getHeroImageOffset = (heroImageOffset, isMobile) => {
  if (typeof heroImageOffset === 'object' && heroImageOffset !== null) {
    return isMobile ? (heroImageOffset.mobile ?? 0) : (heroImageOffset.desktop ?? 0)
  }
  // Fallback for legacy single value format
  return heroImageOffset || 0
}

const CharacterGuide = forwardRef(({ character, onClose }, ref) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800)

  useEffect(() => {
    setActiveTab(0)
  }, [character])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
//checks if NOT character or tabs exist and returns null if so. Safety check. 
  if (!character) return null
  if (!character.tabs || character.tabs.length === 0) return null
//sets current tab based on active tab state
  const currentTab = character.tabs[activeTab] || character.tabs[0]
//Displays the character guide and tabs, getting the name from Data(folder)/charactersData.js
  return (
    <div ref={ref} className="character-guide">
      <div className="hero-banner">
        <div className="hero-image-container">
          <img 
            key={character.name}
            src={`./champion-pics/${character.name.toLowerCase()}2.png`} 
            alt={character.name}
            className="hero-character-image"
            style={{ objectPosition: `center ${getHeroImageOffset(character.heroImageOffset, isMobile)}px` }}
          />
          <div className="hero-overlay"></div>
          {character.guideAuthor && (
            <div className="guide-credit">
              <span className="credit-text">written by <b>{character.guideAuthor.name}</b></span>
              <div className="credit-socials">
                {character.guideAuthor.youtube && (
                  <a href={character.guideAuthor.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                )}
                {character.guideAuthor.twitter && (
                  <a href={character.guideAuthor.twitter} target="_blank" rel="noopener noreferrer" title="Twitter/X">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                )}
                {character.guideAuthor.twitch && (
                  <a href={character.guideAuthor.twitch} target="_blank" rel="noopener noreferrer" title="Twitch">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="hero-content">
          <h2>{character.name.toUpperCase()}</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="tabs">
        {character.tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h3>{currentTab.title}</h3>
        {currentTab.id === 'key_moves' ? (
          <KeyMovesTab character={character} tabData={currentTab} />
        ) : currentTab.id === 'important_solo_combos' ? (
          <SoloCombosTab character={character} tabData={currentTab} />
        ) : currentTab.id === 'top_players' ? (
          <TopPlayersTab tabData={currentTab} />
        ) : currentTab.id === 'matchups' ? (
          <MatchupsTab tabData={currentTab} currentCharacter={character.name} />
        ) : currentTab.id === 'team_synergies' ? (
          <TeamSynergiesTab tabData={currentTab} />
        ) : currentTab.id === 'guides' ? (
          <GuidesTab tabData={currentTab} />
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>
    </div>
  )
})
//exports the CharacterGuide on completion
export default CharacterGuide
