import { useState } from 'react';
import NotationCheatsheet from './NotationCheatsheet';
import './NotationCheatsheet.css';
import './convertText.css';

import ComboNotationText from './ComboNotationText';

function SoloCombosTab({ character, tabData }) {
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false)
  const [imageModal, setImageModal] = useState({ isOpen: false, imageUrl: '', altText: '' })
  const [isCompactView, setIsCompactView] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})

  const openImageModal = (imageUrl, altText) => {
    setImageModal({ isOpen: true, imageUrl, altText })
  }

  const closeImageModal = () => {
    setImageModal({ isOpen: false, imageUrl: '', altText: '' })
  }

  const toggleAccordion = (section, index) => {
    const key = `${section}-${index}`
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const openVideoModal = (videoUrl, moveName, numericNotation) => {
    setVideoModal({ isOpen: true, videoUrl, moveName, numericNotation })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  }

  // Handle missing or malformed data
  if (!tabData) {
    return <p>No combo data available.</p>
  }

  if (tabData.content) {
    return <p>{tabData.content}</p>
  }

  const description = Array.isArray(tabData.description) ? tabData.description : []
  const description2 = Array.isArray(tabData.description2) ? tabData.description2 : []
  const description3 = Array.isArray(tabData.description3) ? tabData.description3 : []
  const combos = Array.isArray(tabData.combos) ? tabData.combos : []
  const comboEnders = Array.isArray(tabData.comboEnders) ? tabData.comboEnders : []

  return (
    <>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      
      <div className="notation-btn-wrapper">
        <button 
          className="notation-help-btn"
          onClick={() => setIsCheatsheetOpen(true)}
          title="Learn numpad notation"
        >
          <i className="fas fa-question-circle"></i> Numeric notation cheatsheet
        </button>
        <button 
          className="view-toggle-btn"
          onClick={() => setIsCompactView(!isCompactView)}
          title={isCompactView ? "Switch to table view" : "Switch to compact view"}
        >
          <i className={`fas ${isCompactView ? 'fa-table' : 'fa-list'}`}></i> {isCompactView ? 'Table View' : 'Compact View'}
        </button>
      </div>

      {combos.length === 0 ? (
        <p>No combos available for this character yet.</p>
      ) : isCompactView ? (
        <div className="compact-list">
          {combos.map((combo, index) => (
            <div key={index} className="compact-item">
              <div 
                className={`compact-item-header ${expandedItems[`combo-${index}`] ? 'expanded' : ''}`}
                onClick={() => toggleAccordion('combo', index)}
              >
                <span className="compact-purpose">{combo.purpose || 'General combo'}</span>
                <i className={`fas fa-chevron-${expandedItems[`combo-${index}`] ? 'up' : 'down'}`}></i>
              </div>
              {expandedItems[`combo-${index}`] && (
                <div className="compact-item-content">
                  <div className="compact-field">
                    <span className="compact-label">Numeric Notation:</span>
                    <span className="compact-value numeric"><ComboNotationText notation={combo.numericNotation} /></span>
                  </div>
                  <div className="compact-field">
                    <span className="compact-label">2XKO Notation:</span>
                    <img 
                      src={`.${combo.notationImage}`} 
                      alt={combo.notation} 
                      className="notation-image clickable-image compact-notation-image" 
                      onClick={() => openImageModal(`.${combo.notationImage}`, combo.notation)}
                      title="Click to enlarge"
                    />
                  </div>
                  <div className="compact-field">
                    <span className="compact-label">Video:</span>
                    <video 
                      controls 
                      loop
                      className="compact-video"
                    >
                      <source src={combo.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <table className="moves-table solo-combos-table">
          <thead>
            <tr>
              <th>Purpose</th>
              <th>
                Numeric Notation{' '}
                <i 
                  className="fas fa-question-circle notation-header-icon" 
                  onClick={() => setIsCheatsheetOpen(true)}
                  title="Learn numpad notation"
                ></i>
              </th>
              <th>2XKO Notation</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {combos.map((combo, index) => (
            <tr key={index}>
              <td className="description-cell">{combo.purpose || 'General combo'}</td>              
              <td className="numeric-notation-cell">
                <ComboNotationText notation={combo.numericNotation} />
              </td>
              <td className="notation-cell">
                  <img 
                    src={`.${combo.notationImage}`} 
                    alt={combo.notation} 
                    className="notation-image clickable-image" 
                    onClick={() => openImageModal(`.${combo.notationImage}`, combo.notation)}
                    title="Click to enlarge"
                  />
              </td>
              <td className="video-cell">
                <button 
                  className="video-icon-btn"
                  onClick={() => openVideoModal(combo.video, combo.notation, combo.numericNotation)}
                  title="View combo demonstration"
                >
                  <i className="fas fa-play-circle"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

      {description2.length > 0 && (
        <div className="combo-description-section">
          {description2.map((paragraph, index) => (
            <p key={`desc2-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}

      {comboEnders.length > 0 && (
        <>
          <h3 className="combo-enders-heading">Combo Enders</h3>
          {isCompactView ? (
            <div className="compact-list">
              {comboEnders.map((combo, index) => (
                <div key={index} className="compact-item">
                  <div 
                    className={`compact-item-header ${expandedItems[`ender-${index}`] ? 'expanded' : ''}`}
                    onClick={() => toggleAccordion('ender', index)}
                  >
                    <span className="compact-purpose">{combo.purpose || 'General ender'}</span>
                    <i className={`fas fa-chevron-${expandedItems[`ender-${index}`] ? 'up' : 'down'}`}></i>
                  </div>
                  {expandedItems[`ender-${index}`] && (
                    <div className="compact-item-content">
                      <div className="compact-field">
                        <span className="compact-label">Numeric Notation:</span>
                        <span className="compact-value numeric"><ComboNotationText notation={combo.numericNotation} /></span>
                      </div>
                      <div className="compact-field">
                        <span className="compact-label">2XKO Notation:</span>
                        <img 
                          src={`.${combo.notationImage}`} 
                          alt={combo.notation} 
                          className="notation-image clickable-image compact-notation-image" 
                          onClick={() => openImageModal(`.${combo.notationImage}`, combo.notation)}
                          title="Click to enlarge"
                        />
                      </div>
                      <div className="compact-field">
                        <span className="compact-label">Video:</span>
                        <video 
                          controls 
                          loop
                          className="compact-video"
                        >
                          <source src={combo.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
          <table className="moves-table solo-combos-table">
            <thead>
              <tr>
                <th>Purpose</th>
                <th>
                  Numeric Notation{' '}
                  <i 
                    className="fas fa-question-circle notation-header-icon" 
                    onClick={() => setIsCheatsheetOpen(true)}
                    title="Learn numpad notation"
                  ></i>
                </th>
                <th>2XKO Notation</th>
                <th>Video</th>
              </tr>
            </thead>
            <tbody>
              {comboEnders.map((combo, index) => (
              <tr key={index}>
                <td className="description-cell">{combo.purpose || 'General ender'}</td>              
                <td className="numeric-notation-cell">
                  <ComboNotationText notation={combo.numericNotation} />
                </td>
                <td className="notation-cell">
                    <img 
                      src={`.${combo.notationImage}`} 
                      alt={combo.notation} 
                      className="notation-image clickable-image" 
                      onClick={() => openImageModal(`.${combo.notationImage}`, combo.notation)}
                      title="Click to enlarge"
                    />
                </td>
                <td className="video-cell">
                  <button 
                    className="video-icon-btn"
                    onClick={() => openVideoModal(combo.video, combo.notation, combo.numericNotation)}
                    title="View combo demonstration"
                  >
                    <i className="fas fa-play-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          )}
        </>
      )}

      {description3.length > 0 && (
        <div className="combo-description-section">
          {description3.map((paragraph, index) => (
            <p key={`desc3-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}

      {imageModal.isOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imageModal.imageUrl} 
              alt={imageModal.altText} 
              className="zoomed-notation-image"
            />
          </div>
        </div>
      )}

      {videoModal.isOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3><span>{videoModal.numericNotation}</span></h3>
              <button className="close-button" onClick={closeVideoModal}>✕</button>
            </div>
            <video 
              controls 
              autoPlay 
              loop
              className="video-player"
              key={videoModal.videoUrl}
            >
              <source src={videoModal.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <NotationCheatsheet 
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
      />
    </>
  )
}

export default SoloCombosTab
