import './CharacterCard.css'

function CharacterCard({ character, onClick, image, isSelected }) {
  const cardClasses = `character-card ${isSelected ? 'selected' : ''} ${!character.isComplete ? 'coming-soon' : ''}`;
  
  return (
    <div className={cardClasses} onClick={() => onClick(character)}>
      {!character.isComplete && (
        <span className="coming-soon-badge">
          Coming Soon
        </span>
      )}
      <div className="character-icon">
        <div>
          <img src={`./champion-pics/low-res/${character.name.toLowerCase()}1.png`} alt={character.name} />
        </div>
      </div>
      <h3>{character.name}</h3>
    </div>
  )
}

export default CharacterCard
